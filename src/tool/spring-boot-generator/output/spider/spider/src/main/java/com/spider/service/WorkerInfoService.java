package com.spider.service;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.WorkerInfo;
import com.spider.pojo.req.AddWorkerInfoReq;
import com.spider.pojo.req.GetWorkerInfoListReq;
import com.spider.pojo.req.UpdateWorkerInfoByIdReq;


public interface WorkerInfoService {

    boolean addWorkerInfo(AddWorkerInfoReq req);
    
    boolean deleteWorkerInfoById(Integer id);
    
    boolean updateWorkerInfoById(Integer id, UpdateWorkerInfoByIdReq req);
    
    WorkerInfo getWorkerInfoById(Integer id);
    
    PageInfo<WorkerInfo> getWorkerInfoList(GetWorkerInfoListReq req);

}