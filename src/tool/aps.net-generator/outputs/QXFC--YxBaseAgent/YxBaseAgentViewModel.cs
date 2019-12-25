using QXFC.Entity;
namespace QXFC.Model
{
    /// <summary>
    /// 实体:MChinnel 的列表页面Model
    /// </summary>
	public class YxBaseAgentViewModel
    {
        private @prfixYxBaseAgent _currentModel=new @prfixYxBaseAgent();
        /// <summary>
        /// 当前实体元素
        /// </summary>
        public @prfixYxBaseAgent CurrentModel
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