package com.authority.mapper;

import com.authority.pojo.entity.SystemInfo;
import com.authority.pojo.params.AddSystemInfoParams;
import com.authority.pojo.params.UpdateSystemInfoByUserAndUserAndUserAndUserAndIdParams;
import com.authority.pojo.req.GetSystemInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface SystemInfoMapper {
        
    int addSystemInfo(AddSystemInfoParams params);
    
        int deleteSystemInfoByUserAndUserAndUserAndUserAndId(@Params("id") Integer id);
    
        int updateSystemInfoByUserAndUserAndUserAndUserAndId(UpdateSystemInfoByUserAndUserAndUserAndUserAndIdParams params);
    
        SystemInfo getSystemInfoByUserAndUserAndUserAndUserAndId(@Params("id") Integer id);
    
        List<SystemInfo> getSystemInfoList(GetSystemInfoListReq req);
   
}