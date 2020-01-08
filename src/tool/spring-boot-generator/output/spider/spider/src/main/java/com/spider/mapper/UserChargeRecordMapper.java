package com.spider.mapper;

import com.spider.pojo.entity.UserChargeRecord;
import com.spider.pojo.params.UpdateUserChargeRecordByIdParams;
import com.spider.pojo.req.AddUserChargeRecordReq;
import com.spider.pojo.req.GetUserChargeRecordListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface UserChargeRecordMapper {
        
    int addUserChargeRecord(AddUserChargeRecordReq req);
    
        int deleteUserChargeRecordById(@Params("id") Integer id);
    
        int updateUserChargeRecordById(UpdateUserChargeRecordByIdParams params);
    
        UserChargeRecord getUserChargeRecordById(@Params("id") Integer id);
    
        List<UserChargeRecord> getUserChargeRecordList(GetUserChargeRecordListReq req);
   
}