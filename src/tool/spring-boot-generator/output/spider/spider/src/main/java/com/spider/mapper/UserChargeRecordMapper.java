package com.undefined.mapper;

import com.undefined.pojo.entity.UserChargeRecord;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserChargeRecordMapper {
        
    int addUserChargeRecord(AddUserChargeRecordReq req);
    
    int deleteUserChargeRecordById(Integer id);
    
    int updateUserChargeRecordById(@Params("id") Integer id, @Params("req") UpdateUserChargeRecordByIdReq req);
    
    UserChargeRecord getUserChargeRecordById(Integer id);
    
    List<UserChargeRecord> getUserChargeRecordList(GetUserChargeRecordListReq req);   
}