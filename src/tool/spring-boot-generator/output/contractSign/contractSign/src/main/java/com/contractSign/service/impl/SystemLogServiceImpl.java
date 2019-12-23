package com.contractSign.service;



public interface @nameService {

    boolean addSystemLog(AddSystemLogReq req);
    boolean deleteSystemLogById(Integer id);
    boolean updateSystemLogById(Integer id, UpdateSystemLogByIdReq req);
    SystemLog getSystemLogById(Integer id);
    PageInfo<SystemLog> getSystemLogList(GetSystemLogListReq req);

}