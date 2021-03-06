using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using Lib4Net.Core;
using Lib4Net.Framework.Settings;
using Lib4Net.Comm;
using Lib4Net.Data;
using @project.Entity;
using @project.Model;
using @project.Interfaces.Logic;
using @project.LogicFactories;
using @project.Utility;

namespace @project.UserService
{
   /// <summary>
    /// 服务操作: @name(下游脚本)
    /// </summary>
   public class @nameService:Singleton<@nameService>
    {
       private static readonly  string ORDER_BY="";
       private I@nameHandler handler;

       public @nameService()
       {
           handler = BusinessLogicFactory.Instance.GetProvider<I@nameHandler>();
       }

       /// <summary>
       /// 查询单条数据,用于详细页面显示
       /// </summary>
       /// <param name="id">主键编号</param>
       /// <returns></returns>
       public @nameItemModel Query(string id)
       {
           @nameItemModel model = new @nameItemModel();
           model.CurrentModel = handler.GetData(id);
           model.Id = id;
           return model;
       }

       /// <summary>
       /// 查询单条数据，用于新增编辑
       /// </summary>
       /// <param name="id">主键编号</param>
       /// <returns></returns>
       public @nameItemModel QueryItem(string id)
       {
           @nameItemModel model = new @nameItemModel();
           model.CurrentModel = handler.GetData(id);
           model.Id = id;

           return model;
       }

        /// <summary>
       /// 查询单条数据，用于页面预览
       /// </summary>
       /// <param name="id">主键编号</param>
       /// <returns></returns>
       public @nameViewModel View(string id)
       {
           @nameViewModel model = new @nameViewModel();
           model.CurrentModel = handler.GetData(id);
           model.Id = id;

           return model;
       }

       /// <summary>
       /// 获取数据列表
       /// </summary>
       /// <returns></returns>
       public List<@prefix@name> GetDataList()
       {
           return handler.GetDataList(ORDER_BY);
       }

       /// <summary>
       /// 查询列表数据
       /// </summary>
       /// <param name="nvc">参数集合</param>
       /// <returns></returns>
       public @nameListModel Query(NameValueCollection nvc, bool excel=false )
       {
           @nameListModel model = new @nameListModel();
            model.PageSize = CommFun.ToInt(nvc["ps"],
               SettingHelper.Instance.GetInt("PageSize", 10)).Value;
           model.PageIndex= CommFun.ToInt(nvc["pi"],
               SettingHelper.Instance.GetInt("PageIndex", 0)).Value+1;

           @prefix@name entity = new @prefix@name();
           entity.SetData(nvc,false);
           entity.TrimEmptyProperty();   
           entity.AddData(":PS",model.PageSize);
           entity.AddData(":PI",model.PageIndex);

@timeRange
         
            if (!excel)
            {
                model.TotalCount = CommFun.ToInt(handler.GetScalarByXmlTemplate("getCount", entity), 0).GetValueOrDefault();
                if (model.TotalCount > 0)
                    model.List = handler.GetDataListByTemplate("getList", entity);
            }
            else
            {
                entity.AddData(":PS", 1000000);
                entity.AddData(":PI", 1);
                model.List = handler.GetDataListByTemplate("getList", entity);
            }
            
           return model;
       }

       /// <summary>
       /// 保存实体数据
       /// </summary>
       /// <param name="id">主键编号</param>
       /// <param name="entity">实体数据</param>
       /// <returns></returns>
       public IResult Save(string id,@prefix@name entity)
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
@content
    }
}