using SettleAccount.Entity;
using System.Collections.Generic;
namespace SettleAccount.Model
{
    /// <summary>
    /// 实体:MQyBaseDownAccount 的列表页面Model
    /// </summary>
	public class QyBaseDownAccountListModel
    {
       /// <summary>
       /// 记录列表
       /// </summary>
       public List<MQyBaseDownAccount> List { get; set; }
      
       /// <summary>
       /// 分页数据每页数据条数
       /// </summary>
       public int PageSize { get; set; }
      
       /// <summary>
       /// 分页数据页索引 从1开始
       /// </summary>
       public int PageIndex { get; set; }
       
       /// <summary>
       /// 总记录条数
       /// </summary>
       public int TotalCount { get; set; }
      
        /// <summary>
        /// 处理消息
        /// </summary>
        public string Message{ get; set; }
    }
}