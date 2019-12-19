package com.test.mapper;

import com.test.pojo.req.AddWorkareaInfoReq;
import com.test.pojo.req.GetWorkareaInfoListReq;
import com.test.pojo.req.UpdateWorkareaInfoByIdReq;
import com.test.pojo.entity.WorkareaInfo;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface WorkareaInfoMapper {
        
    int addWorkareaInfo(AddWorkareaInfoReq req);
    
    int deleteWorkareaInfoById(Integer id);
    
    int updateWorkareaInfoById(@Params("id") Integer id, @Params("req") UpdateWorkareaInfoByIdReq req);
    
    WorkareaInfo getWorkareaInfoById(Integer id);
    
    List<WorkareaInfo> getWorkareaInfoList(GetWorkareaInfoListReq req);   
}