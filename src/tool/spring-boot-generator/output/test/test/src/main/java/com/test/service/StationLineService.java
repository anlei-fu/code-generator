package com.undefined.service;

import com.undefined.pojo.entity.StationLine;

public interface StationLineService {

    boolean addStationLine(AddStationLineReq req);

    boolean deleteStationLineById(Integer id);

    boolean updateStationLineById(Integer id, UpdateStationLineByIdReq req);

    StationLine getStationLineById(Integer id);

    PageInfo<StationLine> getStationLineList(GetStationLineListReq req);
}