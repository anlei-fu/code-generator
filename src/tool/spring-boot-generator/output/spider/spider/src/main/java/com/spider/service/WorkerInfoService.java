package com.undefined.service;

import com.undefined.pojo.entity.WorkerInfo;

public interface WorkerInfoService {

    boolean addWorkerInfo(AddWorkerInfoReq req);

    boolean deleteWorkerInfoById(Integer id);

    boolean updateWorkerInfoById(Integer id, UpdateWorkerInfoByIdReq req);

    WorkerInfo getWorkerInfoById(Integer id);

    PageInfo<WorkerInfo> getWorkerInfoList(GetWorkerInfoListReq req);
}