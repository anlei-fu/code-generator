/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-3-23 2:34:50 PM
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.test.service.impl;

import com.github.pagehelper.PageInfo;
import com.jasmine.test.mapper.CurveInfoMapper;
import com.jasmine.test.pojo.entity.CurveInfo;
import com.jasmine.test.pojo.param.AddCurveInfoParams;
import com.jasmine.test.pojo.param.UpdateCurveInfoParams;
import com.jasmine.test.pojo.req.AddCurveInfoReq;
import com.jasmine.test.pojo.req.GetCurveInfoListReq;
import com.jasmine.test.pojo.req.UpdateCurveInfoReq;
import com.jasmine.test.pojo.resp.CurveInfoDetailResp;
import com.jasmine.test.service.CurveInfoService;
import com.jasmine.test.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CurveInfoServiceImpl implements CurveInfoService {

    @Autowired private CurveInfoMapper curveInfoMapper;

    @Override
    public boolean addCurveInfo(Integer operator, AddCurveInfoReq req) {
        AddCurveInfoParams params = new AddCurveInfoParams(operator, req);
        return curveInfoMapper.addCurveInfo(params) > 0;
    }

    @Override
    public boolean deleteCurveInfoByCurveId(Integer curveId) {
        return curveInfoMapper.deleteCurveInfoByCurveId(curveId) > 0;
    }

    @Override
    public boolean updateCurveInfoByCurveId(
            Integer curveId, Integer operator, UpdateCurveInfoReq req) {
        UpdateCurveInfoParams params = new UpdateCurveInfoParams(curveId, operator, req);
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

    @Override
    public CurveInfoDetailResp getCurveInfoDetailByCurveId(Integer curveId) {
        return curveInfoMapper.getCurveInfoDetailByCurveId(curveId);
    }

    @Override
    public PageInfo<CurveInfoDetailResp> getCurveInfoDetailList(GetCurveInfoListReq req) {
        return PageHelperUtils.paging(req, () -> curveInfoMapper.getCurveInfoDetailList(req));
    }
}
