package com.authority.mapper;

import com.authority.pojo.entity.SystemRoleGroupInfo;
import com.authority.pojo.params.AddSystemRoleGroupInfoParams;
import com.authority.pojo.params.UpdateSystemRoleGroupInfoByUserAndUserAndUserAndUserAndIdParams;
import com.authority.pojo.req.GetSystemRoleGroupInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface SystemRoleGroupInfoMapper {
        
    int addSystemRoleGroupInfo(AddSystemRoleGroupInfoParams params);
    
        int deleteSystemRoleGroupInfoByUserAndUserAndUserAndUserAndId(@Params("id") Integer id);
    
        int updateSystemRoleGroupInfoByUserAndUserAndUserAndUserAndId(UpdateSystemRoleGroupInfoByUserAndUserAndUserAndUserAndIdParams params);
    
        SystemRoleGroupInfo getSystemRoleGroupInfoByUserAndUserAndUserAndUserAndId(@Params("id") Integer id);
    
        List<SystemRoleGroupInfo> getSystemRoleGroupInfoList(GetSystemRoleGroupInfoListReq req);
   
}