        /// <summary>
        /// 保存实体数据
        /// __id=null => create new or update by __id
        /// </summary>
        /// <param name="entity">实体数据</param>
        /// <returns></returns>
        [HttpPost]
        public string Item()
        {
            @table.name entity = new @table.name();
            entity.SetData(Request.Form);
            entity.TrimEmptyProperty();
            string id = Request.Form["__id"];
            IResult result = @table.nameService.Instance.Save(id, entity);
            if (result.Status)
            {
                result.SetSuccessMessage("保存成功");
            }
            else
            {
                result.SetErrorMessage("保存失败");
            }
            return result.ToString();
        }