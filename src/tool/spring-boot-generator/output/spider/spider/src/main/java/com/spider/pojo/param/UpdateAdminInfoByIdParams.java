public class UpdateAdminInfoByIdParams {
        
        @Getter
        @Setter
        private Integer id;
        
        private UpdateAdminInfoByIdReq req;

        public UpdateAdminInfoByIdParams(Integer id, UpdateAdminInfoByIdReq req) {
                        this.id = id;
                        this.req = req;
        }

        public String getAccount(){
                return req.getAccount();
        }
        
        public String getPassword(){
                return req.getPassword();
        }
        
        public Integer getLevel(){
                return req.getLevel();
        }

}