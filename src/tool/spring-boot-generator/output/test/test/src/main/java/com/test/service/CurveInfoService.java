package com.test.service;

import com.test.pojo.entity.CurveInfo;
import com.test.pojo.req.AddCurveInfoReq;
import com.test.pojo.req.GetCurveInfoListReq;
import com.test.pojo.req.UpdateCurveInfoByCurveIdReq;
import com.github.pagehelper.PageInfo;


public interface CurveInfoService {

    boolean addCurveInfo(AddCurveInfoReq req);

    boolean deleteCurveInfoByCurveId(Integer curveId);

    boolean updateCurveInfoByCurveId(Integer curveId, UpdateCurveInfoByCurveIdReq req);

    CurveInfo getCurveInfoByCurveId(Integer curveId);

    PageInfo<CurveInfo> getCurveInfoList(GetCurveInfoListReq req);
}