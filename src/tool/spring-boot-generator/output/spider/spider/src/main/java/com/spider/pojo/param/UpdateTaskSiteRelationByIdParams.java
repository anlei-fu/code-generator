public class UpdateTaskSiteRelationByIdParams {
        
        @Getter
        @Setter
        private Integer id;
        
        private UpdateTaskSiteRelationByIdReq req;

        public UpdateTaskSiteRelationByIdParams(Integer id, UpdateTaskSiteRelationByIdReq req) {
                        this.id = id;
                        this.req = req;
        }

        public Integer getSiteId(){
                return req.getSiteId();
        }
        
        public Integer getTaskId(){
                return req.getTaskId();
        }
        
        public Integer getUserId(){
                return req.getUserId();
        }
        
        public String getDomain(){
                return req.getDomain();
        }

}