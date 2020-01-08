package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.StationLineMapper;
import com.railway.pojo.entity.StationLine;
import com.railway.pojo.entity.StationLine;
import com.railway.pojo.req.AddStationLineReq;
import com.railway.pojo.req.GetStationLineListReq;
import com.railway.pojo.req.UpdateStationLineByIdReq;
import com.railway.service.StationLineService;
import com.railway.utils.PageHelperUtils;
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
        params params = new UpdateStationLineByIdParams(id, req)
        return stationLineMapper.updateStationLineById(params) > 0;
    }

    @Override
    public StationLine getStationLineById(Integer id) {
        return stationLineMapper.getStationLineById(id);
    }

    @Override
    public PageInfo<StationLine> getStationLineList(GetStationLineListReq req) {
        return PageHelperUtils.page(()=> stationLineMapper.getStationLineList(req));
    }

}
