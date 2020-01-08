package com.authority.service;

import com.authority.pojo.entity.GroupRole;
import com.authority.pojo.req.AddGroupRoleReq;
import com.authority.pojo.req.GetGroupRoleListReq;
import com.authority.pojo.req.UpdateGroupRoleByUserAndUserAndUserAndUserAndIdReq;
import com.github.pagehelper.PageInfo;


public interface GroupRoleService {

    boolean addGroupRole(AddGroupRoleReq req, String user);
    
    boolean deleteGroupRoleByUserAndUserAndUserAndUserAndId(Integer id);
    
    boolean updateGroupRoleByUserAndUserAndUserAndUserAndId(Integer id, UpdateGroupRoleByUserAndUserAndUserAndUserAndIdReq req);
    
    GroupRole getGroupRoleByUserAndUserAndUserAndUserAndId(Integer id);
    
    PageInfo<GroupRole> getGroupRoleList(GetGroupRoleListReq req);

}