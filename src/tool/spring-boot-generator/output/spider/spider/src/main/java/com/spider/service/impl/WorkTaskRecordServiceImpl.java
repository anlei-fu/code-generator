package com.undefined.service.impl;

import com.undefined.mapper.WorkTaskRecordMapper;
import com.undefined.pojo.entity.WorkTaskRecord;
import com.spider.service.WorkTaskRecordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorkTaskRecordServiceImpl implements WorkTaskRecordService {

    @Autowired
    private WorkTaskRecordMapper workTaskRecordMapper;

    @Override
    public boolean addWorkTaskRecord(AddWorkTaskRecordReq req) {
        return workTaskRecordMapper.addWorkTaskRecord(req) > 0;
    }


    @Override
    public boolean deleteWorkTaskRecordById(Integer id) {
        return workTaskRecordMapper.deleteWorkTaskRecordById(id) > 0;
    }


    @Override
    public boolean updateWorkTaskRecordById(Integer id, UpdateWorkTaskRecordByIdReq req) {
        return workTaskRecordMapper.updateWorkTaskRecordById(id, req) > 0;
    }


    @Override
    public WorkTaskRecord getWorkTaskRecordById(Integer id) {
        return workTaskRecordMapper.getWorkTaskRecordById(id);
    }


    @Override
    public PageInfo<WorkTaskRecord> getWorkTaskRecordList(GetWorkTaskRecordListReq req) {
        return workTaskRecordMapper.getWorkTaskRecordList(req);
    }
}
