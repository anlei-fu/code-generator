package com.authority.service.impl;

import com.authority.mapper.SystemRoleInfoMapper;
import com.authority.pojo.entity.SystemRoleInfo;
import com.authority.pojo.entity.SystemRoleInfo;
import com.authority.pojo.req.AddSystemRoleInfoReq;
import com.authority.pojo.req.GetSystemRoleInfoListReq;
import com.authority.pojo.req.UpdateSystemRoleInfoByIdReq;
import com.authority.service.SystemRoleInfoService;
import com.authority.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class SystemRoleInfoServiceImpl implements SystemRoleInfoService {

    @Autowired
    private SystemRoleInfoMapper systemRoleInfoMapper;

    @Override
    public boolean addSystemRoleInfo(AddSystemRoleInfoReq req) {
        return systemRoleInfoMapper.addSystemRoleInfo(req) > 0;
    }

    @Override
    public boolean deleteSystemRoleInfoById(Integer id) {
        return systemRoleInfoMapper.deleteSystemRoleInfoById(id) > 0;
    }

    @Override
    public boolean updateSystemRoleInfoById(Integer id, UpdateSystemRoleInfoByIdReq req) {
        return systemRoleInfoMapper.updateSystemRoleInfoById(id, req) > 0;
    }

    @Override
    public SystemRoleInfo getSystemRoleInfoById(Integer id) {
        return systemRoleInfoMapper.getSystemRoleInfoById(id);
    }

    @Override
    public PageInfo<SystemRoleInfo> getSystemRoleInfoList(GetSystemRoleInfoListReq req) {
        return PageHelperUtils.page(()=> systemRoleInfoMapper.getSystemRoleInfoList(req));
    }

}
