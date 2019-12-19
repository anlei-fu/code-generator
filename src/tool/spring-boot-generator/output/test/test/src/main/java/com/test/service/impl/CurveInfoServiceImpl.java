package com.test.service.impl;

import com.test.pojo.req.AddCurveInfoReq;
import com.test.pojo.req.GetCurveInfoListReq;
import com.test.pojo.req.UpdateCurveInfoByCurveIdReq;
import com.github.pagehelper.PageInfo;
import com.test.mapper.CurveInfoMapper;
import com.test.pojo.entity.CurveInfo;
import com.test.service.CurveInfoService;
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
        return curveInfoMapper.updateCurveInfoByCurveId(curveId, req) > 0;
    }


    @Override
    public CurveInfo getCurveInfoByCurveId(Integer curveId) {
        return curveInfoMapper.getCurveInfoByCurveId(curveId);
    }


    @Override
    public PageInfo<CurveInfo> getCurveInfoList(GetCurveInfoListReq req) {
        return curveInfoMapper.getCurveInfoList(req);
    }
}
