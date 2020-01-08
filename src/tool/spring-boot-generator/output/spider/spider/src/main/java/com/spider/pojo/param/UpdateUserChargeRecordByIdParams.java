public class UpdateUserChargeRecordByIdParams {
        
        @Getter
        @Setter
        private Integer id;
        
        private UpdateUserChargeRecordByIdReq req;

        public UpdateUserChargeRecordByIdParams(Integer id, UpdateUserChargeRecordByIdReq req) {
                        this.id = id;
                        this.req = req;
        }

        public Integer getUserId(){
                return req.getUserId();
        }
        
        public Integer getWay(){
                return req.getWay();
        }
        
        public String getChargeAccount(){
                return req.getChargeAccount();
        }
        
        public String getOrderId(){
                return req.getOrderId();
        }
        
        public Float getAmount(){
                return req.getAmount();
        }
        
        public Integer getStatus(){
                return req.getStatus();
        }
        
        public Integer getChargeTime(){
                return req.getChargeTime();
        }

}