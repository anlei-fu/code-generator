package com.contract.service;

import com.contract.pojo.entity.SystemLog;
import com.contract.pojo.req.AddSystemLogReq;
import com.contract.pojo.req.GetSystemLogListReq;
import com.contract.pojo.req.UpdateSystemLogByIdReq;
import com.github.pagehelper.PageInfo;

public interface SystemLogService {

    boolean addSystemLog(AddSystemLogReq req);

    boolean deleteSystemLogById(Integer id);

    boolean updateSystemLogById(Integer id, UpdateSystemLogByIdReq req);

    SystemLog getSystemLogById(Integer id);

    PageInfo<SystemLog> getSystemLogList(GetSystemLogListReq req);

}
