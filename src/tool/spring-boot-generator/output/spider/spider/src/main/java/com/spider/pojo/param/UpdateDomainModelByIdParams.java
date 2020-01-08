public class UpdateDomainModelByIdParams {
        
        @Getter
        @Setter
        private Integer id;
        
        private UpdateDomainModelByIdReq req;

        public UpdateDomainModelByIdParams(Integer id, UpdateDomainModelByIdReq req) {
                        this.id = id;
                        this.req = req;
        }

        public Integer getTaskId(){
                return req.getTaskId();
        }
        
        public Integer getDomainId(){
                return req.getDomainId();
        }
        
        public String getModel(){
                return req.getModel();
        }

}