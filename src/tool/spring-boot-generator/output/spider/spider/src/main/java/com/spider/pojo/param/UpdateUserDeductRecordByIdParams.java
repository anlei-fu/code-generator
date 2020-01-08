public class UpdateUserDeductRecordByIdParams {
        
        @Getter
        @Setter
        private Integer id;
        
        private UpdateUserDeductRecordByIdReq req;

        public UpdateUserDeductRecordByIdParams(Integer id, UpdateUserDeductRecordByIdReq req) {
                        this.id = id;
                        this.req = req;
        }

        public Integer getTaskId(){
                return req.getTaskId();
        }
        
        public Float getPrice(){
                return req.getPrice();
        }
        
        public Integer getAmount(){
                return req.getAmount();
        }
        
        public Integer getDeductTime(){
                return req.getDeductTime();
        }

}