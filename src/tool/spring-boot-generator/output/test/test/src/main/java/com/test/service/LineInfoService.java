package com.undefined.service;

import com.undefined.pojo.entity.LineInfo;

public interface LineInfoService {

    boolean addLineInfo(AddLineInfoReq req);

    boolean deleteLineInfoById(Integer id);

    boolean updateLineInfoById(Integer id, UpdateLineInfoByIdReq req);

    LineInfo getLineInfoById(Integer id);

    PageInfo<LineInfo> getLineInfoList(GetLineInfoListReq req);
}