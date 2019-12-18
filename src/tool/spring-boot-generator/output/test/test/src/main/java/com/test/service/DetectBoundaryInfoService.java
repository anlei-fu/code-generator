package com.undefined.service;

import com.undefined.pojo.entity.DetectBoundaryInfo;

public interface DetectBoundaryInfoService {

    boolean addDetectBoundaryInfo(AddDetectBoundaryInfoReq req);

    boolean deleteDetectBoundaryInfoById(Integer id);

    boolean updateDetectBoundaryInfoById(Integer id, UpdateDetectBoundaryInfoByIdReq req);

    DetectBoundaryInfo getDetectBoundaryInfoById(Integer id);

    PageInfo<DetectBoundaryInfo> getDetectBoundaryInfoList(GetDetectBoundaryInfoListReq req);
}