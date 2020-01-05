package com.authority.mapper;

import com.authority.pojo.entity.SystemRoleGroupInfo;
import com.authority.pojo.req.AddSystemRoleGroupInfoReq;
import com.authority.pojo.req.GetSystemRoleGroupInfoListReq;
import com.authority.pojo.req.UpdateSystemRoleGroupInfoByIdReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface SystemRoleGroupInfoMapper {
        
    int addSystemRoleGroupInfo(AddSystemRoleGroupInfoReq req);
    
        int deleteSystemRoleGroupInfoById(@Params("id") Integer id);
    
        int updateSystemRoleGroupInfoById(@Params("id") Integer id, @Params("req") UpdateSystemRoleGroupInfoByIdReq req);
    
        SystemRoleGroupInfo getSystemRoleGroupInfoById(@Params("id") Integer id);
    
        List<SystemRoleGroupInfo> getSystemRoleGroupInfoList(GetSystemRoleGroupInfoListReq req);
   
}