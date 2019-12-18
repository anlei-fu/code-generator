package com.undefined.service.impl;

import com.undefined.mapper.AdminInfoMapper;
import com.undefined.pojo.entity.AdminInfo;
import com.spider.service.AdminInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminInfoServiceImpl implements AdminInfoService {

    @Autowired
    private AdminInfoMapper adminInfoMapper;

    @Override
    public boolean addAdminInfo(AddAdminInfoReq req) {
        return adminInfoMapper.addAdminInfo(req) > 0;
    }


    @Override
    public boolean deleteAdminInfoById(Integer id) {
        return adminInfoMapper.deleteAdminInfoById(id) > 0;
    }


    @Override
    public boolean updateAdminInfoById(Integer id, UpdateAdminInfoByIdReq req) {
        return adminInfoMapper.updateAdminInfoById(id, req) > 0;
    }


    @Override
    public AdminInfo getAdminInfoById(Integer id) {
        return adminInfoMapper.getAdminInfoById(id);
    }


    @Override
    public PageInfo<AdminInfo> getAdminInfoList(GetAdminInfoListReq req) {
        return adminInfoMapper.getAdminInfoList(req);
    }
}
