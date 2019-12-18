package com.undefined.service;

import com.undefined.pojo.entity.TrackDivisionInfo;

public interface TrackDivisionInfoService {

    boolean addTrackDivisionInfo(AddTrackDivisionInfoReq req);

    boolean deleteTrackDivisionInfoById(Integer id);

    boolean updateTrackDivisionInfoById(Integer id, UpdateTrackDivisionInfoByIdReq req);

    TrackDivisionInfo getTrackDivisionInfoById(Integer id);

    PageInfo<TrackDivisionInfo> getTrackDivisionInfoList(GetTrackDivisionInfoListReq req);
}