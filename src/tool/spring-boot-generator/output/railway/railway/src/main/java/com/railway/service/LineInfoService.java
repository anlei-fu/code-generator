package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.LineInfo;
import com.railway.pojo.req.AddLineInfoReq;
import com.railway.pojo.req.GetLineInfoListReq;
import com.railway.pojo.req.UpdateLineInfoByIdReq;

public interface LineInfoService {

    boolean addLineInfo(AddLineInfoReq req);

    boolean deleteLineInfoById(Integer id);

    boolean updateLineInfoById(Integer id, UpdateLineInfoByIdReq req);

    LineInfo getLineInfoById(Integer id);

    PageInfo<LineInfo> getLineInfoList(GetLineInfoListReq req);

}
