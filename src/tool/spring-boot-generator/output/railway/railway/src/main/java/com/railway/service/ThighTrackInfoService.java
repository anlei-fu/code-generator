package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.ThighTrackInfo;
import com.railway.pojo.req.AddThighTrackInfoReq;
import com.railway.pojo.req.GetThighTrackInfoListReq;
import com.railway.pojo.req.UpdateThighTrackInfoByIdReq;


public interface ThighTrackInfoService {

    boolean addThighTrackInfo(AddThighTrackInfoReq req);
    
    boolean deleteThighTrackInfoById(Integer id);
    
    boolean updateThighTrackInfoById(Integer id, UpdateThighTrackInfoByIdReq req);
    
    ThighTrackInfo getThighTrackInfoById(Integer id);
    
    PageInfo<ThighTrackInfo> getThighTrackInfoList(GetThighTrackInfoListReq req);

}