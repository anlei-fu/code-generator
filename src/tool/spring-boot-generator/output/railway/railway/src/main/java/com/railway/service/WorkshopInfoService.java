package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.WorkshopInfo;
import com.railway.pojo.req.AddWorkshopInfoReq;
import com.railway.pojo.req.GetWorkshopInfoListReq;
import com.railway.pojo.req.UpdateWorkshopInfoByIdReq;

public interface WorkshopInfoService {

    boolean addWorkshopInfo(AddWorkshopInfoReq req);

    boolean deleteWorkshopInfoById(Integer id);

    boolean updateWorkshopInfoById(Integer id, UpdateWorkshopInfoByIdReq req);

    WorkshopInfo getWorkshopInfoById(Integer id);

    PageInfo<WorkshopInfo> getWorkshopInfoList(GetWorkshopInfoListReq req);

}
