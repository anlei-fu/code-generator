package com.contract.mapper;

import com.contract.pojo.entity.UserCompanyInfo;
import com.contract.pojo.param.UpdateUserCompanyInfoByIdParams;
import com.contract.pojo.req.AddUserCompanyInfoReq;
import com.contract.pojo.req.GetUserCompanyInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface UserCompanyInfoMapper {

    int addUserCompanyInfo(AddUserCompanyInfoReq req);

    int deleteUserCompanyInfoById(@Param("id") Integer id);

    int updateUserCompanyInfoById(UpdateUserCompanyInfoByIdParams params);

    UserCompanyInfo getUserCompanyInfoById(@Param("id") Integer id);

    List<UserCompanyInfo> getUserCompanyInfoList(GetUserCompanyInfoListReq req);

}
