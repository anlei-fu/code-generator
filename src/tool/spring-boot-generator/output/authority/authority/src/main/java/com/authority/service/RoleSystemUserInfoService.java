package com.authority.service;

import com.authority.pojo.entity.RoleSystemUserInfo;
import com.authority.pojo.req.AddRoleSystemUserInfoReq;
import com.authority.pojo.req.GetRoleSystemUserInfoListReq;
import com.authority.pojo.req.UpdateRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccountReq;
import com.github.pagehelper.PageInfo;


public interface RoleSystemUserInfoService {

    boolean addRoleSystemUserInfo(AddRoleSystemUserInfoReq req, String user);
    
    boolean deleteRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccount(String account);
    
    boolean updateRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccount(String account, UpdateRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccountReq req);
    
    RoleSystemUserInfo getRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccount(String account);
    
    PageInfo<RoleSystemUserInfo> getRoleSystemUserInfoList(GetRoleSystemUserInfoListReq req);

}