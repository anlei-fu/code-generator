package com.undefined.service;

import com.undefined.pojo.entity.DetectGoupUser;

public interface DetectGoupUserService {

    boolean addDetectGoupUser(AddDetectGoupUserReq req);

    boolean deleteDetectGoupUserById(Integer id);

    boolean updateDetectGoupUserById(Integer id, UpdateDetectGoupUserByIdReq req);

    DetectGoupUser getDetectGoupUserById(Integer id);

    PageInfo<DetectGoupUser> getDetectGoupUserList(GetDetectGoupUserListReq req);
}