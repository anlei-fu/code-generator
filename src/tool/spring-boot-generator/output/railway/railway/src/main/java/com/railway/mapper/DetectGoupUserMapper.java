package com.railway.mapper;

import com.railway.pojo.entity.DetectGoupUser;
import com.railway.pojo.params.UpdateDetectGoupUserByIdParams;
import com.railway.pojo.req.AddDetectGoupUserReq;
import com.railway.pojo.req.GetDetectGoupUserListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DetectGoupUserMapper {
        
    int addDetectGoupUser(AddDetectGoupUserReq req);
    
        int deleteDetectGoupUserById(@Params("id") Integer id);
    
        int updateDetectGoupUserById(UpdateDetectGoupUserByIdParams params);
    
        DetectGoupUser getDetectGoupUserById(@Params("id") Integer id);
    
        List<DetectGoupUser> getDetectGoupUserList(GetDetectGoupUserListReq req);
   
}