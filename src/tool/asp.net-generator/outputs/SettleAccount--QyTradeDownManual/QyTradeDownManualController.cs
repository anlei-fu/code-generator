using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Lib4Net.Core;
using Lib4Net.Framework.Settings;
using Lib4Net.Comm;
using Lib4Net.Logs;
using SettleAccount.UserService;
using SettleAccount.Entity;
using SettleAccount.Model;
using SettleAccount.Utility;

namespace SettleAccount.UserWeb.Controllers
{
    /// <summary>
    /// Controller：QyTradeDownManual(流程控制)
    /// </summary>
    public class QyTradeDownManualController : MainBaseController
    {
        /// <summary>
        /// 显示列表页面数据
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            return View(QyTradeDownManualService.Instance.Query(Request.QueryString));
        }
        /// <summary>
        /// 预览详细信息页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult Details(string id)
        {
            return View(QyTradeDownManualService.Instance.Query(id));
        }
        /// <summary>
        /// 保存或修改页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult Item(string id)
        {
            return View(QyTradeDownManualService.Instance.QueryItem(id));
        }
        /// <summary>
        /// 克隆页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult ItemClone(string id)
        {
            return View(QyTradeDownManualService.Instance.QueryItem(id));
        }
        /// <summary>
        /// 预览页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult View(string id)
        {
            return View(QyTradeDownManualService.Instance.View(id));
        }
        public string Item()
        {
            try
            {
                MQyTradeDownManual entity = new MQyTradeDownManual();
                entity.SetData(Request.Form);
                entity.TrimEmptyProperty();

                string id = Request.Form["__id"];
@handlerAddId

                IResult result = FCDownchannelService.Instance.Save(id, entity);
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
                IResult result = QyTradeDownManualService.Instance.Delete(id);
                if (result.Status)
                {
                    result.SetSuccessMessage("删除成功");
                }
                else
                {
                    result.SetErrorMessage("删除失败");
                }

                return result.ToString();
            }
            catch (Exception e)
            {
                return new Result(false, e.Message).ToString();
            }
        }

    }
}