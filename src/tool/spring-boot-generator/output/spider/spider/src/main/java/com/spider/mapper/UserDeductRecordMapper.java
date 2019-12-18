package com.undefined.mapper;

import com.undefined.pojo.entity.UserDeductRecord;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserDeductRecordMapper {
        
    int addUserDeductRecord(AddUserDeductRecordReq req);
    
    int deleteUserDeductRecordById(Integer id);
    
    int updateUserDeductRecordById(@Params("id") Integer id, @Params("req") UpdateUserDeductRecordByIdReq req);
    
    UserDeductRecord getUserDeductRecordById(Integer id);
    
    List<UserDeductRecord> getUserDeductRecordList(GetUserDeductRecordListReq req);   
}