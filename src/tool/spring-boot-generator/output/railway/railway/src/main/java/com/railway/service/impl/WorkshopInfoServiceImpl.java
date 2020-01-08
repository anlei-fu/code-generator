package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.WorkshopInfoMapper;
import com.railway.pojo.entity.WorkshopInfo;
import com.railway.pojo.entity.WorkshopInfo;
import com.railway.pojo.req.AddWorkshopInfoReq;
import com.railway.pojo.req.GetWorkshopInfoListReq;
import com.railway.pojo.req.UpdateWorkshopInfoByIdReq;
import com.railway.service.WorkshopInfoService;
import com.railway.utils.PageHelperUtils;
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
        params params = new UpdateWorkshopInfoByIdParams(id, req)
        return workshopInfoMapper.updateWorkshopInfoById(params) > 0;
    }

    @Override
    public WorkshopInfo getWorkshopInfoById(Integer id) {
        return workshopInfoMapper.getWorkshopInfoById(id);
    }

    @Override
    public PageInfo<WorkshopInfo> getWorkshopInfoList(GetWorkshopInfoListReq req) {
        return PageHelperUtils.page(()=> workshopInfoMapper.getWorkshopInfoList(req));
    }

}
