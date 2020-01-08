package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.TrackDivisionInfo;
import com.railway.pojo.req.AddTrackDivisionInfoReq;
import com.railway.pojo.req.GetTrackDivisionInfoListReq;
import com.railway.pojo.req.UpdateTrackDivisionInfoByIdReq;


public interface TrackDivisionInfoService {

    boolean addTrackDivisionInfo(AddTrackDivisionInfoReq req);
    
    boolean deleteTrackDivisionInfoById(Integer id);
    
    boolean updateTrackDivisionInfoById(Integer id, UpdateTrackDivisionInfoByIdReq req);
    
    TrackDivisionInfo getTrackDivisionInfoById(Integer id);
    
    PageInfo<TrackDivisionInfo> getTrackDivisionInfoList(GetTrackDivisionInfoListReq req);

}