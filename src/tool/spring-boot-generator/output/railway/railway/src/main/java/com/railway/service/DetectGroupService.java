package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DetectGroup;
import com.railway.pojo.req.AddDetectGroupReq;
import com.railway.pojo.req.GetDetectGroupListReq;
import com.railway.pojo.req.UpdateDetectGroupByIdReq;

public interface DetectGroupService {

    boolean addDetectGroup(AddDetectGroupReq req);

    boolean deleteDetectGroupById(Integer id);

    boolean updateDetectGroupById(Integer id, UpdateDetectGroupByIdReq req);

    DetectGroup getDetectGroupById(Integer id);

    PageInfo<DetectGroup> getDetectGroupList(GetDetectGroupListReq req);

}
