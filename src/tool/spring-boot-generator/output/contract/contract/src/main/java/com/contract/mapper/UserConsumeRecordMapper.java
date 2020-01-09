package com.contract.mapper;

import com.contract.pojo.entity.UserConsumeRecord;
import com.contract.pojo.param.UpdateUserConsumeRecordByIdParams;
import com.contract.pojo.req.AddUserConsumeRecordReq;
import com.contract.pojo.req.GetUserConsumeRecordListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface UserConsumeRecordMapper {

    int addUserConsumeRecord(AddUserConsumeRecordReq req);

    int deleteUserConsumeRecordById(@Param("id") Integer id);

    int updateUserConsumeRecordById(UpdateUserConsumeRecordByIdParams params);

    UserConsumeRecord getUserConsumeRecordById(@Param("id") Integer id);

    List<UserConsumeRecord> getUserConsumeRecordList(GetUserConsumeRecordListReq req);

}
