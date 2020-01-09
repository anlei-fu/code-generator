package com.contract.service;

import com.contract.pojo.entity.UserAccountInfo;
import com.contract.pojo.req.AddUserAccountInfoReq;
import com.contract.pojo.req.GetUserAccountInfoListReq;
import com.contract.pojo.req.UpdateUserAccountInfoByIdReq;
import com.github.pagehelper.PageInfo;

public interface UserAccountInfoService {

    boolean addUserAccountInfo(AddUserAccountInfoReq req);

    boolean deleteUserAccountInfoById(Integer id);

    boolean updateUserAccountInfoById(Integer id, UpdateUserAccountInfoByIdReq req);

    UserAccountInfo getUserAccountInfoById(Integer id);

    PageInfo<UserAccountInfo> getUserAccountInfoList(GetUserAccountInfoListReq req);

}
