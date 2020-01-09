package com.contract.mapper;

import com.contract.pojo.entity.UserAccountInfo;
import com.contract.pojo.param.UpdateUserAccountInfoByIdParams;
import com.contract.pojo.req.AddUserAccountInfoReq;
import com.contract.pojo.req.GetUserAccountInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface UserAccountInfoMapper {

    int addUserAccountInfo(AddUserAccountInfoReq req);

    int deleteUserAccountInfoById(@Param("id") Integer id);

    int updateUserAccountInfoById(UpdateUserAccountInfoByIdParams params);

    UserAccountInfo getUserAccountInfoById(@Param("id") Integer id);

    List<UserAccountInfo> getUserAccountInfoList(GetUserAccountInfoListReq req);

}
