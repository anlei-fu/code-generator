package com.test.service;

import com.test.pojo.entity.TrackDivisionInfo;
import com.test.pojo.req.AddTrackDivisionInfoReq;
import com.test.pojo.req.GetTrackDivisionInfoListReq;
import com.test.pojo.req.UpdateTrackDivisionInfoByIdReq;
import com.github.pagehelper.PageInfo;


public interface TrackDivisionInfoService {

    boolean addTrackDivisionInfo(AddTrackDivisionInfoReq req);

    boolean deleteTrackDivisionInfoById(Integer id);

    boolean updateTrackDivisionInfoById(Integer id, UpdateTrackDivisionInfoByIdReq req);

    TrackDivisionInfo getTrackDivisionInfoById(Integer id);

    PageInfo<TrackDivisionInfo> getTrackDivisionInfoList(GetTrackDivisionInfoListReq req);
}