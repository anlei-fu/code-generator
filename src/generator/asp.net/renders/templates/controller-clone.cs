       
        public ActionResult Clone(string id){
            var item = @nameService.Instance.QueryItem(id);
            item.Id = "";
            return View(item);
        }
