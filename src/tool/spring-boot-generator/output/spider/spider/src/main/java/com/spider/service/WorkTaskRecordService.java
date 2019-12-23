package com.spider.service;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.WorkTaskRecord;
import com.spider.pojo.req.AddWorkTaskRecordReq;
import com.spider.pojo.req.GetWorkTaskRecordListReq;
import com.spider.pojo.req.UpdateWorkTaskRecordByIdReq;


public interface WorkTaskRecordService {

    boolean addWorkTaskRecord(AddWorkTaskRecordReq req);
    
    boolean deleteWorkTaskRecordById(Integer id);
    
    boolean updateWorkTaskRecordById(Integer id, UpdateWorkTaskRecordByIdReq req);
    
    WorkTaskRecord getWorkTaskRecordById(Integer id);
    
    PageInfo<WorkTaskRecord> getWorkTaskRecordList(GetWorkTaskRecordListReq req);

}