       public IResult ImportExcel(HttpPostedFileBase files, string user)
       {
           try
           {
               string filePath = UploadHelperNew.UploadFile(files);
               DataTable dt = UploadHelperNew.Excel2Dataset(filePath, true).Tables[0];
               if (dt.Rows.Count <= 0)
               {
                   return new Result(false, MessageHelper.Instance.GetMessage(250));
               }
               return handler.ImportExcel(dt, user);
           }
           catch (Exception ex)
           {
               return new Result(false, ex.Message);
           }
       }