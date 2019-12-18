package com.undefined.service;

import com.undefined.pojo.entity.ThighTrackInfo;

public interface ThighTrackInfoService {

    boolean addThighTrackInfo(AddThighTrackInfoReq req);

    boolean deleteThighTrackInfoById(Integer id);

    boolean updateThighTrackInfoById(Integer id, UpdateThighTrackInfoByIdReq req);

    ThighTrackInfo getThighTrackInfoById(Integer id);

    PageInfo<ThighTrackInfo> getThighTrackInfoList(GetThighTrackInfoListReq req);
}