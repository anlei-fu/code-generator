using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using @project.name.Entity;
namespace @project.name.Model
{
    /// <summary>
    /// 实体:M@table.name 的列表页面Model
    /// </summary>
	public class @table.nameListModel
    {
       private List<@table.name> _list=new List<@table.name>();
       private int _pageSize;
       private int _pageIndex;
       private int _totalCount;
        /// <summary>
       /// 记录列表
       /// </summary>
       public List<@table.name> List
       {
           get { return _list; }
           set { _list = value; }
       }
       /// <summary>
        /// 分页数据每页数据条数
        /// </summary>
        public int PageSize
       {
           get { return _pageSize; }
           set { _pageSize = value; }
       }
        /// <summary>
        /// 分页数据页索引 从1开始
        /// </summary>
       public int PageIndex
       {
           get { return _pageIndex; }
           set { _pageIndex = value; }
       }
        /// <summary>
        /// 总记录条数
        /// </summary>
       public int TotalCount
       {
           get { return _totalCount; }
           set { _totalCount = value; }
       }
        /// <summary>
        /// 处理消息
        /// </summary>
        public string Message{get;set;}
    }
}