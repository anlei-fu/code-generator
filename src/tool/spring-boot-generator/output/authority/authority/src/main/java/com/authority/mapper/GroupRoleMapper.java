package com.authority.mapper;

import com.authority.pojo.entity.GroupRole;
import com.authority.pojo.params.AddGroupRoleParams;
import com.authority.pojo.params.UpdateGroupRoleByUserAndUserAndUserAndUserAndIdParams;
import com.authority.pojo.req.GetGroupRoleListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface GroupRoleMapper {
        
    int addGroupRole(AddGroupRoleParams params);
    
        int deleteGroupRoleByUserAndUserAndUserAndUserAndId(@Params("id") Integer id);
    
        int updateGroupRoleByUserAndUserAndUserAndUserAndId(UpdateGroupRoleByUserAndUserAndUserAndUserAndIdParams params);
    
        GroupRole getGroupRoleByUserAndUserAndUserAndUserAndId(@Params("id") Integer id);
    
        List<GroupRole> getGroupRoleList(GetGroupRoleListReq req);
   
}