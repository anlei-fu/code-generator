package com.contractSign.service;



public interface @nameService {

    boolean addUserCompanyInfo(AddUserCompanyInfoReq req);
    boolean deleteUserCompanyInfoById(Integer id);
    boolean updateUserCompanyInfoById(Integer id, UpdateUserCompanyInfoByIdReq req);
    UserCompanyInfo getUserCompanyInfoById(Integer id);
    PageInfo<UserCompanyInfo> getUserCompanyInfoList(GetUserCompanyInfoListReq req);

}