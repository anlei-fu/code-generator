package com.contract.service.impl;

import com.contract.mapper.SystemLogMapper;
import com.contract.pojo.entity.SystemLog;
import com.contract.pojo.entity.SystemLog;
import com.contract.pojo.param.UpdateSystemLogByIdParams;
import com.contract.pojo.req.AddSystemLogReq;
import com.contract.pojo.req.GetSystemLogListReq;
import com.contract.pojo.req.UpdateSystemLogByIdReq;
import com.contract.service.SystemLogService;
import com.contract.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SystemLogServiceImpl implements SystemLogService {

    @Autowired
    private SystemLogMapper systemLogMapper;

    @Override
    public boolean addSystemLog(AddSystemLogReq req) {
        return systemLogMapper.addSystemLog(req) > 0;
    }

    @Override
    public boolean deleteSystemLogById(Integer id) {
        return systemLogMapper.deleteSystemLogById(id) > 0;
    }

    @Override
    public boolean updateSystemLogById(Integer id, UpdateSystemLogByIdReq req) {
        UpdateSystemLogByIdParams params = new UpdateSystemLogByIdParams(id, req);
        return systemLogMapper.updateSystemLogById(params) > 0;
    }

    @Override
    public SystemLog getSystemLogById(Integer id) {
        return systemLogMapper.getSystemLogById(id);
    }

    @Override
    public PageInfo<SystemLog> getSystemLogList(GetSystemLogListReq req) {
        return PageHelperUtils.paging(req, () -> systemLogMapper.getSystemLogList(req));
    }

}

