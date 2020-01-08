public class UpdateTaskRunRecordByIdParams {
        
        @Getter
        @Setter
        private Integer id;
        
        private UpdateTaskRunRecordByIdReq req;

        public UpdateTaskRunRecordByIdParams(Integer id, UpdateTaskRunRecordByIdReq req) {
                        this.id = id;
                        this.req = req;
        }

        public Integer getTaskId(){
                return req.getTaskId();
        }
        
        public Integer getPageDownloaded(){
                return req.getPageDownloaded();
        }
        
        public Integer getSuccess(){
                return req.getSuccess();
        }
        
        public Integer getWorkerJoined(){
                return req.getWorkerJoined();
        }
        
        public Integer getStartTime(){
                return req.getStartTime();
        }
        
        public Integer getEndTime(){
                return req.getEndTime();
        }

}