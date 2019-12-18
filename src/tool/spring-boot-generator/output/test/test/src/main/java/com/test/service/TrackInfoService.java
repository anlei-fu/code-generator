package com.undefined.service;

import com.undefined.pojo.entity.TrackInfo;

public interface TrackInfoService {

    boolean addTrackInfo(AddTrackInfoReq req);

    boolean deleteTrackInfoById(Integer id);

    boolean updateTrackInfoById(Integer id, UpdateTrackInfoByIdReq req);

    TrackInfo getTrackInfoById(Integer id);

    PageInfo<TrackInfo> getTrackInfoList(GetTrackInfoListReq req);
}