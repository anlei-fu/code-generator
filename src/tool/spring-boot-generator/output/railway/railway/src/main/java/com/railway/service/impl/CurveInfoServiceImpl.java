package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.CurveInfoMapper;
import com.railway.pojo.entity.CurveInfo;
import com.railway.pojo.entity.CurveInfo;
import com.railway.pojo.param.UpdateCurveInfoByCurveIdParams;
import com.railway.pojo.req.AddCurveInfoReq;
import com.railway.pojo.req.GetCurveInfoListReq;
import com.railway.pojo.req.UpdateCurveInfoByCurveIdReq;
import com.railway.service.CurveInfoService;
import com.railway.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CurveInfoServiceImpl implements CurveInfoService {

    @Autowired
    private CurveInfoMapper curveInfoMapper;

    @Override
    public boolean addCurveInfo(AddCurveInfoReq req) {
        return curveInfoMapper.addCurveInfo(req) > 0;
    }

    @Override
    public boolean deleteCurveInfoByCurveId(Integer curveId) {
        return curveInfoMapper.deleteCurveInfoByCurveId(curveId) > 0;
    }

    @Override
    public boolean updateCurveInfoByCurveId(Integer curveId, UpdateCurveInfoByCurveIdReq req) {
        UpdateCurveInfoByCurveIdParams params = new UpdateCurveInfoByCurveIdParams(curveId, req);
        return curveInfoMapper.updateCurveInfoByCurveId(params) > 0;
    }

    @Override
    public CurveInfo getCurveInfoByCurveId(Integer curveId) {
        return curveInfoMapper.getCurveInfoByCurveId(curveId);
    }

    @Override
    public PageInfo<CurveInfo> getCurveInfoList(GetCurveInfoListReq req) {
        return PageHelperUtils.paging(req, () -> curveInfoMapper.getCurveInfoList(req));
    }

}

