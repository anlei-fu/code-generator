package com.contractSign.mapper;

import com.undefined.pojo.entity.@name;
import org.mapstruct.Mapper;


@Mapper
public interface @nameMapper {
        
    int addUserConsumeRecord(@Params("req") AddUserConsumeRecordReq req);
        int deleteUserConsumeRecordById(Integer id);
        int updateUserConsumeRecordById(@Params("id") Integer id, @Params("req") UpdateUserConsumeRecordByIdReq req);
        UserConsumeRecord getUserConsumeRecordById(Integer id);
        List<UserConsumeRecord> getUserConsumeRecordList(@Params("req") GetUserConsumeRecordListReq req);
       
}