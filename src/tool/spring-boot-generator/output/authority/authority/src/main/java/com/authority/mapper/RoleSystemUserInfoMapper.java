package com.authority.mapper;

import com.authority.pojo.entity.RoleSystemUserInfo;
import com.authority.pojo.params.AddRoleSystemUserInfoParams;
import com.authority.pojo.params.UpdateRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccountParams;
import com.authority.pojo.req.GetRoleSystemUserInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface RoleSystemUserInfoMapper {
        
    int addRoleSystemUserInfo(AddRoleSystemUserInfoParams params);
    
        int deleteRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccount(@Params("account") String account);
    
        int updateRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccount(UpdateRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccountParams params);
    
        RoleSystemUserInfo getRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccount(@Params("account") String account);
    
        List<RoleSystemUserInfo> getRoleSystemUserInfoList(GetRoleSystemUserInfoListReq req);
   
}