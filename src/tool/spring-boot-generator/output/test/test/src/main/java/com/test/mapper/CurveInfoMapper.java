package com.undefined.mapper;

import com.undefined.pojo.entity.CurveInfo;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface CurveInfoMapper {
        
    int addCurveInfo(AddCurveInfoReq req);
    
    int deleteCurveInfoByCurveId(Integer curveId);
    
    int updateCurveInfoByCurveId(@Params("curveId") Integer curveId, @Params("req") UpdateCurveInfoByCurveIdReq req);
    
    CurveInfo getCurveInfoByCurveId(Integer curveId);
    
    List<CurveInfo> getCurveInfoList(GetCurveInfoListReq req);   
}