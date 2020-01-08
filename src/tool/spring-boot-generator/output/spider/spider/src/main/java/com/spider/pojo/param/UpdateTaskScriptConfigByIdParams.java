public class UpdateTaskScriptConfigByIdParams {
        
        @Getter
        @Setter
        private Integer id;
        
        private UpdateTaskScriptConfigByIdReq req;

        public UpdateTaskScriptConfigByIdParams(Integer id, UpdateTaskScriptConfigByIdReq req) {
                        this.id = id;
                        this.req = req;
        }

        public Integer getTaskConfigMainId(){
                return req.getTaskConfigMainId();
        }
        
        public String getFile(){
                return req.getFile();
        }
        
        public Integer getVersion(){
                return req.getVersion();
        }
        
        public String getCreateTime(){
                return req.getCreateTime();
        }

}