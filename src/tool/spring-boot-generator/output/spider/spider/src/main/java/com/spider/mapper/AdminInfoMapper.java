package com.spider.mapper;

import com.spider.pojo.entity.AdminInfo;
import com.spider.pojo.params.UpdateAdminInfoByIdParams;
import com.spider.pojo.req.AddAdminInfoReq;
import com.spider.pojo.req.GetAdminInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface AdminInfoMapper {
        
    int addAdminInfo(AddAdminInfoReq req);
    
        int deleteAdminInfoById(@Params("id") Integer id);
    
        int updateAdminInfoById(UpdateAdminInfoByIdParams params);
    
        AdminInfo getAdminInfoById(@Params("id") Integer id);
    
        List<AdminInfo> getAdminInfoList(GetAdminInfoListReq req);
   
}