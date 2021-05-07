        public IResult BatchChangeStatus(string ids,int? status ,string userName){
                var idsNos = ids.Split(',');
                if(idsNos.Length == 0)
                   return new Result(false,"请至少选择一条数据");
                
                var entity = new ();
                entity.UpdateUser = userName;
                entity.UpdateTime = DateTime.Now;
                entity.Status= status;

                var t = 0;
                foreach(var id in idsNos){
                        if(handler.Save(id,entity).Status)
                           t++;
                }

                return new Result(true,string.Format("一共更新了{0}条数据",t));
        }