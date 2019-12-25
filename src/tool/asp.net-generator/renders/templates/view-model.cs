using @project.Entity;
namespace @project.Model
{
    /// <summary>
    /// 实体:MChinnel 的列表页面Model
    /// </summary>
	public class @nameViewModel
    {
        private @prfix@name _currentModel=new @prfix@name();
        /// <summary>
        /// 当前实体元素
        /// </summary>
        public @prfix@name CurrentModel
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