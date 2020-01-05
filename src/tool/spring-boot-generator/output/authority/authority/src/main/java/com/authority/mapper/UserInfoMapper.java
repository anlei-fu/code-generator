package com.authority.mapper;

import com.authority.pojo.entity.UserInfo;
import com.authority.pojo.req.AddUserInfoReq;
import com.authority.pojo.req.GetUserInfoListReq;
import com.authority.pojo.req.UpdateUserInfoByAccountReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface UserInfoMapper {
        
    int addUserInfo(AddUserInfoReq req);
    
        int deleteUserInfoByAccount(@Params("account") Integer account);
    
        int updateUserInfoByAccount(@Params("account") Integer account, @Params("req") UpdateUserInfoByAccountReq req);
    
        UserInfo getUserInfoByAccount(@Params("account") Integer account);
    
        List<UserInfo> getUserInfoList(GetUserInfoListReq req);
   
}