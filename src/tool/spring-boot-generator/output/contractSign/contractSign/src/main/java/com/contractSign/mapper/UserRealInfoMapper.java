package com.contractSign.mapper;

import com.undefined.pojo.entity.@name;
import org.mapstruct.Mapper;


@Mapper
public interface @nameMapper {
        
    int addUserRealInfo(@Params("req") AddUserRealInfoReq req);
        int deleteUserRealInfoByUserId(Integer userId);
        int updateUserRealInfoByUserId(@Params("userId") Integer userId, @Params("req") UpdateUserRealInfoByUserIdReq req);
        UserRealInfo getUserRealInfoByUserId(Integer userId);
        List<UserRealInfo> getUserRealInfoList(@Params("req") GetUserRealInfoListReq req);
       
}