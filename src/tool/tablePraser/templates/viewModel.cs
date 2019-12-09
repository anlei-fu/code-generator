using @project.name.Entity;
namespace @project.name.Model
{
    /// <summary>
    /// 实体:MChinnel 的列表页面Model
    /// </summary>
	public class @table.nameViewModel
    {
        private M@table.name _currentModel=new M@table.name();
        /// <summary>
        /// 当前实体元素
        /// </summary>
        public M@table.name CurrentModel
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