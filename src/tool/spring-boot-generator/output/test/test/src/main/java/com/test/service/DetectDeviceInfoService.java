package com.test.service;

import com.test.pojo.entity.DetectDeviceInfo;
import com.test.pojo.req.AddDetectDeviceInfoReq;
import com.test.pojo.req.GetDetectDeviceInfoListReq;
import com.test.pojo.req.UpdateDetectDeviceInfoByIdReq;
import com.github.pagehelper.PageInfo;


public interface DetectDeviceInfoService {

    boolean addDetectDeviceInfo(AddDetectDeviceInfoReq req);

    boolean deleteDetectDeviceInfoById(Integer id);

    boolean updateDetectDeviceInfoById(Integer id, UpdateDetectDeviceInfoByIdReq req);

    DetectDeviceInfo getDetectDeviceInfoById(Integer id);

    PageInfo<DetectDeviceInfo> getDetectDeviceInfoList(GetDetectDeviceInfoListReq req);
}