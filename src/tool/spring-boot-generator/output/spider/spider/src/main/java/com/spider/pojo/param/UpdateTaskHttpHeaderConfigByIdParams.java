public class UpdateTaskHttpHeaderConfigByIdParams {
        
        @Getter
        @Setter
        private Integer id;
        
        private UpdateTaskHttpHeaderConfigByIdReq req;

        public UpdateTaskHttpHeaderConfigByIdParams(Integer id, UpdateTaskHttpHeaderConfigByIdReq req) {
                        this.id = id;
                        this.req = req;
        }

        public String getTaskConfigMainId(){
                return req.getTaskConfigMainId();
        }
        
        public String getKey(){
                return req.getKey();
        }
        
        public String getValue(){
                return req.getValue();
        }
        
        public Integer getCreateTime(){
                return req.getCreateTime();
        }

}