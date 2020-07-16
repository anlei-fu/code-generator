>start
```shell
  consul agent -server   -bootstrap-expect=3  -join=192.168.117.146 -data-dir=/tmp/consul -node=node1 -client=0.0.0.0 -datacenter=shenzhen -ui
``` 
 
 * server： 以server身份启动。默认是 client|server
 * bootstrap-expect：集群要求的最少server数量，当低于这个数量，集群即失效。
 * data-dir：data存放的目录，更多信息请参阅consul数据同步机制
 * node：节点id，集群中的每个node必须有一个唯一的名称。默认情况下，Consul使用机器的hostname
 * bind：监听的ip地址。表示Consul监听的地址,而且它必须能够被集群中的其他节点访问。Consul默认会监听第一个* private IP,但最好还是提供一个。生产设备上的服务器通常有好几个网卡，所以指定一个不会出错
 * client: 客户端的ip地址，0.0.0.0是指谁都可以访问（不加这个，下面的ui :8500无法访问）
 * ui: 可以访问UI界面
 * -config-dir指定配置文件夹，Consul会加载其中的所有文件
 * -datacenter 指定数据中心名称，默认是dc1
 * -join cluster-address 集群地址
   
   ```shell
     # node1
     nohup  ./consul agent -server -bootstrap-expect=3 -data-dir=/tmp/consul -node=node1 -bind=192.168.117.146 -client=0.0.0.0 -datacenter=shenzhen -ui  >event.log 2>&1 & 
     # node2
    nohup ./consul agent -server -bootstrap-expect=3 -join=192.168.117.146 -data-dir=/tmp/consul -node=node2 -bind=192.168.117.149 -client=0.0.0.0 -datacenter=shenzhen  >event.log 2>&1 & 
     # node3
    nohup ./consul agent -server -bootstrap-expect=3 -join=192.168.117.146 -data-dir=/tmp/consul -node=node3 -bind=192.168.117.150 -client=0.0.0.0 -datacenter=shenzhen  >event.log 2>&1 & 
    # node 4
    nohup ./consul agent -server -bootstrap-expect=3 -join=192.168.117.146 -data-dir=/tmp/consul -node=node3 -bind=192.168.117.147 -client=0.0.0.0 -datacenter=shenzhen  >event.log 2>&1 & 
   ```

   ### Api list
   . X-Consul-Token  (token header)
   . /v1/agent/members  get members
   . PUT /v1/kv/foo (create new key)
   . GET /v1/kv/foo (get new key)
   .DELET /v1/kv/foo (delete kv)

   多个地址配置？
   安全校验？
   访问控制？
   持久化？
   服务与node共生死？
   事件监控？

TCP/8300
8300 端口用于服务器节点。客户端通过该端口 RPC 协议调用服务端节点。

TCP/UDP/8301
8301 端口用于单个数据中心所有节点之间的互相通信，即对 LAN 池信息的同步。它使得整个数据中心能够自动发现服务器地址，分布式检测节点故障，事件广播（如领导选举事件）。

TCP/UDP/8302
8302 端口用于单个或多个数据中心之间的服务器节点的信息同步，即对 WAN 池信息的同步。它针对互联网的高延迟进行了优化，能够实现跨数据中心请求。

8500
8500 端口基于 HTTP 协议，用于 API 接口或 WEB UI 访问。

8600
8600 端口作为 DNS 服务器，它使得我们可以通过节点名查询节点信息。


Agent——Agent是Consul集群中每个成员长时间运行的守护进程。它是通过运行consul agent启动的。Agent 可以运行在client或server模式。由于所有节点都必须运行一个agent，因此将节点称为客户端或服务器更简单，但agent还有其他实例。所有agent都可以运行DNS或HTTP接口，并负责运行检查和保持服务同步。
Client——Client是将所有RPC转发给服务器的agent。client是相对无状态的。client执行的唯一后台活动是参与局域网gossip池。 这具有最小的资源开销并且仅消耗少量的网络带宽。
Server——Server是具有扩展职责的 agent，包括参与Raft仲裁，维护集群状态，响应RPC查询，通过广域网的 gossip与其他数据中心通讯，以及将查询转发给leader或远程数据中心。
Datacenter——虽然数据中心的定义似乎是显而易见的，但必须考虑一些细微的细节。例如，在EC2中，多个可用区域被认为是由一个数据中心组成的？ 我们将数据中心定义为私有、低延迟和高带宽的网络环境。 这不包括通过公共互联网的通信，但为了我们的目的，单个EC2区域内的多个可用区域将被视为单个数据中心的一部分。
Consensus——在我们的文档中使用Consensus来表示对当选领导人的同意以及对交易顺序的协议。由于这些事务被应用于有限状态机，我们对Consensus的定义意味着复制状态机的一致性。 Consensus在Wikipedia上有更详细的描述，我们的实现在这里描述。
Gossip——Consul建立在Serf之上，它提供了一个完整的gossip协议用于多种目的。 Serf提供会员资格、失败检测和事件广播。 在Gossip文档中更多地描述了这些用法。 只要知道gossip涉及随机的节点到节点的通信就足够了，主要是通过UDP。
LAN Gossip——指包含全部位于同一局域网或数据中心的节点的局域网gossip池。
WAN Gossip——指仅包含服务器的WAN gossip池。 这些服务器主要位于不同的数据中心，通常通过互联网或广域网进行通信。
RPC——远程过程调用。 这是一个请求/响应机制，允许客户端发出服务器请求。


HTTP请求类型在许多HTTP API中被强制执行
以前使用任何HTTP请求类型的HTTP API中的许多端点现在检查特定的HTTP请求类型并强制执行它们。 这可能会破坏客户依靠旧的行为。 以下是更新的端点和所需的HTTP请求类型的完整列表：

Endpoint	HTTP 请求类型
/v1/acl/info	GET
/v1/acl/list	GET
/v1/acl/replication	GET
/v1/agent/check/deregister	PUT
/v1/agent/check/fail	PUT
/v1/agent/check/pass	PUT
/v1/agent/check/register	PUT
/v1/agent/check/warn	PUT
/v1/agent/checks	GET
/v1/agent/force-leave	PUT
/v1/agent/join	PUT
/v1/agent/members	GET
/v1/agent/metrics	GET
/v1/agent/self	GET
/v1/agent/service/register	PUT
/v1/agent/service/deregister	PUT
/v1/agent/services	GET
/v1/catalog/datacenters	GET
/v1/catalog/deregister	PUT
/v1/catalog/node	GET
/v1/catalog/nodes	GET
/v1/catalog/register	PUT
/v1/catalog/service	GET
/v1/catalog/services	GET
/v1/coordinate/datacenters	GET
/v1/coordinate/nodes	GET
/v1/health/checks	GET
/v1/health/node	GET
/v1/health/service	GET
/v1/health/state	GET
/v1/internal/ui/node	GET
/v1/internal/ui/nodes	GET
/v1/internal/ui/services	GET
/v1/session/info	GET
/v1/session/list	GET
/v1/session/node	GET
/v1/status/leader	GET
/v1/status/peers	GET
/v1/operator/area/:uuid/members	GET
/v1/operator/area/:uuid/join	PUT

作者：FlySheep_ly
链接：https://www.jianshu.com/p/e8abae723fbb
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。