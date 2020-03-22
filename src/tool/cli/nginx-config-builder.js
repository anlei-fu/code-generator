class UpStreamBuilder{
    name(){

    }

    type(){

    }

    weight(){

    }

    hash(){

    }
}

class UpStreamServerBuilder{
   
   /**
    * 
    */
   address(addr){

   }

   backUp(){

   }
}

class ServerBuilder{

        /**
         * 
         * @param {Number} port 
         * @param {String} type  ssl|none|tsl
         */
        listen(port,type){
                
        }

        keepAliveRequest(){

        }

        serverName(){

        }

        proxyPass(){

        }

        /**
         * 
         * @param {String|[String]} addr 
         */
        deny(addr){

        }

        /**
         * 
         * @param {String|[String]} addr 
         */
        allow(addr){

        }

        /**
         *  HTTP 自动跳转 HTTPS
         */
        rewrite(){

        }

        /**
         * C:\WebServer\Certs\certificate.crt;
         */
        sslCertificate(){

        }

        /**
         * C:\WebServer\Certs\private.key;
         */
        sslCertificateKey(){

        }
        
        /**
         * 
         */
        sslSessionCache(){

        }

        /**
         * 
         */
        sslSessionTimeout(){

        }

        /**
         * 
         */
        sslProtocols(){

        }

        /**
         * 
         */
        sslCiphers(){

        }

        /**
         * 
         */
        sslPreferServerCipher(){

        }


       
}

class HttpBuilder{
        /**
         * #文件扩展名与文件类型映射表
         */
        include(path){

        }

        /**
         * #默认文件类型
         */
        defaultType(){

        }

        /**
         * #默认编码
         */
        charset(){

        }

        /**
         * #服务器名字的hash表大小
         */
        serverNamseHashBucketSize(){

        }

        /**
         * #上传文件大小限制
         */
        clientHeaderBufferSize(){

        }

        /**
         * #设定请求缓
         */
        largeClientHeaderBufferSize(){

        }

        /**
         * #设定请求缓
         */
        clientMaxBodySize(){

        }

        /**
         *  # 显示目录
         */
        autoIndex(){

        }

        /**
         * 显示文件大小 默认为on,显示出文件的确切大小,单位是bytes 改为off
         */
        autoIndexExactSize(){

        }

        /**
         *  显示文件时间 默认为off,显示的文件时间为GMT时间 改为on后,显示的文件时间为文件的服务器时间
         */
        autoIndexLocalTime(){

        }

        accessLog(){

        }

        logFormat(){

        }

        sendFile(){

        }

        sendFileMaxChunk(){

        }

        /**
         * (单位s)设置客户端连接保持活动的超时时间,在超过这个时间后服务器会关闭该链接
         */
        keepAliveTimeout(){

        }

        errorPage(){

        }

        /**
         * # 防止网络阻塞
         */
        tcpNoPush(){

        }

        /**
         * # 防止网络阻塞
         */
        tcpNoDelay(){

        }

}

class EventBuilder{
    acceptMutex(){
            return this;
    }

    /**
     * 参考事件模型,use [ kqueue | rtsig | epoll | /dev/poll | select | poll ]; epoll模型是Linux 2.6以上版本内核中的高性能网络I/O模型,如果跑在FreeBSD上面,就用kqueue模型.
     */
    useMode(type){
        return this;

    }
    mutiAccept(){
            return this;
    }

    /**
     * 单个进程最大连接数（最大连接数=连接数*进程数）
     */
    workerConnection(){
            return this;
    }
}

class LocationBuilder{

       match(){
        return this;
       }

       root(){
        return this;
       }

       expires(){
        return this;
       }
       
       proxyDirect(){
        return this;
       }

       host(){
        return this;
       }

       xRealIp(){
        return this;
       }

       xForwardedFor(){
        return this;
       }

       xlienMaxBodySize(){
        return this;
       }

       clientBodyBufferSize(){
        return this;
       }

       proxySendTimeout(){
        return this;
       }

       proxyReadTimeout(){
        return this;
       }

       proxyBuffers(){
        return this;
       }
}


class NginxConfigBuilder{
       
        user(){
                return this;
        }

        /**
         * 全局错误日志定义类型
         */
        errorLog(path, type){
                return this;
        }

        /**
         * 进程文件
         */
        pid(path){
                return this;
        }

        /**
         * nginx进程数,建议设置为等于CPU总核心数.
         */
        processorCount(count){
                return this;
        }

        /**
         * 一个nginx进程打开的最多文件描述符数目,理论值应该是最多打开文件数（系统的值ulimit -n）与nginx进程数相除,但是nginx分配请求并不均匀,所以建议与ulimit -n的值保持一致.
         * @param {*} count 
         */
        workerRLimitNofile(count){
                return this;
        }

        /**
         * 开启限制IP连接数的时候需要使用
         */
        limitZone(){
                return this;
        }
}

class GZipBuilder{
        gZip(){

        }

        /**
         *  #允许压缩的页面的最小字节数,页面字节数从header偷得content-length中获取.默认是0,不管页面多大都进行压缩.建议设置成大于1k的字节数,小于1k可能会越压越大
         */
        gZipMinLength(){

        }

        /**
         * #表示申请4个单位为16k的内存作为压缩结果流缓存,默认值是申请与原始数据大
         */
        gzipBuffer(){

        }

        /**
         * #压缩版本
         */
        gzipHttpVersion(){

        }


        /**
         * 压缩等级.1压缩比最小,处理速度快.9压缩比最大,比较消耗cpu资源,处理速度最慢,但是因为压缩比最大,所以包最小,传输速度快
         */
        gzipCompLevel(){

        }

        /**
         * 压缩类型,默认就已经包含text/html,所以下面就不用再写了,写上去也不会有问题,但是会有一个warn.
         */
        gzipType(){

        }

        /**
         * #选项可以让前端的缓存服务器缓存经过gzip压缩的页面.例如:用squid缓存经过nginx压缩的数据
         */
        gzipVary(){

        }

}