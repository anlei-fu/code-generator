package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.TrackInfo;
import com.railway.pojo.req.AddTrackInfoReq;
import com.railway.pojo.req.GetTrackInfoListReq;
import com.railway.pojo.req.UpdateTrackInfoByIdReq;


public interface TrackInfoService {

    boolean addTrackInfo(AddTrackInfoReq req);
    
    boolean deleteTrackInfoById(Integer id);
    
    boolean updateTrackInfoById(Integer id, UpdateTrackInfoByIdReq req);
    
    TrackInfo getTrackInfoById(Integer id);
    
    PageInfo<TrackInfo> getTrackInfoList(GetTrackInfoListReq req);

}