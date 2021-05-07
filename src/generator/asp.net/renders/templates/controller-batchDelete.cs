       
        [HttpPost]
        public IResult BatchDelete(string ids){
                return @nameService.Instance.BatchDelete(ids, status);
        }
