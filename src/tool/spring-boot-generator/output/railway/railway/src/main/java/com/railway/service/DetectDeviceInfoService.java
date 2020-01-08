package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DetectDeviceInfo;
import com.railway.pojo.req.AddDetectDeviceInfoReq;
import com.railway.pojo.req.GetDetectDeviceInfoListReq;
import com.railway.pojo.req.UpdateDetectDeviceInfoByIdReq;


public interface DetectDeviceInfoService {

    boolean addDetectDeviceInfo(AddDetectDeviceInfoReq req);
    
    boolean deleteDetectDeviceInfoById(Integer id);
    
    boolean updateDetectDeviceInfoById(Integer id, UpdateDetectDeviceInfoByIdReq req);
    
    DetectDeviceInfo getDetectDeviceInfoById(Integer id);
    
    PageInfo<DetectDeviceInfo> getDetectDeviceInfoList(GetDetectDeviceInfoListReq req);

}