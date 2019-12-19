package com.test.service;

import com.test.pojo.entity.DetectGroup;
import com.test.pojo.req.AddDetectGroupReq;
import com.test.pojo.req.GetDetectGroupListReq;
import com.test.pojo.req.UpdateDetectGroupByIdReq;
import com.github.pagehelper.PageInfo;


public interface DetectGroupService {

    boolean addDetectGroup(AddDetectGroupReq req);

    boolean deleteDetectGroupById(Integer id);

    boolean updateDetectGroupById(Integer id, UpdateDetectGroupByIdReq req);

    DetectGroup getDetectGroupById(Integer id);

    PageInfo<DetectGroup> getDetectGroupList(GetDetectGroupListReq req);
}