package com.test.mapper;

import com.test.pojo.req.AddDetectGoupUserReq;
import com.test.pojo.req.GetDetectGoupUserListReq;
import com.test.pojo.req.UpdateDetectGoupUserByIdReq;
import com.test.pojo.entity.DetectGoupUser;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DetectGoupUserMapper {
        
    int addDetectGoupUser(AddDetectGoupUserReq req);
    
    int deleteDetectGoupUserById(Integer id);
    
    int updateDetectGoupUserById(@Params("id") Integer id, @Params("req") UpdateDetectGoupUserByIdReq req);
    
    DetectGoupUser getDetectGoupUserById(Integer id);
    
    List<DetectGoupUser> getDetectGoupUserList(GetDetectGoupUserListReq req);   
}