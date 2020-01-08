public class UpdateTaskInfoByIdParams {
        
        @Getter
        @Setter
        private Integer id;
        
        private UpdateTaskInfoByIdReq req;

        public UpdateTaskInfoByIdParams(Integer id, UpdateTaskInfoByIdReq req) {
                        this.id = id;
                        this.req = req;
        }

        public Integer getUserId(){
                return req.getUserId();
        }
        
        public Integer getMainConfigId(){
                return req.getMainConfigId();
        }
        
        public String getDescription(){
                return req.getDescription();
        }
        
        public Integer getLevel(){
                return req.getLevel();
        }
        
        public Integer getStatus(){
                return req.getStatus();
        }
        
        public String getQueueId(){
                return req.getQueueId();
        }
        
        public Integer getTopicId(){
                return req.getTopicId();
        }
        
        public Integer getCreateTime(){
                return req.getCreateTime();
        }
        
        public Integer getEndTime(){
                return req.getEndTime();
        }

}