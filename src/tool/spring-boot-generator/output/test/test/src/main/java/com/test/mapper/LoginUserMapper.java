package com.undefined.mapper;

import com.undefined.pojo.entity.LoginUser;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface LoginUserMapper {
        
    int addLoginUser(AddLoginUserReq req);
    
    int deleteLoginUserById(Integer id);
    
    int updateLoginUserById(@Params("id") Integer id, @Params("req") UpdateLoginUserByIdReq req);
    
    LoginUser getLoginUserById(Integer id);
    
    List<LoginUser> getLoginUserList(GetLoginUserListReq req);   
}