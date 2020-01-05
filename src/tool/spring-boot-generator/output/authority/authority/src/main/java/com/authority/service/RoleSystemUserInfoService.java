package com.authority.service;

import com.authority.pojo.entity.RoleSystemUserInfo;
import com.authority.pojo.req.AddRoleSystemUserInfoReq;
import com.authority.pojo.req.GetRoleSystemUserInfoListReq;
import com.authority.pojo.req.UpdateRoleSystemUserInfoByAccountReq;
import com.github.pagehelper.PageInfo;


public interface RoleSystemUserInfoService {

    boolean addRoleSystemUserInfo(AddRoleSystemUserInfoReq req);
    
    boolean deleteRoleSystemUserInfoByAccount(Integer account);
    
    boolean updateRoleSystemUserInfoByAccount(Integer account, UpdateRoleSystemUserInfoByAccountReq req);
    
    RoleSystemUserInfo getRoleSystemUserInfoByAccount(Integer account);
    
    PageInfo<RoleSystemUserInfo> getRoleSystemUserInfoList(GetRoleSystemUserInfoListReq req);

}