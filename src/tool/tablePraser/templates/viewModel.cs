using @project.name.Entity;
namespace @project.name.Model
{
    /// <summary>
    /// 实体:MChinnel 的列表页面Model
    /// </summary>
	public class FCYxhdPhoneViewModel
    {
        private @table.name _currentModel=new @table.name();
        /// <summary>
        /// 当前实体元素
        /// </summary>
        public @table.name CurrentModel
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