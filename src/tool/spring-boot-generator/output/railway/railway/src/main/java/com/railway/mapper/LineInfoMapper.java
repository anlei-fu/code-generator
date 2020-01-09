package com.railway.mapper;

import com.railway.pojo.entity.LineInfo;
import com.railway.pojo.param.UpdateLineInfoByIdParams;
import com.railway.pojo.req.AddLineInfoReq;
import com.railway.pojo.req.GetLineInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface LineInfoMapper {

    int addLineInfo(AddLineInfoReq req);

    int deleteLineInfoById(@Param("id") Integer id);

    int updateLineInfoById(UpdateLineInfoByIdParams params);

    LineInfo getLineInfoById(@Param("id") Integer id);

    List<LineInfo> getLineInfoList(GetLineInfoListReq req);

}
