package com.authority.service.impl;

import com.authority.mapper.SystemRoleGroupInfoMapper;
import com.authority.pojo.entity.SystemRoleGroupInfo;
import com.authority.pojo.entity.SystemRoleGroupInfo;
import com.authority.pojo.req.AddSystemRoleGroupInfoReq;
import com.authority.pojo.req.GetSystemRoleGroupInfoListReq;
import com.authority.pojo.req.UpdateSystemRoleGroupInfoByIdReq;
import com.authority.service.SystemRoleGroupInfoService;
import com.authority.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class SystemRoleGroupInfoServiceImpl implements SystemRoleGroupInfoService {

    @Autowired
    private SystemRoleGroupInfoMapper systemRoleGroupInfoMapper;

    @Override
    public boolean addSystemRoleGroupInfo(AddSystemRoleGroupInfoReq req) {
        return systemRoleGroupInfoMapper.addSystemRoleGroupInfo(req) > 0;
    }

    @Override
    public boolean deleteSystemRoleGroupInfoById(Integer id) {
        return systemRoleGroupInfoMapper.deleteSystemRoleGroupInfoById(id) > 0;
    }

    @Override
    public boolean updateSystemRoleGroupInfoById(Integer id, UpdateSystemRoleGroupInfoByIdReq req) {
        return systemRoleGroupInfoMapper.updateSystemRoleGroupInfoById(id, req) > 0;
    }

    @Override
    public SystemRoleGroupInfo getSystemRoleGroupInfoById(Integer id) {
        return systemRoleGroupInfoMapper.getSystemRoleGroupInfoById(id);
    }

    @Override
    public PageInfo<SystemRoleGroupInfo> getSystemRoleGroupInfoList(GetSystemRoleGroupInfoListReq req) {
        return PageHelperUtils.page(()=> systemRoleGroupInfoMapper.getSystemRoleGroupInfoList(req));
    }

}
