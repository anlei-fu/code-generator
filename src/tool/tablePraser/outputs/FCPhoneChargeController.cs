using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using Lib4Net.Core;
using Lib4Net.Framework.Settings;
using Lib4Net.Comm;
using Lib4Net.Logs;
using QXFC.UserService;
using QXFC.Entity;
using QXFC.Model;
using QXFC.Utility;

namespace QXFC.UserWeb.Controllers
{
    /// <summary>
    /// Controller：FcPhoneCharge(流程控制)
    /// </summary>
    public class FcPhoneChargeController : MainBaseController
    {
        /// <summary>
        /// 显示列表页面数据
        /// </summary>
        /// <returns></returns>
        public ActionResult Index()
        {
            return View(FcPhoneChargeService.Instance.Query(Request.QueryString));
        }
        /// <summary>
        /// 预览详细信息页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult Details(string id)
        {
            return View(FcPhoneChargeService.Instance.Query(id));
        }
        /// <summary>
        /// 保存或修改页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult Item(string id)
        {
            return View(FcPhoneChargeService.Instance.QueryItem(id));
        }
        /// <summary>
        /// 克隆页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult ItemClone(string id)
        {
            return View(FcPhoneChargeService.Instance.QueryItem(id));
        }
        /// <summary>
        /// 预览页面
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public ActionResult View(string id)
        {
            return View(FcPhoneChargeService.Instance.View(id));
        }
        /// <summary>
        /// 保存实体数据
        /// </summary>
        /// <param name="entity">实体数据</param>
        /// <returns></returns>
        [HttpPost]
        public string ItemClone()
        {
            try
            {
                MFcPhoneCharge entity = new MFcPhoneCharge();
                string id = Request.Form["__id"];
                var entityModel = FcPhoneChargeService.Instance.Query(id);
                var fid = Convert.ToInt32(id);
            
                entity.Status = entityModel.CurrentModel.Status;
                entity.Remark = entityModel.CurrentModel.Remark;
                entity.CreatedUser = LoginStatus.UserName;
                entity.CreatedTime = DateTime.Now;
                entity.FlowName = Request.Form["FlowName"];
                var stepList = FcPhoneChargeStepService.Instance.GetDataListByFid(fid);
                if (stepList.Count == 0) 
                {
                    return "";
                }           
                IResult result = FcPhoneChargeService.Instance.Save("", entity);
                if (result.Status)
                {
                    foreach (var i in stepList)
                    {
                        var stepentity = new MFcPhoneChargeStep();                      
                        stepentity.Action = i.Action;
                        stepentity.Fid = entity.Fid;
                        stepentity.Sno = i.Sno;
                        stepentity.ScriptType = i.ScriptType;
                        stepentity.StepName = i.StepName;
                        stepentity.Face = i.Face;
                        stepentity.CreatedUser = LoginStatus.UserName;
                        stepentity.CreatedTime = DateTime.Now;
                        IResult resultstr = FcPhoneChargeStepService.Instance.Save("", stepentity);
                        if (!resultstr.Status)
                        {
                            break;
                        }
                    }
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
        //[HttpGet]
        //public System.Web.Mvc.JsonResult QueryForSelect(int fid)
        //{
        //    JsonHelper json = new JsonHelper() { Msg = "查询成功。", Status = "y" };
        //    var query = FcPhoneChargeStepService.Instance.GetDataListByFid(fid);
        //    json.Data = query;
        //    return Json(json, JsonRequestBehavior.AllowGet);
        //}

        /// <summary>
        /// 保存实体数据
        /// </summary>
        /// <param name="entity">实体数据</param>
        /// <returns></returns>
        [HttpPost]
        public string Item()
        {
            try
            {
                MFcPhoneCharge entity = new MFcPhoneCharge();
                entity.SetData(Request.Form);
                entity.TrimEmptyProperty();
                string id = Request.Form["__id"];
                entity.Status = CommFun.ToInt(Request["State"], 1);
                if (string.IsNullOrEmpty(id))
                {
                    entity.CreatedUser = LoginStatus.UserName;
                    entity.CreatedTime = DateTime.Now;
                }
                else
                {
                    entity.EditTime = DateTime.Now;
                    entity.EditUser = LoginStatus.UserName;
                }
                IResult result = FcPhoneChargeService.Instance.Save(id, entity);
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
                IResult result = FcPhoneChargeService.Instance.Delete(id);
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