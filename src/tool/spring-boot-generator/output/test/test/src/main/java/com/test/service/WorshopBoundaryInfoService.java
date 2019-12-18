package com.undefined.service;

import com.undefined.pojo.entity.WorshopBoundaryInfo;

public interface WorshopBoundaryInfoService {

    boolean addWorshopBoundaryInfo(AddWorshopBoundaryInfoReq req);

    boolean deleteWorshopBoundaryInfoById(Integer id);

    boolean updateWorshopBoundaryInfoById(Integer id, UpdateWorshopBoundaryInfoByIdReq req);

    WorshopBoundaryInfo getWorshopBoundaryInfoById(Integer id);

    PageInfo<WorshopBoundaryInfo> getWorshopBoundaryInfoList(GetWorshopBoundaryInfoListReq req);
}