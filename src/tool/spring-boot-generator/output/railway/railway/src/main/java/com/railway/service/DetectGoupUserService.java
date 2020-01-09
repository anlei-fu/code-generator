package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DetectGoupUser;
import com.railway.pojo.req.AddDetectGoupUserReq;
import com.railway.pojo.req.GetDetectGoupUserListReq;
import com.railway.pojo.req.UpdateDetectGoupUserByIdReq;

public interface DetectGoupUserService {

    boolean addDetectGoupUser(AddDetectGoupUserReq req);

    boolean deleteDetectGoupUserById(Integer id);

    boolean updateDetectGoupUserById(Integer id, UpdateDetectGoupUserByIdReq req);

    DetectGoupUser getDetectGoupUserById(Integer id);

    PageInfo<DetectGoupUser> getDetectGoupUserList(GetDetectGoupUserListReq req);

}
