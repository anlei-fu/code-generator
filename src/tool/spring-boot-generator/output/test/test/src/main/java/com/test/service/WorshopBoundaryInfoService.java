package com.test.service;

import com.test.pojo.entity.WorshopBoundaryInfo;
import com.test.pojo.req.AddWorshopBoundaryInfoReq;
import com.test.pojo.req.GetWorshopBoundaryInfoListReq;
import com.test.pojo.req.UpdateWorshopBoundaryInfoByIdReq;
import com.github.pagehelper.PageInfo;


public interface WorshopBoundaryInfoService {

    boolean addWorshopBoundaryInfo(AddWorshopBoundaryInfoReq req);

    boolean deleteWorshopBoundaryInfoById(Integer id);

    boolean updateWorshopBoundaryInfoById(Integer id, UpdateWorshopBoundaryInfoByIdReq req);

    WorshopBoundaryInfo getWorshopBoundaryInfoById(Integer id);

    PageInfo<WorshopBoundaryInfo> getWorshopBoundaryInfoList(GetWorshopBoundaryInfoListReq req);
}