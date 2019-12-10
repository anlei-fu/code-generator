using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using Lib4Net.Core;
using Lib4Net.Framework.Settings;
using Lib4Net.Comm;
using Lib4Net.Data;
using QXFC.Entity;
using QXFC.Model;
using QXFC.Interfaces.Logic;
using QXFC.LogicFactories;
using QXFC.Utility;

namespace QXFC.UserService
{
   /// <summary>
    /// 服务操作: FCLimitRuleUp(下游脚本)
    /// </summary>
   public class FCLimitRuleUpService:Singleton<FCLimitRuleUpService>
    {
       private IFCLimitRuleUpHandler handler;
       private static readonly  string ORDER_BY="";
       public FCLimitRuleUpService()
       {
           handler = BusinessLogicFactory.Instance.GetProvider<IFCLimitRuleUpHandler>();
       }
         /// <summary>
       /// 查询单条数据,用于详细页面显示
       /// </summary>
       /// <param name="id">主键编号</param>
       /// <returns></returns>
       public FCLimitRuleUpItemModel Query(string id)
       {
           FCLimitRuleUpItemModel model = new FCLimitRuleUpItemModel();
           model.CurrentModel = handler.GetData(id);
           model.Id = id;
           return model;
       }
         /// <summary>
       /// 查询单条数据，用于新增编辑
       /// </summary>
       /// <param name="id">主键编号</param>
       /// <returns></returns>
       public FCLimitRuleUpItemModel QueryItem(string id)
       {
           FCLimitRuleUpItemModel model = new FCLimitRuleUpItemModel();
           model.CurrentModel = handler.GetData(id);
           model.Id = id;
           return model;
       }
        /// <summary>
       /// 查询单条数据，用于页面预览
       /// </summary>
       /// <param name="id">主键编号</param>
       /// <returns></returns>
       public FCLimitRuleUpViewModel View(string id)
       {
           FCLimitRuleUpViewModel model = new FCLimitRuleUpViewModel();
           model.CurrentModel = handler.GetData(id);
           model.Id = id;
           return model;
       }
        /// <summary>
       /// 获取数据列表
       /// </summary>
       /// <returns></returns>
       public List<MFCLimitRuleUp> GetDataList()
       {
           return handler.GetDataList(ORDER_BY);
       }
        /// <summary>
       /// 获取数据列表
       /// </summary>
       /// <param name="json">json数据</param>
       /// <returns></returns>
       public List<MFCLimitRuleUp> GetDataList(string json)
       {
           MFCLimitRuleUp data =
               JsonData.JavaScriptDeserialize<MFCLimitRuleUp>(json);
           return handler.GetDataList(data, ORDER_BY, Lib4Net.DB.MatchMode.Exact);
       }
        /// <summary>
       /// 查询列表数据
       /// </summary>
       /// <param name="nvc">参数集合</param>
       /// <returns></returns>
       public FCLimitRuleUpListModel Query(NameValueCollection nvc)
       {
           FCLimitRuleUpListModel model = new FCLimitRuleUpListModel();
           MFCLimitRuleUp entity = new MFCLimitRuleUp();
           model.PageSize = CommFun.ToInt(nvc["ps"],
               SettingHelper.Instance.GetInt("PageSize", 10)).Value;
           model.PageIndex= CommFun.ToInt(nvc["pi"],
               SettingHelper.Instance.GetInt("PageIndex", 0)).Value+1;
           entity.SetData(nvc,false);
           entity.TrimEmptyProperty();   
           entity.AddData(":PS",model.PageSize);
           entity.AddData(":PI",model.PageIndex);
         
           model.TotalCount = CommFun.ToInt(handler.GetScalarByXmlTemplate("getCount", entity), 0).GetValueOrDefault();
            if(model.TotalCount > 0)
                model.List = handler.GetDataListByTemplate("getList",entity);
           return model;
       }
        /// <summary>
       /// 保存实体数据
       /// </summary>
       /// <param name="id">主键编号</param>
       /// <param name="entity">实体数据</param>
       /// <returns></returns>
       public IResult Save(string id,MFCLimitRuleUp entity)
       {
           return handler.Save(id,entity);
       }
        /// <summary>
       /// 删除单条数据
       /// </summary>
       /// <param name="id">主键编号</param>
       /// <returns></returns>
       public IResult Delete(string id)
       {
           return new Result(handler.Delete(id));
       }
    }
}