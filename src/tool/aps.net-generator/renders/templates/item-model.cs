using @project.Entity;
namespace @project.Model
{
    /// <summary>
    /// 实体:MChinnel 的列表页面Model
    /// </summary>
	public class @nameItemModel
    {
        private @prefix@name _currentModel=new @prefix@name();
        /// <summary>
        /// 当前实体元素
        /// </summary>
        public @prefix@name CurrentModel
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