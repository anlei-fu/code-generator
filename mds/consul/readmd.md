>start
```shell
  consul agent -server -bootstrap-expect=3 -data-dir=/tmp/consul -node=192.168.117.146 -bind=192.168.117.146 -client=0.0.0.0 -datacenter=shenzhen -ui
``` 
 
 * server： 以server身份启动。默认是 client|server
 * bootstrap-expect：集群要求的最少server数量，当低于这个数量，集群即失效。
 * data-dir：data存放的目录，更多信息请参阅consul数据同步机制
 * node：节点id，集群中的每个node必须有一个唯一的名称。默认情况下，Consul使用机器的hostname
 * bind：监听的ip地址。默认绑定0.0.0.0，可以不指定。表示Consul监听的地址,而且它必须能够被集群中的其他节点访问。Consul默认会监听第一个* private IP,但最好还是提供一个。生产设备上的服务器通常有好几个网卡，所以指定一个不会出错
 * client: 客户端的ip地址，0.0.0.0是指谁都可以访问（不加这个，下面的ui :8500无法访问）
 * ui: 可以访问UI界面
 * -config-dir指定配置文件夹，Consul会加载其中的所有文件
 * -datacenter 指定数据中心名称，默认是dc1