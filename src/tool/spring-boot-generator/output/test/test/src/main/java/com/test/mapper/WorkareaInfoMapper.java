package com.undefined.mapper;

import com.undefined.pojo.entity.WorkareaInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface WorkareaInfoMapper {
        
    int addWorkareaInfo(AddWorkareaInfoReq req);
    
    int deleteWorkareaInfoById(Integer id);
    
    int updateWorkareaInfoById(@Params("id") Integer id, @Params("req") UpdateWorkareaInfoByIdReq req);
    
    WorkareaInfo getWorkareaInfoById(Integer id);
    
    List<WorkareaInfo> getWorkareaInfoList(GetWorkareaInfoListReq req);   
}