package com.contract.service;

import com.contract.pojo.entity.UserContactInfo;
import com.contract.pojo.req.AddUserContactInfoReq;
import com.contract.pojo.req.GetUserContactInfoListReq;
import com.contract.pojo.req.UpdateUserContactInfoByIdReq;
import com.github.pagehelper.PageInfo;

public interface UserContactInfoService {

    boolean addUserContactInfo(AddUserContactInfoReq req);

    boolean deleteUserContactInfoById(Integer id);

    boolean updateUserContactInfoById(Integer id, UpdateUserContactInfoByIdReq req);

    UserContactInfo getUserContactInfoById(Integer id);

    PageInfo<UserContactInfo> getUserContactInfoList(GetUserContactInfoListReq req);

}
