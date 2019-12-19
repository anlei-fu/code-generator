package com.test.service;

import com.test.pojo.entity.LineInfo;
import com.test.pojo.req.AddLineInfoReq;
import com.test.pojo.req.GetLineInfoListReq;
import com.test.pojo.req.UpdateLineInfoByIdReq;
import com.github.pagehelper.PageInfo;


public interface LineInfoService {

    boolean addLineInfo(AddLineInfoReq req);

    boolean deleteLineInfoById(Integer id);

    boolean updateLineInfoById(Integer id, UpdateLineInfoByIdReq req);

    LineInfo getLineInfoById(Integer id);

    PageInfo<LineInfo> getLineInfoList(GetLineInfoListReq req);
}