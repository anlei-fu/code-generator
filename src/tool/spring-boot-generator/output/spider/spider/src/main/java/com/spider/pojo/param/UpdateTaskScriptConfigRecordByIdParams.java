public class UpdateTaskScriptConfigRecordByIdParams {
        
        @Getter
        @Setter
        private Integer id;
        
        private UpdateTaskScriptConfigRecordByIdReq req;

        public UpdateTaskScriptConfigRecordByIdParams(Integer id, UpdateTaskScriptConfigRecordByIdReq req) {
                        this.id = id;
                        this.req = req;
        }

        public String getFile(){
                return req.getFile();
        }
        
        public Integer getVersion(){
                return req.getVersion();
        }
        
        public Integer getAction(){
                return req.getAction();
        }

}