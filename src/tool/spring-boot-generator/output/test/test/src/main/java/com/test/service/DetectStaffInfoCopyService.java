package com.test.service;

import com.test.pojo.entity.DetectStaffInfo;
import com.test.pojo.entity.DetectStaffInfoCopy;
import com.test.pojo.req.AddDetectStaffInfoCopyReq;
import com.test.pojo.req.GetDetectStaffInfoCopyListReq;
import com.test.pojo.req.UpdateDetectStaffInfoCopyByIdReq;
import com.github.pagehelper.PageInfo;


public interface DetectStaffInfoCopyService {

    boolean addDetectStaffInfoCopy(AddDetectStaffInfoCopyReq req);

    boolean deleteDetectStaffInfoCopyById(Integer id);

    boolean updateDetectStaffInfoCopyById(Integer id, UpdateDetectStaffInfoCopyByIdReq req);

    DetectStaffInfoCopy getDetectStaffInfoCopyById(Integer id);

    PageInfo<DetectStaffInfoCopy> getDetectStaffInfoCopyList(GetDetectStaffInfoCopyListReq req);
}