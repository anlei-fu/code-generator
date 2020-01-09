package com.contract.service;

import com.contract.pojo.entity.UserCompanyInfo;
import com.contract.pojo.req.AddUserCompanyInfoReq;
import com.contract.pojo.req.GetUserCompanyInfoListReq;
import com.contract.pojo.req.UpdateUserCompanyInfoByIdReq;
import com.github.pagehelper.PageInfo;

public interface UserCompanyInfoService {

    boolean addUserCompanyInfo(AddUserCompanyInfoReq req);

    boolean deleteUserCompanyInfoById(Integer id);

    boolean updateUserCompanyInfoById(Integer id, UpdateUserCompanyInfoByIdReq req);

    UserCompanyInfo getUserCompanyInfoById(Integer id);

    PageInfo<UserCompanyInfo> getUserCompanyInfoList(GetUserCompanyInfoListReq req);

}
