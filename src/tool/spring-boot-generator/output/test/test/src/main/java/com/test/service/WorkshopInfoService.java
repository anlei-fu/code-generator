package com.undefined.service;

import com.undefined.pojo.entity.WorkshopInfo;

public interface WorkshopInfoService {

    boolean addWorkshopInfo(AddWorkshopInfoReq req);

    boolean deleteWorkshopInfoById(Integer id);

    boolean updateWorkshopInfoById(Integer id, UpdateWorkshopInfoByIdReq req);

    WorkshopInfo getWorkshopInfoById(Integer id);

    PageInfo<WorkshopInfo> getWorkshopInfoList(GetWorkshopInfoListReq req);
}