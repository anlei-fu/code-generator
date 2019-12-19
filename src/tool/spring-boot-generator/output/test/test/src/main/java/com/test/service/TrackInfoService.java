package com.test.service;

import com.test.pojo.entity.TrackInfo;
import com.test.pojo.req.AddTrackInfoReq;
import com.test.pojo.req.GetTrackInfoListReq;
import com.test.pojo.req.UpdateTrackInfoByIdReq;
import com.github.pagehelper.PageInfo;


public interface TrackInfoService {

    boolean addTrackInfo(AddTrackInfoReq req);

    boolean deleteTrackInfoById(Integer id);

    boolean updateTrackInfoById(Integer id, UpdateTrackInfoByIdReq req);

    TrackInfo getTrackInfoById(Integer id);

    PageInfo<TrackInfo> getTrackInfoList(GetTrackInfoListReq req);
}