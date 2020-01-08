public class UpdateUserWalletByIdParams {
        
        @Getter
        @Setter
        private Integer id;
        
        private UpdateUserWalletByIdReq req;

        public UpdateUserWalletByIdParams(Integer id, UpdateUserWalletByIdReq req) {
                        this.id = id;
                        this.req = req;
        }

        public String getUserId(){
                return req.getUserId();
        }
        
        public Float getTotal(){
                return req.getTotal();
        }
        
        public Integer getCreateTime(){
                return req.getCreateTime();
        }

}