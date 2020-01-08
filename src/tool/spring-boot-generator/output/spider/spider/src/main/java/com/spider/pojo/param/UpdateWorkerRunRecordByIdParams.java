public class UpdateWorkerRunRecordByIdParams {
        
        @Getter
        @Setter
        private Integer id;
        
        private UpdateWorkerRunRecordByIdReq req;

        public UpdateWorkerRunRecordByIdParams(Integer id, UpdateWorkerRunRecordByIdReq req) {
                        this.id = id;
                        this.req = req;
        }

        public Integer getStartTime(){
                return req.getStartTime();
        }
        
        public Integer getEndTime(){
                return req.getEndTime();
        }

}