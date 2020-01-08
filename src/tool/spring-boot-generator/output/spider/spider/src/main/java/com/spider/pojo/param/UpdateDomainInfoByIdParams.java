public class UpdateDomainInfoByIdParams {
        
        @Getter
        @Setter
        private Integer id;
        
        private UpdateDomainInfoByIdReq req;

        public UpdateDomainInfoByIdParams(Integer id, UpdateDomainInfoByIdReq req) {
                        this.id = id;
                        this.req = req;
        }

        public Integer getDomainId(){
                return req.getDomainId();
        }
        
        public String getDomain(){
                return req.getDomain();
        }
        
        public Integer getMaxSpeed(){
                return req.getMaxSpeed();
        }
        
        public Boolean getNeedCookie(){
                return req.getNeedCookie();
        }
        
        public String getRemark(){
                return req.getRemark();
        }
        
        public String getEncoding(){
                return req.getEncoding();
        }
        
        public String getHttpProtocal(){
                return req.getHttpProtocal();
        }
        
        public String getType(){
                return req.getType();
        }

}