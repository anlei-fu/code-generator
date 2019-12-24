        [HttpPost]
        public void ExportExcel()
        {
            var data = FCPhoneChargeService.Instance.ExportExcel(Request.Form);

            var table=new DataTable();
            var columns = new string[]//headers
            {
               "编号",
               "号码",
               "面值",
               "备注",
               "创建时间",
               "创建人",
               "处理状态",
               "订单编号",
               "充值时间",
               "消息记录",
               "激活时间"

            };

            foreach (var item in columns)
                table.Columns.Add(item);

            foreach (var item in data.List)
            {
                var row = table.NewRow();
                  
               row["编号"] = item.Id;
               row["号码"] = item.Phone;
               row["面值"] = item.Face;
               row["备注"] = item.Remark;
               row["创建时间"] = item.CreateTime;
               row["创建人"] = item.Creator;
               row["处理状态"] = item.Status;
               row["订单编号"] = item.OrderNo;
               row["充值时间"] = item.ChargeTime;
               row["消息记录"] = item.ResultMsg;
               row["激活时间"] = item.ActivateTime;

                table.Rows.Add(row);
            }

            ExcelHelper.RenderExcel("导出结果.xls", table);
        }