package com.test.mapper;

import com.test.pojo.req.AddLoginUserReq;
import com.test.pojo.req.GetLoginUserListReq;
import com.test.pojo.req.UpdateLoginUserByIdReq;
import com.test.pojo.entity.LoginUser;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface LoginUserMapper {
        
    int addLoginUser(AddLoginUserReq req);
    
    int deleteLoginUserById(Integer id);
    
    int updateLoginUserById(@Params("id") Integer id, @Params("req") UpdateLoginUserByIdReq req);
    
    LoginUser getLoginUserById(Integer id);
    
    List<LoginUser> getLoginUserList(GetLoginUserListReq req);   
}