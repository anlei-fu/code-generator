package com.undefined.mapper;

import com.undefined.pojo.entity.DetectGoupUser;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DetectGoupUserMapper {
        
    int addDetectGoupUser(AddDetectGoupUserReq req);
    
    int deleteDetectGoupUserById(Integer id);
    
    int updateDetectGoupUserById(@Params("id") Integer id, @Params("req") UpdateDetectGoupUserByIdReq req);
    
    DetectGoupUser getDetectGoupUserById(Integer id);
    
    List<DetectGoupUser> getDetectGoupUserList(GetDetectGoupUserListReq req);   
}