package com.undefined.service;

import com.undefined.pojo.entity.DetectStaffInfoCopy;

public interface DetectStaffInfoCopyService {

    boolean addDetectStaffInfoCopy(AddDetectStaffInfoCopyReq req);

    boolean deleteDetectStaffInfoCopyById(Integer id);

    boolean updateDetectStaffInfoCopyById(Integer id, UpdateDetectStaffInfoCopyByIdReq req);

    DetectStaffInfoCopy getDetectStaffInfoCopyById(Integer id);

    PageInfo<DetectStaffInfoCopy> getDetectStaffInfoCopyList(GetDetectStaffInfoCopyListReq req);
}