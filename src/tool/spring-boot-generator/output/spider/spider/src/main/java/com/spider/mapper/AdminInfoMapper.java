package com.undefined.mapper;

import com.undefined.pojo.entity.AdminInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface AdminInfoMapper {
        
    int addAdminInfo(AddAdminInfoReq req);
    
    int deleteAdminInfoById(Integer id);
    
    int updateAdminInfoById(@Params("id") Integer id, @Params("req") UpdateAdminInfoByIdReq req);
    
    AdminInfo getAdminInfoById(Integer id);
    
    List<AdminInfo> getAdminInfoList(GetAdminInfoListReq req);   
}