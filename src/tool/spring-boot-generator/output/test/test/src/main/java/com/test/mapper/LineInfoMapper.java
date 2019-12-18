package com.undefined.mapper;

import com.undefined.pojo.entity.LineInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface LineInfoMapper {
        
    int addLineInfo(AddLineInfoReq req);
    
    int deleteLineInfoById(Integer id);
    
    int updateLineInfoById(@Params("id") Integer id, @Params("req") UpdateLineInfoByIdReq req);
    
    LineInfo getLineInfoById(Integer id);
    
    List<LineInfo> getLineInfoList(GetLineInfoListReq req);   
}