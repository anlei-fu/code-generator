package com.railway.mapper;

import com.railway.pojo.entity.WorkareaInfo;
import com.railway.pojo.params.UpdateWorkareaInfoByIdParams;
import com.railway.pojo.req.AddWorkareaInfoReq;
import com.railway.pojo.req.GetWorkareaInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface WorkareaInfoMapper {
        
    int addWorkareaInfo(AddWorkareaInfoReq req);
    
        int deleteWorkareaInfoById(@Params("id") Integer id);
    
        int updateWorkareaInfoById(UpdateWorkareaInfoByIdParams params);
    
        WorkareaInfo getWorkareaInfoById(@Params("id") Integer id);
    
        List<WorkareaInfo> getWorkareaInfoList(GetWorkareaInfoListReq req);
   
}