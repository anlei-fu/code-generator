package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DetectBoundaryInfo;
import com.railway.pojo.req.AddDetectBoundaryInfoReq;
import com.railway.pojo.req.GetDetectBoundaryInfoListReq;
import com.railway.pojo.req.UpdateDetectBoundaryInfoByIdReq;

public interface DetectBoundaryInfoService {

    boolean addDetectBoundaryInfo(AddDetectBoundaryInfoReq req);

    boolean deleteDetectBoundaryInfoById(Integer id);

    boolean updateDetectBoundaryInfoById(Integer id, UpdateDetectBoundaryInfoByIdReq req);

    DetectBoundaryInfo getDetectBoundaryInfoById(Integer id);

    PageInfo<DetectBoundaryInfo> getDetectBoundaryInfoList(GetDetectBoundaryInfoListReq req);

}
