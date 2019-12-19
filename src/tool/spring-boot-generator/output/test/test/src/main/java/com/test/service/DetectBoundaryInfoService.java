package com.test.service;

import com.test.pojo.entity.DetectBoundaryInfo;
import com.test.pojo.req.AddDetectBoundaryInfoReq;
import com.test.pojo.req.GetDetectBoundaryInfoListReq;
import com.test.pojo.req.UpdateDetectBoundaryInfoByIdReq;
import com.github.pagehelper.PageInfo;


public interface DetectBoundaryInfoService {

    boolean addDetectBoundaryInfo(AddDetectBoundaryInfoReq req);

    boolean deleteDetectBoundaryInfoById(Integer id);

    boolean updateDetectBoundaryInfoById(Integer id, UpdateDetectBoundaryInfoByIdReq req);

    DetectBoundaryInfo getDetectBoundaryInfoById(Integer id);

    PageInfo<DetectBoundaryInfo> getDetectBoundaryInfoList(GetDetectBoundaryInfoListReq req);
}