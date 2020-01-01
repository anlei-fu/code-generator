using SettleAccount.Entity;
namespace SettleAccount.Model
{
    /// <summary>
    /// 实体:MChinnel 的列表页面Model
    /// </summary>
	public class QyBaseDownAccountViewModel
    {
        /// <summary>
        /// 当前实体元素
        /// </summary>
        public MQyBaseDownAccount CurrentModel { get; set; }

        /// <summary>
        /// 主键编号
        /// </summary>
        public string Id{ get; set; }
    }
}