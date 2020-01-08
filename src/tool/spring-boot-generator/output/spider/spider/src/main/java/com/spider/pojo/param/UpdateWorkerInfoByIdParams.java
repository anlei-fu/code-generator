public class UpdateWorkerInfoByIdParams {
        
        @Getter
        @Setter
        private Integer id;
        
        private UpdateWorkerInfoByIdReq req;

        public UpdateWorkerInfoByIdParams(Integer id, UpdateWorkerInfoByIdReq req) {
                        this.id = id;
                        this.req = req;
        }

        public String getIp(){
                return req.getIp();
        }
        
        public String getDescription(){
                return req.getDescription();
        }
        
        public Integer getJoinTime(){
                return req.getJoinTime();
        }
        
        public Integer getLastRunTime(){
                return req.getLastRunTime();
        }

}