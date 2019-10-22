        public ActionResult ImportExcel(string id) { return View(); }
        [HttpPost]
        public ActionResult ImportExcel()
        {
            HttpPostedFileBase files = Request.Files["filePath"];
            IResult result = @table.nameService.Instance.ImportExcel(files, LoginStatus.UserName);
            ViewBag.Message = result.Message;
            return View();
        }