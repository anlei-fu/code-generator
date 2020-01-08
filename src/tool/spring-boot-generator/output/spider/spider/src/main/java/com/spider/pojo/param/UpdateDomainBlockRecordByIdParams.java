public class UpdateDomainBlockRecordByIdParams {
        
        @Getter
        @Setter
        private Integer id;
        
        private UpdateDomainBlockRecordByIdReq req;

        public UpdateDomainBlockRecordByIdParams(Integer id, UpdateDomainBlockRecordByIdReq req) {
                        this.id = id;
                        this.req = req;
        }

        public Integer getDomainId(){
                return req.getDomainId();
        }
        
        public Integer getWorkerId(){
                return req.getWorkerId();
        }
        
        public Integer getTaskId(){
                return req.getTaskId();
        }
        
        public Integer getUserId(){
                return req.getUserId();
        }
        
        public String getRemark(){
                return req.getRemark();
        }
        
        public Integer getBlockTime(){
                return req.getBlockTime();
        }

}