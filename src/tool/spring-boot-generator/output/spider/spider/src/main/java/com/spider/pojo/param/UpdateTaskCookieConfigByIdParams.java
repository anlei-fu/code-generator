public class UpdateTaskCookieConfigByIdParams {
        
        @Getter
        @Setter
        private Integer id;
        
        private UpdateTaskCookieConfigByIdReq req;

        public UpdateTaskCookieConfigByIdParams(Integer id, UpdateTaskCookieConfigByIdReq req) {
                        this.id = id;
                        this.req = req;
        }

        public Integer getTaskConfigMainId(){
                return req.getTaskConfigMainId();
        }
        
        public Integer getDomainId(){
                return req.getDomainId();
        }
        
        public String getKey(){
                return req.getKey();
        }
        
        public String getValue(){
                return req.getValue();
        }
        
        public Integer getExpiration(){
                return req.getExpiration();
        }
        
        public Integer getCreateTime(){
                return req.getCreateTime();
        }

}