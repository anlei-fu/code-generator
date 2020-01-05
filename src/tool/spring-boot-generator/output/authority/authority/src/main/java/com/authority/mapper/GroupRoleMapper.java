package com.authority.mapper;

import com.authority.pojo.entity.GroupRole;
import com.authority.pojo.req.AddGroupRoleReq;
import com.authority.pojo.req.GetGroupRoleListReq;
import com.authority.pojo.req.UpdateGroupRoleByIdReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface GroupRoleMapper {
        
    int addGroupRole(AddGroupRoleReq req);
    
        int deleteGroupRoleById(@Params("id") Integer id);
    
        int updateGroupRoleById(@Params("id") Integer id, @Params("req") UpdateGroupRoleByIdReq req);
    
        GroupRole getGroupRoleById(@Params("id") Integer id);
    
        List<GroupRole> getGroupRoleList(GetGroupRoleListReq req);
   
}