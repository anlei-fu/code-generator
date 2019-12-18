package com.undefined.service;

import com.undefined.pojo.entity.DetectDeviceInfo;

public interface DetectDeviceInfoService {

    boolean addDetectDeviceInfo(AddDetectDeviceInfoReq req);

    boolean deleteDetectDeviceInfoById(Integer id);

    boolean updateDetectDeviceInfoById(Integer id, UpdateDetectDeviceInfoByIdReq req);

    DetectDeviceInfo getDetectDeviceInfoById(Integer id);

    PageInfo<DetectDeviceInfo> getDetectDeviceInfoList(GetDetectDeviceInfoListReq req);
}