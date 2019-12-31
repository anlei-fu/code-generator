using SettleAccount.Entity;
namespace SettleAccount.Model
{
    /// <summary>
    /// 实体:MChinnel 的列表页面Model
    /// </summary>
	public class QyBaseDownChannelViewModel
    {
        private @prfixQyBaseDownChannel _currentModel=new @prfixQyBaseDownChannel();
        /// <summary>
        /// 当前实体元素
        /// </summary>
        public @prfixQyBaseDownChannel CurrentModel
        {
            get { return _currentModel; }
            set { _currentModel = value; }
        }
        /// <summary>
        /// 主键编号
        /// </summary>
        public string Id{get;set;}
    }
}