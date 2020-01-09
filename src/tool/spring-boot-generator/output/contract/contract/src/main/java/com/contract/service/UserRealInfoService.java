package com.contract.service;

import com.contract.pojo.entity.UserRealInfo;
import com.contract.pojo.req.AddUserRealInfoReq;
import com.contract.pojo.req.GetUserRealInfoListReq;
import com.contract.pojo.req.UpdateUserRealInfoByUserIdReq;
import com.github.pagehelper.PageInfo;

public interface UserRealInfoService {

    boolean addUserRealInfo(AddUserRealInfoReq req);

    boolean deleteUserRealInfoByUserId(Integer userId);

    boolean updateUserRealInfoByUserId(Integer userId, UpdateUserRealInfoByUserIdReq req);

    UserRealInfo getUserRealInfoByUserId(Integer userId);

    PageInfo<UserRealInfo> getUserRealInfoList(GetUserRealInfoListReq req);

}
