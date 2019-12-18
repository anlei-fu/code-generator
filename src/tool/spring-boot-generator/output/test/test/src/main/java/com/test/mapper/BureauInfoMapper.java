package com.undefined.mapper;

import com.undefined.pojo.entity.BureauInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface BureauInfoMapper {
        
    int addBureauInfo(AddBureauInfoReq req);
    
    int deleteBureauInfoById(Integer id);
    
    int updateBureauInfoById(@Params("id") Integer id, @Params("req") UpdateBureauInfoByIdReq req);
    
    BureauInfo getBureauInfoById(Integer id);
    
    List<BureauInfo> getBureauInfoList(GetBureauInfoListReq req);   
}