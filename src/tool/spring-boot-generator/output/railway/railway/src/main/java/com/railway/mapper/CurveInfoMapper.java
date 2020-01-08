package com.railway.mapper;

import com.railway.pojo.entity.CurveInfo;
import com.railway.pojo.params.UpdateCurveInfoByCurveIdParams;
import com.railway.pojo.req.AddCurveInfoReq;
import com.railway.pojo.req.GetCurveInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface CurveInfoMapper {
        
    int addCurveInfo(AddCurveInfoReq req);
    
        int deleteCurveInfoByCurveId(@Params("curveId") Integer curveId);
    
        int updateCurveInfoByCurveId(UpdateCurveInfoByCurveIdParams params);
    
        CurveInfo getCurveInfoByCurveId(@Params("curveId") Integer curveId);
    
        List<CurveInfo> getCurveInfoList(GetCurveInfoListReq req);
   
}