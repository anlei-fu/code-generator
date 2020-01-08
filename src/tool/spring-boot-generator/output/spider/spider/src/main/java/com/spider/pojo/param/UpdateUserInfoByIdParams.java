public class UpdateUserInfoByIdParams {
        
        @Getter
        @Setter
        private Integer id;
        
        private UpdateUserInfoByIdReq req;

        public UpdateUserInfoByIdParams(Integer id, UpdateUserInfoByIdReq req) {
                        this.id = id;
                        this.req = req;
        }

        public String getPhoneNo(){
                return req.getPhoneNo();
        }
        
        public String getEmail(){
                return req.getEmail();
        }
        
        public String getPassword(){
                return req.getPassword();
        }
        
        public String getLastLoginIp(){
                return req.getLastLoginIp();
        }
        
        public Integer getLastLoginTime(){
                return req.getLastLoginTime();
        }
        
        public Integer getCreateTime(){
                return req.getCreateTime();
        }

}