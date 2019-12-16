package com.spider.service;

import com.spider.pojo.entity.WorkerInfo;

public interface WorkerInfoService {

    GetWorkerInfoByIdResp getWorkerInfoById(Integer id, GetWorkerInfoByIdReq req);
    boolean deleteWorkerInfoById(Integer id);
    PageInfo<WorkerInfo> getWorkerInfoByIp(String ip);

}