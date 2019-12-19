package com.test.service;

import com.test.pojo.entity.StationLine;
import com.test.pojo.req.AddStationLineReq;
import com.test.pojo.req.GetStationLineListReq;
import com.test.pojo.req.UpdateStationLineByIdReq;
import com.github.pagehelper.PageInfo;


public interface StationLineService {

    boolean addStationLine(AddStationLineReq req);

    boolean deleteStationLineById(Integer id);

    boolean updateStationLineById(Integer id, UpdateStationLineByIdReq req);

    StationLine getStationLineById(Integer id);

    PageInfo<StationLine> getStationLineList(GetStationLineListReq req);
}