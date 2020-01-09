package com.contract.mapper;

import com.contract.pojo.entity.UserPurchaseRecord;
import com.contract.pojo.param.UpdateUserPurchaseRecordByIdParams;
import com.contract.pojo.req.AddUserPurchaseRecordReq;
import com.contract.pojo.req.GetUserPurchaseRecordListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface UserPurchaseRecordMapper {

    int addUserPurchaseRecord(AddUserPurchaseRecordReq req);

    int deleteUserPurchaseRecordById(@Param("id") Integer id);

    int updateUserPurchaseRecordById(UpdateUserPurchaseRecordByIdParams params);

    UserPurchaseRecord getUserPurchaseRecordById(@Param("id") Integer id);

    List<UserPurchaseRecord> getUserPurchaseRecordList(GetUserPurchaseRecordListReq req);

}
