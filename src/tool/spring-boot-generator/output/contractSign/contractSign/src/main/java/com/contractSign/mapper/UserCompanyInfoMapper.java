package com.contractSign.mapper;

import com.undefined.pojo.entity.@name;
import org.mapstruct.Mapper;


@Mapper
public interface @nameMapper {
        
    int addUserCompanyInfo(@Params("req") AddUserCompanyInfoReq req);
        int deleteUserCompanyInfoById(Integer id);
        int updateUserCompanyInfoById(@Params("id") Integer id, @Params("req") UpdateUserCompanyInfoByIdReq req);
        UserCompanyInfo getUserCompanyInfoById(Integer id);
        List<UserCompanyInfo> getUserCompanyInfoList(@Params("req") GetUserCompanyInfoListReq req);
       
}