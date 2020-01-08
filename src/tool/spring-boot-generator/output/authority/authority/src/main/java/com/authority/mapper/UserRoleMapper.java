package com.authority.mapper;

import com.authority.pojo.entity.UserRole;
import com.authority.pojo.params.AddUserRoleParams;
import com.authority.pojo.params.UpdateUserRoleByUserAndUserAndUserAndUserAndIdParams;
import com.authority.pojo.req.GetUserRoleListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface UserRoleMapper {
        
    int addUserRole(AddUserRoleParams params);
    
        int deleteUserRoleByUserAndUserAndUserAndUserAndId(@Params("id") Integer id);
    
        int updateUserRoleByUserAndUserAndUserAndUserAndId(UpdateUserRoleByUserAndUserAndUserAndUserAndIdParams params);
    
        UserRole getUserRoleByUserAndUserAndUserAndUserAndId(@Params("id") Integer id);
    
        List<UserRole> getUserRoleList(GetUserRoleListReq req);
   
}