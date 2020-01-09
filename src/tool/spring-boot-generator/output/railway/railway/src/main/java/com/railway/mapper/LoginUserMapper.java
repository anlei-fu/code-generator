package com.railway.mapper;

import com.railway.pojo.entity.LoginUser;
import com.railway.pojo.param.UpdateLoginUserByIdParams;
import com.railway.pojo.req.AddLoginUserReq;
import com.railway.pojo.req.GetLoginUserListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface LoginUserMapper {

    int addLoginUser(AddLoginUserReq req);

    int deleteLoginUserById(@Param("id") Integer id);

    int updateLoginUserById(UpdateLoginUserByIdParams params);

    LoginUser getLoginUserById(@Param("id") Integer id);

    List<LoginUser> getLoginUserList(GetLoginUserListReq req);

}
