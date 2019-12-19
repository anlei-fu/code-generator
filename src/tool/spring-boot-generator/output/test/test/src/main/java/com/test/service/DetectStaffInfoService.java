package com.test.service;

import com.test.pojo.entity.DetectStaffInfo;
import com.test.pojo.req.AddDetectStaffInfoReq;
import com.test.pojo.req.GetDetectStaffInfoListReq;
import com.test.pojo.req.UpdateDetectStaffInfoByIdReq;
import com.github.pagehelper.PageInfo;


public interface DetectStaffInfoService {

    boolean addDetectStaffInfo(AddDetectStaffInfoReq req);

    boolean deleteDetectStaffInfoById(Integer id);

    boolean updateDetectStaffInfoById(Integer id, UpdateDetectStaffInfoByIdReq req);

    DetectStaffInfo getDetectStaffInfoById(Integer id);

    PageInfo<DetectStaffInfo> getDetectStaffInfoList(GetDetectStaffInfoListReq req);
}