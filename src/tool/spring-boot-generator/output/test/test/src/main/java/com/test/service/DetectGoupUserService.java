package com.test.service;

import com.test.pojo.entity.DetectGoupUser;
import com.test.pojo.req.AddDetectGoupUserReq;
import com.test.pojo.req.GetDetectGoupUserListReq;
import com.test.pojo.req.UpdateDetectGoupUserByIdReq;
import com.github.pagehelper.PageInfo;


public interface DetectGoupUserService {

    boolean addDetectGoupUser(AddDetectGoupUserReq req);

    boolean deleteDetectGoupUserById(Integer id);

    boolean updateDetectGoupUserById(Integer id, UpdateDetectGoupUserByIdReq req);

    DetectGoupUser getDetectGoupUserById(Integer id);

    PageInfo<DetectGoupUser> getDetectGoupUserList(GetDetectGoupUserListReq req);
}