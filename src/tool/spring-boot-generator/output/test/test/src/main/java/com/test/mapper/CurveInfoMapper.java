package com.test.mapper;

import com.test.pojo.req.AddCurveInfoReq;
import com.test.pojo.req.GetCurveInfoListReq;
import com.test.pojo.req.UpdateCurveInfoByCurveIdReq;
import com.test.pojo.entity.CurveInfo;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface CurveInfoMapper {
        
    int addCurveInfo(AddCurveInfoReq req);
    
    int deleteCurveInfoByCurveId(Integer curveId);
    
    int updateCurveInfoByCurveId(@Params("curveId") Integer curveId, @Params("req") UpdateCurveInfoByCurveIdReq req);
    
    CurveInfo getCurveInfoByCurveId(Integer curveId);
    
    List<CurveInfo> getCurveInfoList(GetCurveInfoListReq req);   
}