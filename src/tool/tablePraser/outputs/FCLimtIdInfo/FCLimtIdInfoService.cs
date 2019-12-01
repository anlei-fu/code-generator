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
    /// 服务操作: FCLimtIdInfo(下游脚本)
    /// </summary>
   public class FCLimtIdInfoService:Singleton<FCLimtIdInfoService>
    {
       private IFCLimtIdInfoHandler handler;
       private static readonly  string ORDER_BY="";
       public FCLimtIdInfoService()
       {
           handler = BusinessLogicFactory.Instance.GetProvider<IFCLimtIdInfoHandler>();
       }
         /// <summary>
       /// 查询单条数据,用于详细页面显示
       /// </summary>
       /// <param name="id">主键编号</param>
       /// <returns></returns>
       public FCLimtIdInfoItemModel Query(string id)
       {
           FCLimtIdInfoItemModel model = new FCLimtIdInfoItemModel();
           model.CurrentModel = handler.GetData(id);
           model.Id = id;
           return model;
       }
         /// <summary>
       /// 查询单条数据，用于新增编辑
       /// </summary>
       /// <param name="id">主键编号</param>
       /// <returns></returns>
       public FCLimtIdInfoItemModel QueryItem(string id)
       {
           FCLimtIdInfoItemModel model = new FCLimtIdInfoItemModel();
           model.CurrentModel = handler.GetData(id);
           model.Id = id;
           return model;
       }
        /// <summary>
       /// 查询单条数据，用于页面预览
       /// </summary>
       /// <param name="id">主键编号</param>
       /// <returns></returns>
       public FCLimtIdInfoViewModel View(string id)
       {
           FCLimtIdInfoViewModel model = new FCLimtIdInfoViewModel();
           model.CurrentModel = handler.GetData(id);
           model.Id = id;
           return model;
       }
        /// <summary>
       /// 获取数据列表
       /// </summary>
       /// <returns></returns>
       public List<FCLimtIdInfo> GetDataList()
       {
           return handler.GetDataList(ORDER_BY);
       }
        /// <summary>
       /// 获取数据列表
       /// </summary>
       /// <param name="json">json数据</param>
       /// <returns></returns>
       public List<FCLimtIdInfo> GetDataList(string json)
       {
           FCLimtIdInfo data =
               JsonData.JavaScriptDeserialize<FCLimtIdInfo>(json);
           return handler.GetDataList(data, ORDER_BY, Lib4Net.DB.MatchMode.Exact);
       }
        /// <summary>
       /// 查询列表数据
       /// </summary>
       /// <param name="nvc">参数集合</param>
       /// <returns></returns>
       public FCLimtIdInfoListModel Query(NameValueCollection nvc)
       {
           FCLimtIdInfoListModel model = new FCLimtIdInfoListModel();
           FCLimtIdInfo entity = new FCLimtIdInfo();
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
       public IResult Save(string id,FCLimtIdInfo entity)
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
@additionals
    }
}