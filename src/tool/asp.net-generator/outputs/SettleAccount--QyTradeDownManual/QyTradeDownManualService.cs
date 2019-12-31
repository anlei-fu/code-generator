using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using Lib4Net.Core;
using Lib4Net.Framework.Settings;
using Lib4Net.Comm;
using Lib4Net.Data;
using SettleAccount.Entity;
using SettleAccount.Model;
using SettleAccount.Interfaces.Logic;
using SettleAccount.LogicFactories;
using SettleAccount.Utility;

namespace SettleAccount.UserService
{
   /// <summary>
    /// 服务操作: QyTradeDownManual(下游脚本)
    /// </summary>
   public class QyTradeDownManualService:Singleton<QyTradeDownManualService>
    {
       private IQyTradeDownManualHandler handler;
       private static readonly  string ORDER_BY="";
       public QyTradeDownManualService()
       {
           handler = BusinessLogicFactory.Instance.GetProvider<IQyTradeDownManualHandler>();
       }
         /// <summary>
       /// 查询单条数据,用于详细页面显示
       /// </summary>
       /// <param name="id">主键编号</param>
       /// <returns></returns>
       public QyTradeDownManualItemModel Query(string id)
       {
           QyTradeDownManualItemModel model = new QyTradeDownManualItemModel();
           model.CurrentModel = handler.GetData(id);
           model.Id = id;
           return model;
       }
         /// <summary>
       /// 查询单条数据，用于新增编辑
       /// </summary>
       /// <param name="id">主键编号</param>
       /// <returns></returns>
       public QyTradeDownManualItemModel QueryItem(string id)
       {
           QyTradeDownManualItemModel model = new QyTradeDownManualItemModel();
           model.CurrentModel = handler.GetData(id);
           model.Id = id;
           return model;
       }
        /// <summary>
       /// 查询单条数据，用于页面预览
       /// </summary>
       /// <param name="id">主键编号</param>
       /// <returns></returns>
       public QyTradeDownManualViewModel View(string id)
       {
           QyTradeDownManualViewModel model = new QyTradeDownManualViewModel();
           model.CurrentModel = handler.GetData(id);
           model.Id = id;
           return model;
       }
        /// <summary>
       /// 获取数据列表
       /// </summary>
       /// <returns></returns>
       public List<MQyTradeDownManual> GetDataList()
       {
           return handler.GetDataList(ORDER_BY);
       }
        /// <summary>
       /// 获取数据列表
       /// </summary>
       /// <param name="json">json数据</param>
       /// <returns></returns>
       public List<MQyTradeDownManual> GetDataList(string json)
       {
           MQyTradeDownManual data =
               JsonData.JavaScriptDeserialize<MQyTradeDownManual>(json);
           return handler.GetDataList(data, ORDER_BY, Lib4Net.DB.MatchMode.Exact);
       }
        /// <summary>
       /// 查询列表数据
       /// </summary>
       /// <param name="nvc">参数集合</param>
       /// <returns></returns>
       public QyTradeDownManualListModel Query(NameValueCollection nvc)
       {
           QyTradeDownManualListModel model = new QyTradeDownManualListModel();
           MQyTradeDownManual entity = new MQyTradeDownManual();
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
       public IResult Save(string id,MQyTradeDownManual entity)
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
        /// <summary>
        /// 查询所有退款记录
        /// </summary>
        /// <param name="nvc"></param>
        /// <returns></returns>
        public QyTradeDownManualListModel ExportExcel(NameValueCollection nvc)
        {
            var entity = new MQyTradeDownManual();
            entity.SetData(nvc, false);
            entity.TrimEmptyProperty();

            var st = CommFun.ToDateTime(nvc["st"], DateTime.Now).Value.ToString("yyyy-MM-dd");
            var et = CommFun.ToDateTime(nvc["et"], DateTime.Now).Value.AddDays(1).ToString("yyyy-MM-dd");
            entity.AddData("ST", st);
            entity.AddData("ET", et);
          
            var model = new QyTradeDownManualListModel();
            model.List = handler.GetDataListByTemplate("exportExcel", entity);

            return model;
        }


    }
}