 [HttpPost]
        public void ExportExcel()
        {
            var data = @nameService.Instance.ExportExcel(Request.Form);

            var table=new DataTable();
            var columns = new string[]
            {
@headers
            };

            foreach (var item in columns)
                table.Columns.Add(item);

            foreach (var item in data.List)
            {
                var row = table.NewRow();
@contents
                table.Rows.Add(row);
            }

            ExcelHelper.RenderExcel("导出数据.xls", table);
        }