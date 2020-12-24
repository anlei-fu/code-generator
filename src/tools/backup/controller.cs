using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Mvc;
using Lib4Net.Core;
using Lib4Net.Comm;
using Lib4Net.Logs;
using DMSystem.UserService;
using DMSystem.Entity;
using DMSystem.Model;
using System.Data;
using DMSystem.Utility;
using UserSystem.UserService;
using UserSystem.Entity;
using DMSystem.Memcached;
using Lib4Net.Data;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json;



namespace DMSystem.UserWeb.Controllers
{
    /// <summary>
    /// Controller：AdHourReport(广告报表)
    /// </summary>
    public class AdHourReportController : MainBaseController
    {
        private static ILogger logger = LoggerManager.Instance.GetLogger("web");

        private static readonly HashSet<string> _flowDisallowFieldsNames = new HashSet<string>()
        {
            "激活数",
            "激活成本",
            "有效激活成本",
            "激活率",
            "有效激活率",
            "首充数",
            "首充率",
            "本网数",
            "本网率"
        };

        /// <summary>
        /// 流量包不显示字段
        /// </summary>
        private static readonly HashSet<string> _flowDisabledFields = new HashSet<string>()
            {
                "activatecount",
                "activatecost",
                "activaterate",
                "validactivaterate",
                "rechargecount",
                "rechargerate",
                "onnetcount",
                "onnetrate",
            };

        protected override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            Response.Cache.SetCacheability(System.Web.HttpCacheability.NoCache);
            base.OnActionExecuting(filterContext);
        }
        /// <summary>
        /// 显示列表页面数据
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            var set = Request["BusinessType"] == "4" ? _flowDisabledFields : new HashSet<string>();

            if (Request["TimePeriod"] == "4")
            {
                set = new HashSet<string>(set.ToArray());
                set.Add("reporttime");
            }

            ViewBag.DisabledFields = set;

            return View(AdHourReportService.Instance.Query(Request.QueryString));
        }

        public ActionResult CardReport() {
            return View(ReportNew());
        }

        private DataTable ReportNew()
        {
            if (Request.QueryString.Count == 0)
                return new DataTable();

            var table = AdHourReportService.Instance.QueryNew(Request.QueryString);
            table = PickColumns(table, Request.QueryString["BusinessType"]);
            return table;
        }

        private DataTable PickColumns(DataTable source, string businessType) 
        {
            var fieldsConfig = GetPageConfig("/adhourreport/index").FieldsList;
            fieldsConfig = fieldsConfig.FindAll(x => x.Status == 1);
            if (businessType == "1")
            {
                var columns = CollectionUtils.PickFiled(fieldsConfig, x => x.FieldText).ToArray();
                return source.Extract(columns);
            }
            else 
            {
                var columns = CollectionUtils.PickFiled(fieldsConfig, x => x.FieldText)
                                             .ToList()
                                             .FindAll(x => !_flowDisallowFieldsNames.Contains(x))
                                             .ToArray();
                return source.Extract(columns);
            }
        }


        public ActionResult FlowReport()
        {

            var set = Request["BusinessType"] == "4" ? _flowDisabledFields : new HashSet<string>();

            if (Request["TimePeriod"] == "4")
            {
                set = new HashSet<string>(set.ToArray());
                set.Add("reporttime");
            }

            ViewBag.DisabledFields = set;

            return View(AdHourReportService.Instance.Query(Request.QueryString));
        }


        /// <summary>
        /// 预览详细信息页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult Details(string id)
        {
            return View(AdHourReportService.Instance.Query(id));
        }
        /// <summary>
        /// 保存或修改页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult Item(string id)
        {
            return View(AdHourReportService.Instance.QueryItem(id));
        }
        /// <summary>
        /// 预览页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult View(string id)
        {
            return View(AdHourReportService.Instance.View(id));
        }
        /// <summary>
        /// 保存实体数据
        /// </summary>
        /// <param name="entity">实体数据</param>
        /// <returns></returns>
        [HttpPost]
        public string Item()
        {
            MAdHourReport entity = new MAdHourReport();
            entity.SetData(Request.Form);

            string id = Request.Form["__id"];
            IResult result = AdHourReportService.Instance.Save(id, entity);
            if (!result.Status)
                logger.Fatal(string.Format("原始请求串:%s\r\n处理失败串:",
                    CommFun.GetRequestParams(Request).ToString(),
                    result.Message));
            else
                result.SetSuccessMessage("处理成功");
            return result.ToString();
        }
        /// <summary>
        /// 删除指定编号
        /// </summary>
        /// <param name="id"></param>
        /// <returns></returns>
        [HttpPost]
        public string Delete(string id)
        {
            IResult result = AdHourReportService.Instance.Delete(id);
            if (!result.Status)
                logger.Fatal(string.Format("原始请求串:%s\r\n处理失败串:",
                    CommFun.GetRequestParams(Request).ToString(),
                    result.Message));
            else
                result.SetSuccessMessage("处理成功");
            return result.ToString();
        }


        /// <summary>
        /// 导出Excel
        /// </summary>
        [HttpPost]
        public void ExportExcel()
        {
            List<MAdHourReport> lst = AdHourReportService.Instance.Query(Request.Form).List;
            DataTable dt = new DataTable();
            /*UserSystem.Model.MUsSystemFunctionNew model = UsSystemFunctionNewService.Instance.QueryCurrierPageInfo("/adhourreport/index", GetSetting("SystemNo"));
            List<MPageFieldsConfigNew> pageFieldsList = PageFieldsConfigNewService.Instance.QueryPaegFieldsInfo(model.FunctionID, LoginStatus.UserName);*/
            string getFieldsListUrl = GetSetting("GetFieldsListUrl");
            string pagePath = "/adhourreport/index";
            string systemNo = GetSetting("SystemNo");
            string userPageInfoKey = string.Format("{0}_{1}_{2}", pagePath, GetSetting("SystemNo"), LoginStatus.UserName);
            PageConfigModel model = CacheManagement.GetHashValue<PageConfigModel>(CacheType.PageFieldsInfo, userPageInfoKey);
            if (model == null || model.FieldsList.Count == 0)
            {

                string times = CommonHelper.GetTimeStamp();
                string signSource = pagePath + systemNo + times + LoginStatus.UserName + "D0VF2Z44602L20TV6H88H6B2046Z4PLX";
                string sign = CommonHelper.Md5Encrypt(signSource);
                string postUrlParams = string.Format("pagePath={0}&systemNo={1}&timestamp={2}&userName={3}&sign={4}", pagePath, systemNo, times, LoginStatus.UserName, sign);

                //请求接口
                string a = CommonHelper.GetTimeStamp();
                string http_respone_str = HttpHelper.PostUrl(getFieldsListUrl, postUrlParams);
                model = JsonData.JavaScriptDeserialize<PageConfigModel>(http_respone_str);
                model.Configed = 0;
            }


            var set = Request["BusinessType"] == "4" ? _flowDisabledFields : new HashSet<string>();

            if (Request["TimePeriod"] == "4")
                set.Add("reporttime");

            foreach (PageFieldsList field in model.FieldsList)
            {
                if (field.Status == 1)
                {
                    model.Configed += 1;
                }
            }

            if (model.Configed == 0)
            {
                foreach (PageFieldsList item in model.FieldsList)
                {
                    if (!set.Contains(item.FieldName))
                        dt.Columns.Add(item.FieldText);
                }
            }
            else
            {
                foreach (PageFieldsList item in model.FieldsList)
                {
                    if (item.Status == 1 && !set.Contains(item.FieldName))
                    {
                        dt.Columns.Add(item.FieldText);
                    }
                }
            }

            foreach (var item in lst)
            {
                DataRow dr = dt.NewRow();
                if (model.Configed == 0)
                {
                    int i = 0;
                    foreach (PageFieldsList f in model.FieldsList)
                    {
                        if (!set.Contains(f.FieldName))
                        {
                            var value = item.GetDataValue(f.FieldName);
                            var valueStr = value == null ? "" : value.ToString();
                            valueStr = valueStr == "%" ? "" : valueStr;
                            valueStr = valueStr.StartsWith(".") ? "0" + valueStr : valueStr;
                            dr[i] = valueStr;
                            i++;
                        }
                    }

                }
                else
                {
                    int i = 0;
                    foreach (PageFieldsList f in model.FieldsList)
                    {
                        if (f.Status == 1 && !set.Contains(f.FieldName))
                        {
                            var value = item.GetDataValue(f.FieldName);
                            var valueStr = value == null ? "" : value.ToString();
                            valueStr = valueStr == "%" ? "" : valueStr;
                            valueStr = valueStr.StartsWith(".") ? "0" + valueStr : valueStr;
                            dr[i] = valueStr;
                            i++;
                        }
                    }
                }

                dt.Rows.Add(dr);
            }
            ExcelHelper.SaveCSV("AdHourReport", dt);
        }



        protected override void OnException(ExceptionContext filterContext)
        {
            logger.Fatal("发生异常", filterContext.Exception);
            base.OnException(filterContext);
        }

        /// <summary>
        /// 用户页面字段配置信息
        /// </summary>
        /// <returns></returns>
        public ActionResult UserFieldsConfig()
        {
            //List<MUserFieldsConfig> model = UserFieldsConfigService.Instance.QueryUserFieldsSaveInfo(Request.QueryString["__functionID"], LoginStatus.UserName);
            string userPageInfoKey = string.Format("{0}_{1}_{2}", "/adhourreport/index", GetSetting("SystemNo"), LoginStatus.UserName);
            List<PageFieldsList> model = new List<Model.PageFieldsList>();//CacheManagement.GetHashValue<PageConfigModel>(CacheType.PageFieldsInfo, userPageInfoKey).FieldsList;
            if (model == null || model.Count == 0)
            {
                string getFieldsListUrl = GetSetting("GetFieldsListUrl");
                string systemNo = GetSetting("SystemNo");
                string times = CommonHelper.GetTimeStamp();
                string signSource = "/adhourreport/index" + systemNo + times + LoginStatus.UserName + "D0VF2Z44602L20TV6H88H6B2046Z4PLX";
                string sign = CommonHelper.Md5Encrypt(signSource);
                string postUrlParams = string.Format("pagePath={0}&systemNo={1}&timestamp={2}&userName={3}&sign={4}", "/adhourreport/index", systemNo, times, LoginStatus.UserName, sign);
                //请求接口
                string http_respone_str = HttpHelper.PostUrl(GetSetting("GetFieldsListUrl"), postUrlParams);
                model = JsonData.JavaScriptDeserialize<PageConfigModel>(http_respone_str).FieldsList;

            }

            return View(model);
        }


        /// <summary>
        /// 用户页面插件配置信息
        /// </summary>
        /// <returns></returns>
        public ActionResult UserPluginConfig()
        {
            List<MUserPlugInConfig> model = UserPlugInConfigService.Instance.QueryUserPluginInfo(Request.QueryString["__functionID"], LoginStatus.UserName);
            return View(model);
        }

        /// <summary>
        /// 保存用户字段信息
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        public IResult SaveUserFieldsInfo()
        {
            IResult result = new Result(false);
            if (!LoginStatus.IsLogin)
            {
                result.SetErrorMessage("登录超时,请重新登录!");
                return result;
            }
            try
            {
                string functionId = Request["__functionID"];
                string configIds = Request["Status"];
                string pagePath = "/adhourreport/index";
                string saveFieldsListUrl = GetSetting("SaveFieldsListUrl");
                string[] configId = configIds.Split(',');
                string configIdStr = string.Empty;
                for (int i = 0; i < configId.Count(); i++)
                {
                    configIdStr += "&configId=" + configId[i];
                }
                string times = CommonHelper.GetTimeStamp();
                string signSource = functionId + times + LoginStatus.UserName + "D0VF2Z44602L20TV6H88H6B2046Z4PLX";
                string sign = CommonHelper.Md5Encrypt(signSource);
                string postUrlParams = string.Format("functionId={0}{1}&timestamp={2}&userName={3}&sign={4}", functionId, configIdStr, times, LoginStatus.UserName, sign);
                string responseStr = HttpHelper.PostUrl(saveFieldsListUrl, postUrlParams);
                //result = JsonData.JavaScriptDeserialize<IResult>(responseStr);// HttpHelper.PostUrl("http://user.18pingtai.cn:9002/SaveFields.ashx", postUrlParams)
                JObject jo = (JObject)JsonConvert.DeserializeObject(responseStr);
                string status = jo["Code"].ToString();
                if (status.Equals("success"))
                {
                    string userPageInfoKey = string.Format("{0}_{1}_{2}", pagePath, GetSetting("SystemNo"), LoginStatus.UserName);
                    CacheManagement.RemoveKey(CacheType.PageFieldsInfo, userPageInfoKey);
                    result.SetSuccessMessage("保存成功");
                }
                else
                    result.SetErrorMessage("保存失败");


                //result = UserFieldsConfigService.Instance.SaveFields(Request.Form["Status"], Request.Form["__functionID"], LoginStatus.UserName);
                /* if (result.Status)
                 {
                     result.SetSuccessMessage("保存成功!");
                 }
                 else
                 {
                     result.SetErrorMessage("保存失败!");
                 }*/
            }
            catch (Exception ex)
            {
                result.SetErrorMessage("操作异常失败," + ex.Message);
            }
            return result;
        }


        public ActionResult AdFlowMonitor() 
        {
            return View();
        }
        public ActionResult AdCardMonitor()
        {
            return View();
        }

        [HttpPost]
        public string QueryMonitorData() {
            var result = AdHourReportService.Instance.QueryMonitorData(Request.QueryString);
            return Newtonsoft.Json.JsonConvert.SerializeObject(result);
        }
    }
}