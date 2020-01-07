package com.spider.mapper;

import com.spider.pojo.entity.UserDeductRecord;
import com.spider.pojo.req.AddUserDeductRecordReq;
import com.spider.pojo.req.GetUserDeductRecordListReq;
import com.spider.pojo.req.UpdateUserDeductRecordByIdReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface UserDeductRecordMapper {
        
    int addUserDeductRecord(AddUserDeductRecordReq req);
    
        int deleteUserDeductRecordById(@Params("id") Integer id);
    
        int updateUserDeductRecordById(@Params("id") Integer id, @Params("req") UpdateUserDeductRecordByIdReq req);
    
        UserDeductRecord getUserDeductRecordById(@Params("id") Integer id);
    
        List<UserDeductRecord> getUserDeductRecordList(GetUserDeductRecordListReq req);
   
}