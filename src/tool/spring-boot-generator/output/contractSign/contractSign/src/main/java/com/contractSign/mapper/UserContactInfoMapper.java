package com.contractSign.mapper;

import com.undefined.pojo.entity.@name;
import org.mapstruct.Mapper;


@Mapper
public interface @nameMapper {
        
    int addUserContactInfo(@Params("req") AddUserContactInfoReq req);
        int deleteUserContactInfoById(Integer id);
        int updateUserContactInfoById(@Params("id") Integer id, @Params("req") UpdateUserContactInfoByIdReq req);
        UserContactInfo getUserContactInfoById(Integer id);
        List<UserContactInfo> getUserContactInfoList(@Params("req") GetUserContactInfoListReq req);
       
}