package com.authority.service;

import com.authority.pojo.entity.GroupRole;
import com.authority.pojo.req.AddGroupRoleReq;
import com.authority.pojo.req.GetGroupRoleListReq;
import com.authority.pojo.req.UpdateGroupRoleByIdReq;
import com.github.pagehelper.PageInfo;


public interface GroupRoleService {

    boolean addGroupRole(AddGroupRoleReq req);
    
    boolean deleteGroupRoleById(Integer id);
    
    boolean updateGroupRoleById(Integer id, UpdateGroupRoleByIdReq req);
    
    GroupRole getGroupRoleById(Integer id);
    
    PageInfo<GroupRole> getGroupRoleList(GetGroupRoleListReq req);

}