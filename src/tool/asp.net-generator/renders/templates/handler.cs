using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Data;
using Lib4Net.Comm;
using Lib4Net.DB;
using Lib4Net.Core;
using @project.Entity;
using @project.Interfaces.Logic;
using @project.Interfaces.DBAccess;
using @project.DataAccessFactories;
using System.Collections;
using Lib4Net.Logs;

namespace @project.Logic
{
    /// <summary>
    /// 逻辑处理：@name(订单表)
    /// </summary>
    public class @nameHandler : I@nameHandler
    {
        private I@nameDataAccess dbAccess;
        ILogger logger = LoggerManager.Instance.GetLogger("web");
        public @nameHandler()
        {
            dbAccess = DataAccessFactory.Instance.GetProvider<I@nameDataAccess>();
        }

        /// <summary>
        /// 获取单条数据
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public @prefix@name GetData(string id)
        {
            return dbAccess.GetData(id);
        }

        /// <summary>
        /// 删除数据
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        public bool Delete(string id)
        {
            return dbAccess.Delete(id);
        }

        /// <summary>
        /// 获取单条数据
        /// </summary>
        /// <param name="query">查询条件</param>
        /// <param name="orderBy">排序字段</param>
        /// <param name="mmode">字符串匹配模式 Exact：精确匹配 Vague：模糊匹配</param>
        /// <param name="cmode">条件连接字符串 And 或 OR</param>
        /// <returns></returns>   
        public @prefix@name GetSingleData(@prefix@name query, string orderBy = "",
            MatchMode mmode = MatchMode.Exact,
            ConnectMode cmode = ConnectMode.And)
        {
            return dbAccess.GetSingleData(query, orderBy, mmode, cmode);
        }

         /// <summary>
        /// 获取所有数据
        /// </summary>
        /// <param name="orderBy">排序字段</param>
        /// <returns></returns>
        public List<@prefix@name> GetDataList(string orderBy = "")
        {
            return dbAccess.GetDataList(dbAccess.EmptyEntity, orderBy);
        }

        /// <summary>
        /// 获取指定条件的数据列表
        /// </summary>
        /// <param name="query">查询条件</param>
        /// <param name="orderBy">排序字段,{f:属性名} asc</param>
        /// <param name="mmode">字符串匹配模式 Exact：精确匹配 Vague：模糊匹配</param>
        /// <param name="cmode">条件连接字符串 And 或 OR</param>
        /// <returns></returns>
        public List<@prefix@name> GetDataList(@prefix@name query, string orderBy = "", MatchMode mmode = MatchMode.Exact,
            ConnectMode cmode = ConnectMode.And)
        {
            return dbAccess.GetDataList(query, orderBy, mmode, cmode);
        }

        /// <summary>
        /// 添加或修改数据,id为空时为添加，否则为修改
        /// </summary>
        /// <param name="id">主键值</param>
        /// <param name="vo">实体数据</param>
        /// <returns></returns>
        public IResult Save(string id, @prefix@name vo)
        {
            bool status=false;
         
            if (string.IsNullOrEmpty(id))
            {
                status= dbAccess.CreateNew(vo);
            }
            else
            {
                status= dbAccess.Update(id, vo);
            }

            IResult result = new Result(status);
            if (status)
            {
                result=new Result(true);
                result["id"] = CommFun.GetString(dbAccess.Builder.ODMapConfig.PrimaryKeyField.GetValue(vo));
            }

            return result;
        }

        /// <summary>
        /// 根据模板获取实体信息
        /// </summary>
        /// <param name="xmlTemplateName">模板名称</param>
        /// <param name="vo">实体</param>
        /// <returns></returns>
        public List<@prefix@name> GetDataListByTemplate(string xmlTemplateName, @prefix@name vo)
        {
            return dbAccess.GetDataListByTemplate(xmlTemplateName, vo);
        }

        /// <summary>
        /// 根据模版获取DataSet
        /// </summary>
        /// <param name="xmlTemplateName">模板名称</param>
        /// <param name="vo">实体</param>
        /// <returns></returns>
        public DataSet GetDataSetByTemplate(string xmlTemplateName, @prefix@name vo)
        {
            return dbAccess.GetDataSetByTemplate(xmlTemplateName, vo);
        }

        /// <summary>
        /// 根据模板名称获取第一行一列的值
        /// </summary>
        /// <param name="xmlTemplateName">模板名称</param>
        /// <param name="vo">实体</param>
        /// <returns></returns>
        public object GetScalarByXmlTemplate(string xmlTemplateName, @prefix@name vo)
        {
            return dbAccess.GetScalarByTemplate(xmlTemplateName, vo);
        }
    }
}