package com.undefined.service;

import com.undefined.pojo.entity.DetectStaffInfo;

public interface DetectStaffInfoService {

    boolean addDetectStaffInfo(AddDetectStaffInfoReq req);

    boolean deleteDetectStaffInfoById(Integer id);

    boolean updateDetectStaffInfoById(Integer id, UpdateDetectStaffInfoByIdReq req);

    DetectStaffInfo getDetectStaffInfoById(Integer id);

    PageInfo<DetectStaffInfo> getDetectStaffInfoList(GetDetectStaffInfoListReq req);
}