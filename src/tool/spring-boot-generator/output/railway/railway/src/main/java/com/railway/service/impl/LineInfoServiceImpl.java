package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.LineInfoMapper;
import com.railway.pojo.entity.LineInfo;
import com.railway.pojo.entity.LineInfo;
import com.railway.pojo.param.UpdateLineInfoByIdParams;
import com.railway.pojo.req.AddLineInfoReq;
import com.railway.pojo.req.GetLineInfoListReq;
import com.railway.pojo.req.UpdateLineInfoByIdReq;
import com.railway.service.LineInfoService;
import com.railway.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class LineInfoServiceImpl implements LineInfoService {

    @Autowired
    private LineInfoMapper lineInfoMapper;

    @Override
    public boolean addLineInfo(AddLineInfoReq req) {
        return lineInfoMapper.addLineInfo(req) > 0;
    }

    @Override
    public boolean deleteLineInfoById(Integer id) {
        return lineInfoMapper.deleteLineInfoById(id) > 0;
    }

    @Override
    public boolean updateLineInfoById(Integer id, UpdateLineInfoByIdReq req) {
        UpdateLineInfoByIdParams params = new UpdateLineInfoByIdParams(id, req);
        return lineInfoMapper.updateLineInfoById(params) > 0;
    }

    @Override
    public LineInfo getLineInfoById(Integer id) {
        return lineInfoMapper.getLineInfoById(id);
    }

    @Override
    public PageInfo<LineInfo> getLineInfoList(GetLineInfoListReq req) {
        return PageHelperUtils.paging(req, () -> lineInfoMapper.getLineInfoList(req));
    }

}

