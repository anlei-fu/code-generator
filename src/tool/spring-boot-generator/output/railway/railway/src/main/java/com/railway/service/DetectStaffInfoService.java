package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DetectStaffInfo;
import com.railway.pojo.req.AddDetectStaffInfoReq;
import com.railway.pojo.req.GetDetectStaffInfoListReq;
import com.railway.pojo.req.UpdateDetectStaffInfoByIdReq;

public interface DetectStaffInfoService {

    boolean addDetectStaffInfo(AddDetectStaffInfoReq req);

    boolean deleteDetectStaffInfoById(Integer id);

    boolean updateDetectStaffInfoById(Integer id, UpdateDetectStaffInfoByIdReq req);

    DetectStaffInfo getDetectStaffInfoById(Integer id);

    PageInfo<DetectStaffInfo> getDetectStaffInfoList(GetDetectStaffInfoListReq req);

}
