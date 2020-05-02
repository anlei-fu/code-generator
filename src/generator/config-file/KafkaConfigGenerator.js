class KafkaConfigBuilder{
        /**
         * set server id
         * 每个broker都可以用一个唯一的非负整数id进行标识；
         * 这个id可以作为broker的“名字”，并且它的存在使得broker无须混淆consumers
         * 就可以迁移到不同的host/port上。
         * 你可以选择任意你喜欢的数字作为id，只要id是唯一的即可。
         */
        brokerId(id){

        }

        /**
         * broker的hostname；如果hostname已经设置的话，
         * broker将只会绑定到这个地址上；如果没有设置
         * ，它将绑定到所有接口，并发布一份到ZK
         * @param {String} host 
         */
        hostName(host){

        }

        /**
         * 如果设置，则就作为broker 的hostname发往producer、consumers以及其他brokers
         * 
         * @param {String} host 
         */
        advertisedHostNmae(host){

        }

        /**
         * 此端口将给与producers、consumers、以及其他brokers，
         * 它会在建立连接时用到； 它仅在实际端口和server需要绑定的端口不一样时才需要设置。
         * @param {Number} port 
         */
        advertisedPort(port){

        }

        /**
         * server接受客户端连接的端口
         * 
         * @param {Number} port 
         */
        port(port=6667){

        }

        /**
         *server用来处理网络请求的网络线程数目；
         一般你不需要更改这个属性。
         */
        networkThreadsCount(count=3){

        }

        /**
         * server用来处理请求的I/O线程的数目；
         * 这个线程数目至少要等于硬盘的个数。
         */
        ioThreadCount(count=8){

        }

        /**
         * set send buffer size
         */
        sendBufferSize(){

        }

        /**
         * set receive buffer size
         */
        receiveBufferSize(){

        }

        /**
         * server可以接收的消息最大尺寸。
         * 重要的是，consumer和producer有关这个属性的设置必须同步，
         * 否则producer发布的消息对consumer来说太大。
         * @param {Number} max 
         */
        messageMaxBytes(max){

        }

        /**
         * set max request bytes
         */
        requestMaxBytes(){

        }

        /**
         * set log dir
         * kafka存放数据的路径。这个路径并不是唯一的，
         * 可以是多个，路径之间只需要使用逗号分隔即可；
         * 每当创建新partition时，都会选择在包含最少partitions的路径下进行
         */
        logDir(){

        }

        /**
         * topic  partition的日志存放在某个目录下诸多文件中，
         * 这些文件将partition的日志切分成一段一段的；
         * 这个属性就是每个文件的最大尺寸；当尺寸达到这个数值时，
         * 就会创建新文件。此设置可以由每个topic基础设置时进行覆盖。
         * 查看  the per-topic  configuration section
         * @param {Number} bytes 
         */
        logSementBytes(bytes){

        }

        /**
         * 即使文件没有到达log.segment.bytes，只要文件创建时间到达此属性，
         * 就会创建新文件。这个设置也可以有topic层面的设置进行覆盖；
         * 查看the per-topic  configuration section
         * @param {Number} hours 
         */
        logRollHours(hours=24*7){

        }

        /**
         * 
         * @param {String} policy 
         */
        logCleanUpPolicy(policy="delete"){

        }

        /**
         * 每个topic下每个partition保存数据的总量；注意，
         * 这是每个partitions的上限
         * ，因此这个数值乘以partitions的个数就是每个topic保存的数据总量。
         * 同时注意：如果log.retention.hours和log.retention.bytes都设置了，
         * 则超过了任何一个限制都会造成删除一个段文件。
         * 注意，这项设置可以由每个topic设置时进行覆盖。
         * 查看the per-topic  configuration section
         * 
         * @param {Number} bytes 
         */
        logRentationBytes(bytes=-1){

        }

        /**
         * 当这个属性设置为false时，一旦日志的保存时间或者大小达到上限时，
         * 就会被删除；如果设置为true，则当保存属性达到上限时，
         * 就会进行log compaction。
         * 
         * @param {Boolean} enable 
         */
        logCleanerEnable(enable=false){

        }

        /**
         * 进行日志压缩的线程数
         * 
         * @param {Number} count 
         */
        logCleanerThreads(count=1){

        }

        /**
         * set partition count
         */
        partitionCount(){

        }

        recoveryThreadPerDataDir(){

        }

        offsetsTopicReplicationFactor(){

        }

        transanctionStateLogReplicationFator(){

        }

        transanctionStateLogMinIsr(){

        }

        logRetentionHours(){

        }

        logSegmentBytes(){

        }


        logRetentionCheckIntervalMs(){

        }


        /**
         * ZooKeeper连接字符串的格式为：hostname:port，
         * 此处hostname和port分别是ZooKeeper集群中某个节点的host和port；
         * 为了当某个host宕掉之后你能通过其他ZooKeeper节点进行连接，
         * 你可以按照一下方式制定多个hosts：hostname1:port1, hostname2:port2, 
         * hostname3:port3.ZooKeeper 允许你增加一个“chroot”路径，
         * 将集群中所有kafka数据存放在特定的路径下。
         * 当多个Kafka集群或者其他应用使用相同ZooKeeper集群时，
         * 可以使用这个方式设置数据存放路径。
         * 这种方式的实现可以通过这样设置连接字符串格式，
         * 如下所示：hostname1：port1，hostname2：port2，hostname3：port3/chroot/path
         * 这样设置就将所有kafka集群数据存放在/chroot/path路径下。注意，在你启动broker之前，
         * 你必须创建这个路径，并且consumers必须使用相同的连接格式。
         * 
         * @param {string} conections 
         */
        zookeeperConnet(conections){

        }

        zookeeperConnetionTimeout(){

        }

        groupInitialRebanLanceDelay(){
                
        }

        /**
         * 用于后台处理的线程数目，例如文件删除；你不需要更改这个属性
         * 
         * @param {Number} count 
         */
        backgroundThreadCount(count=4){

        }

        /**
         * 在网络线程停止读取新请求之前，可以排队等待I/O线程处理的最大请求个数。
         * 
         * @param {Number} count 
         */
        queuedMaxRequestCount(count=500){

        }








}