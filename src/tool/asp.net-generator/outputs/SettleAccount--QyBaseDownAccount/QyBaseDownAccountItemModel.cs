using SettleAccount.Entity;
namespace SettleAccount.Model
{
    /// <summary>
    /// 实体:MChinnel 的列表页面Model
    /// </summary>
	public class QyBaseDownAccountItemModel
    {
        /// <summary>
        /// 当前实体元素
        /// </summary>
        public MQyBaseDownAccount CurrentModel { get; set; }
        
        /// <summary>
        /// 主键编号
        /// </summary>
        public string Id { get; set; }
        
        /// <summary>
        /// 处理消息
        /// </summary>
        public string Message { get; set; }
    }
}