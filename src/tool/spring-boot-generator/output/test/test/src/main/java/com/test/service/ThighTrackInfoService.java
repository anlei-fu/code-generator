package com.test.service;

import com.test.pojo.entity.ThighTrackInfo;
import com.test.pojo.req.AddThighTrackInfoReq;
import com.test.pojo.req.GetThighTrackInfoListReq;
import com.test.pojo.req.UpdateThighTrackInfoByIdReq;
import com.github.pagehelper.PageInfo;


public interface ThighTrackInfoService {

    boolean addThighTrackInfo(AddThighTrackInfoReq req);

    boolean deleteThighTrackInfoById(Integer id);

    boolean updateThighTrackInfoById(Integer id, UpdateThighTrackInfoByIdReq req);

    ThighTrackInfo getThighTrackInfoById(Integer id);

    PageInfo<ThighTrackInfo> getThighTrackInfoList(GetThighTrackInfoListReq req);
}