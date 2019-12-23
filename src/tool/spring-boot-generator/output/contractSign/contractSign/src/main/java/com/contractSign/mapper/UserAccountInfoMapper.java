package com.contractSign.mapper;

import com.undefined.pojo.entity.@name;
import org.mapstruct.Mapper;


@Mapper
public interface @nameMapper {
        
    int addUserAccountInfo(@Params("req") AddUserAccountInfoReq req);
        int deleteUserAccountInfoById(Integer id);
        int updateUserAccountInfoById(@Params("id") Integer id, @Params("req") UpdateUserAccountInfoByIdReq req);
        UserAccountInfo getUserAccountInfoById(Integer id);
        List<UserAccountInfo> getUserAccountInfoList(@Params("req") GetUserAccountInfoListReq req);
       
}