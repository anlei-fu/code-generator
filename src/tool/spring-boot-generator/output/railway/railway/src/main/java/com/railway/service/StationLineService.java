package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.StationLine;
import com.railway.pojo.req.AddStationLineReq;
import com.railway.pojo.req.GetStationLineListReq;
import com.railway.pojo.req.UpdateStationLineByIdReq;

public interface StationLineService {

    boolean addStationLine(AddStationLineReq req);

    boolean deleteStationLineById(Integer id);

    boolean updateStationLineById(Integer id, UpdateStationLineByIdReq req);

    StationLine getStationLineById(Integer id);

    PageInfo<StationLine> getStationLineList(GetStationLineListReq req);

}
