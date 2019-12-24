        /// <summary>
        /// 导出excel
        /// </summary>
        /// <param name="nvc"></param>
        /// <returns></returns>
        public @nameListModel ExportExcel(NameValueCollection nvc)
        {
            var entity = new M@name();
            entity.SetData(nvc, false);
            entity.TrimEmptyProperty();

            var st = CommFun.ToDateTime(nvc["st"], DateTime.Now).Value.ToString("yyyy-MM-dd");
            var et = CommFun.ToDateTime(nvc["et"], DateTime.Now).Value.AddDays(1).ToString("yyyy-MM-dd");
            entity.AddData("ST", st);
            entity.AddData("ET", et);

            var model = new @nameListModel();

            model.List = handler.GetDataListByTemplate("exportExcel", entity);

            return model;
        }