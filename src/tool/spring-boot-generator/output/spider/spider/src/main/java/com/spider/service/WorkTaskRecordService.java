package com.undefined.service;

import com.undefined.pojo.entity.WorkTaskRecord;

public interface WorkTaskRecordService {

    boolean addWorkTaskRecord(AddWorkTaskRecordReq req);

    boolean deleteWorkTaskRecordById(Integer id);

    boolean updateWorkTaskRecordById(Integer id, UpdateWorkTaskRecordByIdReq req);

    WorkTaskRecord getWorkTaskRecordById(Integer id);

    PageInfo<WorkTaskRecord> getWorkTaskRecordList(GetWorkTaskRecordListReq req);
}