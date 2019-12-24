using QXFC.Entity;
namespace QXFC.Model
{
    /// <summary>
    /// 实体:MChinnel 的列表页面Model
    /// </summary>
	public class FCLimtIdInfoItemModel
    {
        private MFCLimtIdInfo _currentModel=new MFCLimtIdInfo();
        /// <summary>
        /// 当前实体元素
        /// </summary>
        public MFCLimtIdInfo CurrentModel
        {
            get { return _currentModel; }
            set { _currentModel = value; }
        }
        /// <summary>
        /// 主键编号
        /// </summary>
        public string Id{get;set;}
        /// <summary>
        /// 处理消息
        /// </summary>
        public string Message{get;set;}
    }
}