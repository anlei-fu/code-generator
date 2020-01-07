package com.spider.service.impl;

import com.github.pagehelper.PageInfo;
import com.spider.mapper.AdminInfoMapper;
import com.spider.pojo.entity.AdminInfo;
import com.spider.pojo.entity.AdminInfo;
import com.spider.pojo.req.AddAdminInfoReq;
import com.spider.pojo.req.GetAdminInfoListReq;
import com.spider.pojo.req.UpdateAdminInfoByIdReq;
import com.spider.service.AdminInfoService;
import com.spider.utils.PageHelperUtils;
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
        return PageHelperUtils.page(()=> adminInfoMapper.getAdminInfoList(req));
    }

}
