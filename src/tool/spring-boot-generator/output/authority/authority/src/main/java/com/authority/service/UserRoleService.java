package com.authority.service;

import com.authority.pojo.entity.UserRole;
import com.authority.pojo.req.AddUserRoleReq;
import com.authority.pojo.req.GetUserRoleListReq;
import com.authority.pojo.req.UpdateUserRoleByIdReq;
import com.github.pagehelper.PageInfo;


public interface UserRoleService {

    boolean addUserRole(AddUserRoleReq req);
    
    boolean deleteUserRoleById(Integer id);
    
    boolean updateUserRoleById(Integer id, UpdateUserRoleByIdReq req);
    
    UserRole getUserRoleById(Integer id);
    
    PageInfo<UserRole> getUserRoleList(GetUserRoleListReq req);

}