package com.test.service;

import com.test.pojo.entity.WorkshopInfo;
import com.test.pojo.req.AddWorkshopInfoReq;
import com.test.pojo.req.GetWorkshopInfoListReq;
import com.test.pojo.req.UpdateWorkshopInfoByIdReq;
import com.github.pagehelper.PageInfo;


public interface WorkshopInfoService {

    boolean addWorkshopInfo(AddWorkshopInfoReq req);

    boolean deleteWorkshopInfoById(Integer id);

    boolean updateWorkshopInfoById(Integer id, UpdateWorkshopInfoByIdReq req);

    WorkshopInfo getWorkshopInfoById(Integer id);

    PageInfo<WorkshopInfo> getWorkshopInfoList(GetWorkshopInfoListReq req);
}