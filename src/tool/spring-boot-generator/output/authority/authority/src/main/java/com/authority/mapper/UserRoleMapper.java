package com.authority.mapper;

import com.authority.pojo.entity.UserRole;
import com.authority.pojo.req.AddUserRoleReq;
import com.authority.pojo.req.GetUserRoleListReq;
import com.authority.pojo.req.UpdateUserRoleByIdReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface UserRoleMapper {
        
    int addUserRole(AddUserRoleReq req);
    
        int deleteUserRoleById(@Params("id") Integer id);
    
        int updateUserRoleById(@Params("id") Integer id, @Params("req") UpdateUserRoleByIdReq req);
    
        UserRole getUserRoleById(@Params("id") Integer id);
    
        List<UserRole> getUserRoleList(GetUserRoleListReq req);
   
}