package com.undefined.service.impl;

import com.undefined.mapper.StationLineMapper;
import com.undefined.pojo.entity.StationLine;
import com.spider.service.StationLineService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StationLineServiceImpl implements StationLineService {

    @Autowired
    private StationLineMapper stationLineMapper;

    @Override
    public boolean addStationLine(AddStationLineReq req) {
        return stationLineMapper.addStationLine(req) > 0;
    }


    @Override
    public boolean deleteStationLineById(Integer id) {
        return stationLineMapper.deleteStationLineById(id) > 0;
    }


    @Override
    public boolean updateStationLineById(Integer id, UpdateStationLineByIdReq req) {
        return stationLineMapper.updateStationLineById(id, req) > 0;
    }


    @Override
    public StationLine getStationLineById(Integer id) {
        return stationLineMapper.getStationLineById(id);
    }


    @Override
    public PageInfo<StationLine> getStationLineList(GetStationLineListReq req) {
        return stationLineMapper.getStationLineList(req);
    }
}
