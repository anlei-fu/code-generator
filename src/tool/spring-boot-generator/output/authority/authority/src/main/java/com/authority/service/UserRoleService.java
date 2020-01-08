package com.authority.service;

import com.authority.pojo.entity.UserRole;
import com.authority.pojo.req.AddUserRoleReq;
import com.authority.pojo.req.GetUserRoleListReq;
import com.authority.pojo.req.UpdateUserRoleByUserAndUserAndUserAndUserAndIdReq;
import com.github.pagehelper.PageInfo;


public interface UserRoleService {

    boolean addUserRole(AddUserRoleReq req, String user);
    
    boolean deleteUserRoleByUserAndUserAndUserAndUserAndId(Integer id);
    
    boolean updateUserRoleByUserAndUserAndUserAndUserAndId(Integer id, UpdateUserRoleByUserAndUserAndUserAndUserAndIdReq req);
    
    UserRole getUserRoleByUserAndUserAndUserAndUserAndId(Integer id);
    
    PageInfo<UserRole> getUserRoleList(GetUserRoleListReq req);

}