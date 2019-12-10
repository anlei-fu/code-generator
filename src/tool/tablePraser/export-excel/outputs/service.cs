        /// <summary>
        /// ??excel
        /// </summary>
        /// <param name="nvc"></param>
        /// <returns></returns>
        public FCPhoneChargeListModel ExportExcel(NameValueCollection nvc)
        {
            var entity = new MFCPhoneCharge();
            entity.SetData(nvc, false);
            entity.TrimEmptyProperty();

            var st = CommFun.ToDateTime(nvc["st"], DateTime.Now).Value.ToString("yyyy-MM-dd");
            var et = CommFun.ToDateTime(nvc["et"], DateTime.Now).Value.AddDays(1).ToString("yyyy-MM-dd");
            entity.AddData("ST", st);
            entity.AddData("ET", et);

            var model = new FCPhoneChargeListModel();

            model.List = handler.GetDataListByTemplate("exportExcel", entity);

            return model;
        }