using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Lib4Net.Core;
using Lib4Net.Framework.Settings;
using Lib4Net.Comm;
using Lib4Net.Logs;
using @project.UserService;
using @project.Entity;
using @project.Model;
using @project.Utility;

namespace @project.UserWeb.Controllers
{
    /// <summary>
    /// Controller：@name(流程控制)
    /// </summary>
    public class @nameController : MainBaseController
    {
@renderConfig

        /// <summary>
        /// 显示列表页面数据
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            var model = @nameService.Instance.Query(Request.QueryString);
            model.RenderConfigs = _renderConfig;
            return View(model);
        }

        /// <summary>
        /// 保存或修改页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult Item(string id)
        {
            var model = @nameService.Instance.QueryItem(id);
            return View(model);
        }

        /// <summary>
        /// 添加或编辑
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        [HttpPost]
        public string Item()
        {
            try
            {
                @prefix@name entity = new @prefix@name();
                entity.SetData(Request.Form);
                entity.TrimEmptyProperty();

                string id = Request.Form["__id"];
@defaultValue
@additionalParams
                IResult result = @nameService.Instance.Save(id, entity);
                if (result.Status)
                {
                    result.SetSuccessMessage("保存成功");
                }
                
                return result.ToString();
            }
            catch (Exception e)
            {
                return new Result(false, e.Message).ToString();
            }
        }

        /// <summary>
        /// 删除指定编号
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost]
        public string Delete(string id)
        {
            try
            {
                IResult result = @nameService.Instance.Delete(id);
                if (result.Status)
                {
                    result.SetSuccessMessage("删除成功");
                }

                return result.ToString();
            }
            catch (Exception e)
            {
                return new Result(false, e.Message).ToString();
            }
        }
@content
    }
}