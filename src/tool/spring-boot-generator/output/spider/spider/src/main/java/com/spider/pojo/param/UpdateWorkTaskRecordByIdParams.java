public class UpdateWorkTaskRecordByIdParams {
        
        @Getter
        @Setter
        private Integer id;
        
        private UpdateWorkTaskRecordByIdReq req;

        public UpdateWorkTaskRecordByIdParams(Integer id, UpdateWorkTaskRecordByIdReq req) {
                        this.id = id;
                        this.req = req;
        }

        public Integer getTaskId(){
                return req.getTaskId();
        }
        
        public Integer getWorkerId(){
                return req.getWorkerId();
        }
        
        public Integer getTaskMainConfigId(){
                return req.getTaskMainConfigId();
        }
        
        public Integer getPageDownloaded(){
                return req.getPageDownloaded();
        }
        
        public Integer getDownloadSucess(){
                return req.getDownloadSucess();
        }
        
        public Integer getSuccess(){
                return req.getSuccess();
        }
        
        public Integer getExitCode(){
                return req.getExitCode();
        }
        
        public Integer getStartTime(){
                return req.getStartTime();
        }
        
        public Integer getEndTime(){
                return req.getEndTime();
        }

}