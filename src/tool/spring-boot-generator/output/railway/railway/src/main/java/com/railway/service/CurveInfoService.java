package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.CurveInfo;
import com.railway.pojo.req.AddCurveInfoReq;
import com.railway.pojo.req.GetCurveInfoListReq;
import com.railway.pojo.req.UpdateCurveInfoByCurveIdReq;

public interface CurveInfoService {

    boolean addCurveInfo(AddCurveInfoReq req);

    boolean deleteCurveInfoByCurveId(Integer curveId);

    boolean updateCurveInfoByCurveId(Integer curveId, UpdateCurveInfoByCurveIdReq req);

    CurveInfo getCurveInfoByCurveId(Integer curveId);

    PageInfo<CurveInfo> getCurveInfoList(GetCurveInfoListReq req);

}
