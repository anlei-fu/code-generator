package com.undefined.service;

import com.undefined.pojo.entity.DetectGroup;

public interface DetectGroupService {

    boolean addDetectGroup(AddDetectGroupReq req);

    boolean deleteDetectGroupById(Integer id);

    boolean updateDetectGroupById(Integer id, UpdateDetectGroupByIdReq req);

    DetectGroup getDetectGroupById(Integer id);

    PageInfo<DetectGroup> getDetectGroupList(GetDetectGroupListReq req);
}