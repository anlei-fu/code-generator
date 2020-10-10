        public IResult BatchDelete(string ids,int status){
                var idsNos = ids.Split(',');
                if(idsNos.Length == 0)
                   return new Result(false,"请至少选择一条数据");

                var t = 0;
                foreach(var id in idsNos){
                        if(handler.Save(id).Status)
                           t++;
                }

                return new Result(true,string.Format("一共修改了了{0}条数据",t));
        }