package com.test.service.impl;

import com.test.pojo.req.AddLineInfoReq;
import com.test.pojo.req.GetLineInfoListReq;
import com.test.pojo.req.UpdateLineInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.mapper.LineInfoMapper;
import com.test.pojo.entity.LineInfo;
import com.test.service.LineInfoService;
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
        return lineInfoMapper.updateLineInfoById(id, req) > 0;
    }


    @Override
    public LineInfo getLineInfoById(Integer id) {
        return lineInfoMapper.getLineInfoById(id);
    }


    @Override
    public PageInfo<LineInfo> getLineInfoList(GetLineInfoListReq req) {
        return lineInfoMapper.getLineInfoList(req);
    }
}
