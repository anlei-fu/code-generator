package com.authority.mapper;

import com.authority.pojo.entity.UserInfo;
import com.authority.pojo.params.AddUserInfoParams;
import com.authority.pojo.params.UpdateUserInfoByUserAndUserAndUserAndUserAndAccountParams;
import com.authority.pojo.req.GetUserInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface UserInfoMapper {
        
    int addUserInfo(AddUserInfoParams params);
    
        int deleteUserInfoByUserAndUserAndUserAndUserAndAccount(@Params("account") String account);
    
        int updateUserInfoByUserAndUserAndUserAndUserAndAccount(UpdateUserInfoByUserAndUserAndUserAndUserAndAccountParams params);
    
        UserInfo getUserInfoByUserAndUserAndUserAndUserAndAccount(@Params("account") String account);
    
        List<UserInfo> getUserInfoList(GetUserInfoListReq req);
   
}