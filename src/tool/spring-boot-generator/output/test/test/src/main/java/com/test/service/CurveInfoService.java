package com.undefined.service;

import com.undefined.pojo.entity.CurveInfo;

public interface CurveInfoService {

    boolean addCurveInfo(AddCurveInfoReq req);

    boolean deleteCurveInfoByCurveId(Integer curveId);

    boolean updateCurveInfoByCurveId(Integer curveId, UpdateCurveInfoByCurveIdReq req);

    CurveInfo getCurveInfoByCurveId(Integer curveId);

    PageInfo<CurveInfo> getCurveInfoList(GetCurveInfoListReq req);
}