using SettleAccount.Entity;
namespace SettleAccount.Model
{
    /// <summary>
    /// 实体:MChinnel 的列表页面Model
    /// </summary>
	public class QyTradeDownManualViewModel
    {
        private @prfixQyTradeDownManual _currentModel=new @prfixQyTradeDownManual();
        /// <summary>
        /// 当前实体元素
        /// </summary>
        public @prfixQyTradeDownManual CurrentModel
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