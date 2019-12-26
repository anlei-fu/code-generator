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
    /// Controller：QyTradeDownFund(流程控制)
    /// </summary>
    public class QyTradeDownFundController : MainBaseController
    {
        /// <summary>
        /// 显示列表页面数据
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            return View(QyTradeDownFundService.Instance.Query(Request.QueryString));
        }
        /// <summary>
        /// 预览详细信息页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult Details(string id)
        {
            return View(QyTradeDownFundService.Instance.Query(id));
        }
        /// <summary>
        /// 保存或修改页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult Item(string id)
        {
            return View(QyTradeDownFundService.Instance.QueryItem(id));
        }
        /// <summary>
        /// 克隆页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult ItemClone(string id)
        {
            return View(QyTradeDownFundService.Instance.QueryItem(id));
        }
        /// <summary>
        /// 预览页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult View(string id)
        {
            return View(QyTradeDownFundService.Instance.View(id));
        }
        public string Item()
        {
            try
            {
                MQyTradeDownFund entity = new MQyTradeDownFund();
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
                IResult result = QyTradeDownFundService.Instance.Delete(id);
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
            var data = QyTradeDownFundService.Instance.ExportExcel(Request.Form);

            var table=new DataTable();
            var columns = new string[]
            {
                "下游变动编号",
                "记账系统订单号",
                "交易系统订单号(激活编号)",
                "扩展订单号交易(权益卡号)",
                "扩展号(合同编号)",
                "权益包名称",
                "订单来源（系统编号）",
                "下游渠道编号",
                "下游支付账号",
                "变动创建时间",
                "订单日期(激活时间)",
                "变更类型",
                "订单金额",
                "变动金额(销售金额)",
                "订单面值(权益包价值)",
                "变动面值",
                "账户余额",
                "备注",

            };

            foreach (var item in columns)
                table.Columns.Add(item);

            foreach (var item in data.List)
            {
                var row = table.NewRow();
                row["下游变动编号"] =item.RecordId;
                row["记账系统订单号"] =item.QyOrderId;
                row["交易系统订单号(激活编号)"] =item.TradeOrderNo;
                row["扩展订单号交易(权益卡号)"] =item.ExtOrderNo;
                row["扩展号(合同编号)"] =item.ExtContractNo;
                row["权益包名称"] =item.ProductName;
                row["订单来源（系统编号）"] =item.OrderSource;
                row["下游渠道编号"] =item.GetDataValue("DownChannelNoName");
                row["下游支付账号"] =item.GetDataValue("DownAccountIdName");
                row["变动创建时间"] =item.ChangeTime;
                row["订单日期(激活时间)"] =item.OrderTime;
                row["变更类型"] =item.GetDataValue("ChangeTypeName");
                row["订单金额"] =item.OrderAmount;
                row["变动金额(销售金额)"] =item.ChangeAmount;
                row["订单面值(权益包价值)"] =item.OrderFace;
                row["变动面值"] =item.ChangeFace;
                row["账户余额"] =item.Balance;
                row["备注"] =item.Memo;

                table.Rows.Add(row);
            }

            ExcelHelper.RenderExcel("导出数据.xls", table);
        }
    }
}