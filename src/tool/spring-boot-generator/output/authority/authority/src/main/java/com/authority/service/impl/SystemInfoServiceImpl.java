package com.authority.service.impl;

import com.authority.mapper.SystemInfoMapper;
import com.authority.pojo.entity.SystemInfo;
import com.authority.pojo.entity.SystemInfo;
import com.authority.pojo.req.AddSystemInfoReq;
import com.authority.pojo.req.GetSystemInfoListReq;
import com.authority.pojo.req.UpdateSystemInfoByIdReq;
import com.authority.service.SystemInfoService;
import com.authority.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class SystemInfoServiceImpl implements SystemInfoService {

    @Autowired
    private SystemInfoMapper systemInfoMapper;

    @Override
    public boolean addSystemInfo(AddSystemInfoReq req) {
        return systemInfoMapper.addSystemInfo(req) > 0;
    }

    @Override
    public boolean deleteSystemInfoById(Integer id) {
        return systemInfoMapper.deleteSystemInfoById(id) > 0;
    }

    @Override
    public boolean updateSystemInfoById(Integer id, UpdateSystemInfoByIdReq req) {
        return systemInfoMapper.updateSystemInfoById(id, req) > 0;
    }

    @Override
    public SystemInfo getSystemInfoById(Integer id) {
        return systemInfoMapper.getSystemInfoById(id);
    }

    @Override
    public PageInfo<SystemInfo> getSystemInfoList(GetSystemInfoListReq req) {
        return PageHelperUtils.page(()=> systemInfoMapper.getSystemInfoList(req));
    }

}
