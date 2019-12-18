package com.undefined.mapper;

import com.undefined.pojo.entity.UserInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserInfoMapper {
        
    int addUserInfo(AddUserInfoReq req);
    
    int deleteUserInfoById(Integer id);
    
    int updateUserInfoById(@Params("id") Integer id, @Params("req") UpdateUserInfoByIdReq req);
    
    UserInfo getUserInfoById(Integer id);
    
    List<UserInfo> getUserInfoList(GetUserInfoListReq req);   
}