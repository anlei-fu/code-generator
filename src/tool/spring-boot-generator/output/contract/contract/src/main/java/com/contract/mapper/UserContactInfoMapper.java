package com.contract.mapper;

import com.contract.pojo.entity.UserContactInfo;
import com.contract.pojo.param.UpdateUserContactInfoByIdParams;
import com.contract.pojo.req.AddUserContactInfoReq;
import com.contract.pojo.req.GetUserContactInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface UserContactInfoMapper {

    int addUserContactInfo(AddUserContactInfoReq req);

    int deleteUserContactInfoById(@Param("id") Integer id);

    int updateUserContactInfoById(UpdateUserContactInfoByIdParams params);

    UserContactInfo getUserContactInfoById(@Param("id") Integer id);

    List<UserContactInfo> getUserContactInfoList(GetUserContactInfoListReq req);

}
