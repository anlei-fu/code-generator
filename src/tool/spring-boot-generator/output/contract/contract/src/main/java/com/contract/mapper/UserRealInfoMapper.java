package com.contract.mapper;

import com.contract.pojo.entity.UserRealInfo;
import com.contract.pojo.param.UpdateUserRealInfoByUserIdParams;
import com.contract.pojo.req.AddUserRealInfoReq;
import com.contract.pojo.req.GetUserRealInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface UserRealInfoMapper {

    int addUserRealInfo(AddUserRealInfoReq req);

    int deleteUserRealInfoByUserId(@Param("userId") Integer userId);

    int updateUserRealInfoByUserId(UpdateUserRealInfoByUserIdParams params);

    UserRealInfo getUserRealInfoByUserId(@Param("userId") Integer userId);

    List<UserRealInfo> getUserRealInfoList(GetUserRealInfoListReq req);

}
