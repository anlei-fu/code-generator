        
        public IResult BatchChangeStatus(string ids,int status){
            return @nameService.Instance.BatchChangeStatus(ids, status, LoginStatus.UserName);
        }
