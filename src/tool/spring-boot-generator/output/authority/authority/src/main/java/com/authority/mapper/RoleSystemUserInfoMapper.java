package com.authority.mapper;

import com.authority.pojo.entity.RoleSystemUserInfo;
import com.authority.pojo.req.AddRoleSystemUserInfoReq;
import com.authority.pojo.req.GetRoleSystemUserInfoListReq;
import com.authority.pojo.req.UpdateRoleSystemUserInfoByAccountReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface RoleSystemUserInfoMapper {
        
    int addRoleSystemUserInfo(AddRoleSystemUserInfoReq req);
    
        int deleteRoleSystemUserInfoByAccount(@Params("account") Integer account);
    
        int updateRoleSystemUserInfoByAccount(@Params("account") Integer account, @Params("req") UpdateRoleSystemUserInfoByAccountReq req);
    
        RoleSystemUserInfo getRoleSystemUserInfoByAccount(@Params("account") Integer account);
    
        List<RoleSystemUserInfo> getRoleSystemUserInfoList(GetRoleSystemUserInfoListReq req);
   
}