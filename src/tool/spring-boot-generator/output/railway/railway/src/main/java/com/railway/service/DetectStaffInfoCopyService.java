package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DetectStaffInfo;
import com.railway.pojo.entity.DetectStaffInfoCopy;
import com.railway.pojo.req.AddDetectStaffInfoCopyReq;
import com.railway.pojo.req.GetDetectStaffInfoCopyListReq;
import com.railway.pojo.req.UpdateDetectStaffInfoCopyByIdReq;

public interface DetectStaffInfoCopyService {

    boolean addDetectStaffInfoCopy(AddDetectStaffInfoCopyReq req);

    boolean deleteDetectStaffInfoCopyById(Integer id);

    boolean updateDetectStaffInfoCopyById(Integer id, UpdateDetectStaffInfoCopyByIdReq req);

    DetectStaffInfoCopy getDetectStaffInfoCopyById(Integer id);

    PageInfo<DetectStaffInfoCopy> getDetectStaffInfoCopyList(GetDetectStaffInfoCopyListReq req);

}
