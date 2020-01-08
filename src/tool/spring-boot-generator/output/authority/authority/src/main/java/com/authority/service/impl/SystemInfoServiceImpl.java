package com.authority.service.impl;

import com.authority.mapper.SystemInfoMapper;
import com.authority.pojo.entity.SystemInfo;
import com.authority.pojo.entity.SystemInfo;
import com.authority.pojo.req.AddSystemInfoReq;
import com.authority.pojo.req.GetSystemInfoListReq;
import com.authority.pojo.req.UpdateSystemInfoByUserAndUserAndUserAndUserAndIdReq;
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
    public boolean addSystemInfo(AddSystemInfoReq req, String user) {
        params params = new AddSystemInfoParams(req, user)
        return systemInfoMapper.addSystemInfo(params) > 0;
    }

    @Override
    public boolean deleteSystemInfoByUserAndUserAndUserAndUserAndId(Integer id) {
        return systemInfoMapper.deleteSystemInfoByUserAndUserAndUserAndUserAndId(id) > 0;
    }

    @Override
    public boolean updateSystemInfoByUserAndUserAndUserAndUserAndId(Integer id, UpdateSystemInfoByUserAndUserAndUserAndUserAndIdReq req) {
        params params = new UpdateSystemInfoByUserAndUserAndUserAndUserAndIdParams(id, req)
        return systemInfoMapper.updateSystemInfoByUserAndUserAndUserAndUserAndId(params) > 0;
    }

    @Override
    public SystemInfo getSystemInfoByUserAndUserAndUserAndUserAndId(Integer id) {
        return systemInfoMapper.getSystemInfoByUserAndUserAndUserAndUserAndId(id);
    }

    @Override
    public PageInfo<SystemInfo> getSystemInfoList(GetSystemInfoListReq req) {
        return PageHelperUtils.page(()=> systemInfoMapper.getSystemInfoList(req));
    }

}
