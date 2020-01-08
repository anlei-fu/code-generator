package com.authority.mapper;

import com.authority.pojo.entity.SystemRoleInfo;
import com.authority.pojo.params.AddSystemRoleInfoParams;
import com.authority.pojo.params.UpdateSystemRoleInfoByUserAndUserAndUserAndUserAndIdParams;
import com.authority.pojo.req.GetSystemRoleInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface SystemRoleInfoMapper {
        
    int addSystemRoleInfo(AddSystemRoleInfoParams params);
    
        int deleteSystemRoleInfoByUserAndUserAndUserAndUserAndId(@Params("id") Integer id);
    
        int updateSystemRoleInfoByUserAndUserAndUserAndUserAndId(UpdateSystemRoleInfoByUserAndUserAndUserAndUserAndIdParams params);
    
        SystemRoleInfo getSystemRoleInfoByUserAndUserAndUserAndUserAndId(@Params("id") Integer id);
    
        List<SystemRoleInfo> getSystemRoleInfoList(GetSystemRoleInfoListReq req);
   
}