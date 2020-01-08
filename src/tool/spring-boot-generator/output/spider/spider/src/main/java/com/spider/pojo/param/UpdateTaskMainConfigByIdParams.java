public class UpdateTaskMainConfigByIdParams {
        
        @Getter
        @Setter
        private Integer id;
        
        private UpdateTaskMainConfigByIdReq req;

        public UpdateTaskMainConfigByIdParams(Integer id, UpdateTaskMainConfigByIdReq req) {
                        this.id = id;
                        this.req = req;
        }

        public Integer getTaskId(){
                return req.getTaskId();
        }
        
        public String getPattern(){
                return req.getPattern();
        }
        
        public String getEncoding(){
                return req.getEncoding();
        }
        
        public String getAgent(){
                return req.getAgent();
        }
        
        public Integer getTimeout(){
                return req.getTimeout();
        }
        
        public String getScriptVersion(){
                return req.getScriptVersion();
        }

}