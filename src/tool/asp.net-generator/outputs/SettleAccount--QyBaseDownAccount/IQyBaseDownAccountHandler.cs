using System.Collections.Generic;
using System.Data;
using Lib4Net.DB;
using SettleAccount.Entity;
using Lib4Net.Comm;
namespace SettleAccount.Interfaces.Logic
{
    /// <summary>
    /// 逻辑接口:@table.chineseName
    /// </summary>   
    public interface IQyBaseDownAccountHandler
    {
        /// <summary>
        /// 获取单条数据
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        MQyBaseDownAccount GetData(string id);

        /// <summary>
        /// 删除数据
        /// </summary>
        /// <param name="id">主键编号</param>
        /// <returns></returns>
        bool Delete(string id);

        /// <summary>
        /// 获取所有数据
        /// </summary>
        /// <param name="orderBy">排序字段</param>
        /// <returns></returns>
        List<MQyBaseDownAccount> GetDataList(string orderBy = "");

        /// <summary>
        /// 获取指定条件的数据列表
        /// </summary>
        /// <param name="query">查询条件</param>
        /// <param name="orderBy">排序字段,{f:属性名} asc</param>
        /// <param name="mmode">字符串匹配模式 Exact：精确匹配 Vague：模糊匹配</param>
        /// <param name="cmode">条件连接字符串 And 或 OR</param>
        /// <returns></returns>
        List<MQyBaseDownAccount> GetDataList(MQyBaseDownAccount query,string orderBy="",MatchMode mmode=MatchMode.Exact,
            ConnectMode cmode=ConnectMode.And);

        /// <summary>
        /// 添加或修改数据,id为空时为添加，否则为修改
        /// </summary>
        /// <param name="id">主键值</param>
        /// <param name="vo">实体数据</param>
        /// <returns></returns>
        IResult Save(string id,MQyBaseDownAccount vo);
 
        /// <summary>
        /// 根据模板获取实体信息
        /// </summary>
        /// <param name="xmlTemplateName">模板名称</param>
        /// <param name="vo">实体</param>
        /// <returns></returns>
        List<MQyBaseDownAccount> GetDataListByTemplate(string xmlTemplateName,MQyBaseDownAccount vo);

    }
}