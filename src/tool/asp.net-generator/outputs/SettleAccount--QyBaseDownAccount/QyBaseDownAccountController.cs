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
    /// Controller：QyBaseDownAccount(流程控制)
    /// </summary>
    public class QyBaseDownAccountController : MainBaseController
    {
        /// <summary>
        /// 显示列表页面数据
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            return View(QyBaseDownAccountService.Instance.Query(Request.QueryString));
        }
        /// <summary>
        /// 预览详细信息页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult Details(string id)
        {
            return View(QyBaseDownAccountService.Instance.Query(id));
        }
        /// <summary>
        /// 保存或修改页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult Item(string id)
        {
            return View(QyBaseDownAccountService.Instance.QueryItem(id));
        }
        /// <summary>
        /// 克隆页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult ItemClone(string id)
        {
            return View(QyBaseDownAccountService.Instance.QueryItem(id));
        }
        /// <summary>
        /// 预览页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult View(string id)
        {
            return View(QyBaseDownAccountService.Instance.View(id));
        }
        public string Item()
        {
            try
            {
                MQyBaseDownAccount entity = new MQyBaseDownAccount();
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
                IResult result = QyBaseDownAccountService.Instance.Delete(id);
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
 [HttpPost]
        public void ExportExcel()
        {
            var data = QyBaseDownAccountService.Instance.ExportExcel(Request.Form);

            var table=new DataTable();
            var columns = new string[]
            {
                "账户编号",
                "账号名称",
                "查询余额",
                "理论余额",
                "授信金额",
                "创建人",
                "创建时间",
                "最后更新人",
                "最后更新时间",

            };

            foreach (var item in columns)
                table.Columns.Add(item);

            foreach (var item in data.List)
            {
                var row = table.NewRow();
                row["账户编号"] =item.GetDataValue("AccountIdName");
                row["账号名称"] =item.AccountName;
                row["查询余额"] =item.QueryBalance;
                row["理论余额"] =item.InnerBalance;
                row["授信金额"] =item.CreditMoney;
                row["创建人"] =item.CreatedUser;
                row["创建时间"] =item.CreatedTime;
                row["最后更新人"] =item.LastEditUser;
                row["最后更新时间"] =item.LastEditTime;

                table.Rows.Add(row);
            }

            ExcelHelper.RenderExcel("导出数据.xls", table);
        }
    }
}