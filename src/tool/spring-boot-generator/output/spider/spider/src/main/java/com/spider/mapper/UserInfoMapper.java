package com.spider.mapper;

import com.spider.pojo.entity.UserInfo;
import com.spider.pojo.req.AddUserInfoReq;
import com.spider.pojo.req.GetUserInfoListReq;
import com.spider.pojo.req.UpdateUserInfoByIdReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface UserInfoMapper {
        
    int addUserInfo(AddUserInfoReq req);
    
        int deleteUserInfoById(@Params("id") Integer id);
    
        int updateUserInfoById(@Params("id") Integer id, @Params("req") UpdateUserInfoByIdReq req);
    
        UserInfo getUserInfoById(@Params("id") Integer id);
    
        List<UserInfo> getUserInfoList(GetUserInfoListReq req);
   
}