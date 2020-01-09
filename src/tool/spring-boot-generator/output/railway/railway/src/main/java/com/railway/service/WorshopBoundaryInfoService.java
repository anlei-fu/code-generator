package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.WorshopBoundaryInfo;
import com.railway.pojo.req.AddWorshopBoundaryInfoReq;
import com.railway.pojo.req.GetWorshopBoundaryInfoListReq;
import com.railway.pojo.req.UpdateWorshopBoundaryInfoByIdReq;

public interface WorshopBoundaryInfoService {

    boolean addWorshopBoundaryInfo(AddWorshopBoundaryInfoReq req);

    boolean deleteWorshopBoundaryInfoById(Integer id);

    boolean updateWorshopBoundaryInfoById(Integer id, UpdateWorshopBoundaryInfoByIdReq req);

    WorshopBoundaryInfo getWorshopBoundaryInfoById(Integer id);

    PageInfo<WorshopBoundaryInfo> getWorshopBoundaryInfoList(GetWorshopBoundaryInfoListReq req);

}
