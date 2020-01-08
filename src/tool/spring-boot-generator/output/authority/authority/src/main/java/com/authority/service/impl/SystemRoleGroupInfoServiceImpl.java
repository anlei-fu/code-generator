package com.authority.service.impl;

import com.authority.mapper.SystemRoleGroupInfoMapper;
import com.authority.pojo.entity.SystemRoleGroupInfo;
import com.authority.pojo.entity.SystemRoleGroupInfo;
import com.authority.pojo.req.AddSystemRoleGroupInfoReq;
import com.authority.pojo.req.GetSystemRoleGroupInfoListReq;
import com.authority.pojo.req.UpdateSystemRoleGroupInfoByUserAndUserAndUserAndUserAndIdReq;
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
    public boolean addSystemRoleGroupInfo(AddSystemRoleGroupInfoReq req, String user) {
        params params = new AddSystemRoleGroupInfoParams(req, user)
        return systemRoleGroupInfoMapper.addSystemRoleGroupInfo(params) > 0;
    }

    @Override
    public boolean deleteSystemRoleGroupInfoByUserAndUserAndUserAndUserAndId(Integer id) {
        return systemRoleGroupInfoMapper.deleteSystemRoleGroupInfoByUserAndUserAndUserAndUserAndId(id) > 0;
    }

    @Override
    public boolean updateSystemRoleGroupInfoByUserAndUserAndUserAndUserAndId(Integer id, UpdateSystemRoleGroupInfoByUserAndUserAndUserAndUserAndIdReq req) {
        params params = new UpdateSystemRoleGroupInfoByUserAndUserAndUserAndUserAndIdParams(id, req)
        return systemRoleGroupInfoMapper.updateSystemRoleGroupInfoByUserAndUserAndUserAndUserAndId(params) > 0;
    }

    @Override
    public SystemRoleGroupInfo getSystemRoleGroupInfoByUserAndUserAndUserAndUserAndId(Integer id) {
        return systemRoleGroupInfoMapper.getSystemRoleGroupInfoByUserAndUserAndUserAndUserAndId(id);
    }

    @Override
    public PageInfo<SystemRoleGroupInfo> getSystemRoleGroupInfoList(GetSystemRoleGroupInfoListReq req) {
        return PageHelperUtils.page(()=> systemRoleGroupInfoMapper.getSystemRoleGroupInfoList(req));
    }

}
