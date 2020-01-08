package com.spider.mapper;

import com.spider.pojo.entity.UserDeductRecord;
import com.spider.pojo.params.UpdateUserDeductRecordByIdParams;
import com.spider.pojo.req.AddUserDeductRecordReq;
import com.spider.pojo.req.GetUserDeductRecordListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface UserDeductRecordMapper {
        
    int addUserDeductRecord(AddUserDeductRecordReq req);
    
        int deleteUserDeductRecordById(@Params("id") Integer id);
    
        int updateUserDeductRecordById(UpdateUserDeductRecordByIdParams params);
    
        UserDeductRecord getUserDeductRecordById(@Params("id") Integer id);
    
        List<UserDeductRecord> getUserDeductRecordList(GetUserDeductRecordListReq req);
   
}