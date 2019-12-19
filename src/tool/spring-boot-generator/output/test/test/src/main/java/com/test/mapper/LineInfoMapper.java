package com.test.mapper;

import com.test.pojo.req.AddLineInfoReq;
import com.test.pojo.req.GetLineInfoListReq;
import com.test.pojo.req.UpdateLineInfoByIdReq;
import com.test.pojo.entity.LineInfo;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface LineInfoMapper {
        
    int addLineInfo(AddLineInfoReq req);
    
    int deleteLineInfoById(Integer id);
    
    int updateLineInfoById(@Params("id") Integer id, @Params("req") UpdateLineInfoByIdReq req);
    
    LineInfo getLineInfoById(Integer id);
    
    List<LineInfo> getLineInfoList(GetLineInfoListReq req);   
}