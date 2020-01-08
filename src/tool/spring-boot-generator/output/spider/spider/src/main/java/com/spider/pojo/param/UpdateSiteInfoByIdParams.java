public class UpdateSiteInfoByIdParams {
        
        @Getter
        @Setter
        private Integer id;
        
        private UpdateSiteInfoByIdReq req;

        public UpdateSiteInfoByIdParams(Integer id, UpdateSiteInfoByIdReq req) {
                        this.id = id;
                        this.req = req;
        }

        public String getMainDomain(){
                return req.getMainDomain();
        }
        
        public String getDescription(){
                return req.getDescription();
        }
        
        public String getType(){
                return req.getType();
        }

}