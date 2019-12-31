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
    /// Controller：QyBaseDownChannel(流程控制)
    /// </summary>
    public class QyBaseDownChannelController : MainBaseController
    {
        /// <summary>
        /// 显示列表页面数据
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            return View(QyBaseDownChannelService.Instance.Query(Request.QueryString));
        }
        /// <summary>
        /// 预览详细信息页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult Details(string id)
        {
            return View(QyBaseDownChannelService.Instance.Query(id));
        }
        /// <summary>
        /// 保存或修改页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult Item(string id)
        {
            return View(QyBaseDownChannelService.Instance.QueryItem(id));
        }
        /// <summary>
        /// 克隆页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult ItemClone(string id)
        {
            return View(QyBaseDownChannelService.Instance.QueryItem(id));
        }
        /// <summary>
        /// 预览页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult View(string id)
        {
            return View(QyBaseDownChannelService.Instance.View(id));
        }
        public string Item()
        {
            try
            {
                MQyBaseDownChannel entity = new MQyBaseDownChannel();
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
                IResult result = QyBaseDownChannelService.Instance.Delete(id);
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
            var data = QyBaseDownChannelService.Instance.ExportExcel(Request.Form);

            var table=new DataTable();
            var columns = new string[]
            {
                "渠道编号",
                "渠道名称",
                "所属公司",
                "所属系统编号",
                "状态",
                "佣金余额",
                "报警余额",
                "下游账户id",
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
                row["渠道编号"] =item.ChannelNo;
                row["渠道名称"] =item.ChannelName;
                row["所属公司"] =item.CompanyId;
                row["所属系统编号"] =item.SourceSystemId;
                row["状态"] =item.GetDataValue("StatusName");
                row["佣金余额"] =item.CommiBalance;
                row["报警余额"] =item.WarnBalance;
                row["下游账户id"] =item.GetDataValue("AccountName");
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