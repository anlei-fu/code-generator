package com.contractSign.mapper;

import com.undefined.pojo.entity.@name;
import org.mapstruct.Mapper;


@Mapper
public interface @nameMapper {
        
    int addUserPurchaseRecord(@Params("req") AddUserPurchaseRecordReq req);
        int deleteUserPurchaseRecordById(Integer id);
        int updateUserPurchaseRecordById(@Params("id") Integer id, @Params("req") UpdateUserPurchaseRecordByIdReq req);
        UserPurchaseRecord getUserPurchaseRecordById(Integer id);
        List<UserPurchaseRecord> getUserPurchaseRecordList(@Params("req") GetUserPurchaseRecordListReq req);
       
}