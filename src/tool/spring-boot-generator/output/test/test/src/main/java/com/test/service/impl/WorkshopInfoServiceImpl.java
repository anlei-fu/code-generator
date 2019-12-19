package com.test.service.impl;

import com.test.pojo.req.AddWorkshopInfoReq;
import com.test.pojo.req.GetWorkshopInfoListReq;
import com.test.pojo.req.UpdateWorkshopInfoByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.mapper.WorkshopInfoMapper;
import com.test.pojo.entity.WorkshopInfo;
import com.test.service.WorkshopInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class WorkshopInfoServiceImpl implements WorkshopInfoService {

    @Autowired
    private WorkshopInfoMapper workshopInfoMapper;

    @Override
    public boolean addWorkshopInfo(AddWorkshopInfoReq req) {
        return workshopInfoMapper.addWorkshopInfo(req) > 0;
    }


    @Override
    public boolean deleteWorkshopInfoById(Integer id) {
        return workshopInfoMapper.deleteWorkshopInfoById(id) > 0;
    }


    @Override
    public boolean updateWorkshopInfoById(Integer id, UpdateWorkshopInfoByIdReq req) {
        return workshopInfoMapper.updateWorkshopInfoById(id, req) > 0;
    }


    @Override
    public WorkshopInfo getWorkshopInfoById(Integer id) {
        return workshopInfoMapper.getWorkshopInfoById(id);
    }


    @Override
    public PageInfo<WorkshopInfo> getWorkshopInfoList(GetWorkshopInfoListReq req) {
        return workshopInfoMapper.getWorkshopInfoList(req);
    }
}
