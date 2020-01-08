package com.authority.service.impl;

import com.authority.mapper.SystemRoleInfoMapper;
import com.authority.pojo.entity.SystemRoleInfo;
import com.authority.pojo.entity.SystemRoleInfo;
import com.authority.pojo.req.AddSystemRoleInfoReq;
import com.authority.pojo.req.GetSystemRoleInfoListReq;
import com.authority.pojo.req.UpdateSystemRoleInfoByUserAndUserAndUserAndUserAndIdReq;
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
    public boolean addSystemRoleInfo(AddSystemRoleInfoReq req, String user) {
        params params = new AddSystemRoleInfoParams(req, user)
        return systemRoleInfoMapper.addSystemRoleInfo(params) > 0;
    }

    @Override
    public boolean deleteSystemRoleInfoByUserAndUserAndUserAndUserAndId(Integer id) {
        return systemRoleInfoMapper.deleteSystemRoleInfoByUserAndUserAndUserAndUserAndId(id) > 0;
    }

    @Override
    public boolean updateSystemRoleInfoByUserAndUserAndUserAndUserAndId(Integer id, UpdateSystemRoleInfoByUserAndUserAndUserAndUserAndIdReq req) {
        params params = new UpdateSystemRoleInfoByUserAndUserAndUserAndUserAndIdParams(id, req)
        return systemRoleInfoMapper.updateSystemRoleInfoByUserAndUserAndUserAndUserAndId(params) > 0;
    }

    @Override
    public SystemRoleInfo getSystemRoleInfoByUserAndUserAndUserAndUserAndId(Integer id) {
        return systemRoleInfoMapper.getSystemRoleInfoByUserAndUserAndUserAndUserAndId(id);
    }

    @Override
    public PageInfo<SystemRoleInfo> getSystemRoleInfoList(GetSystemRoleInfoListReq req) {
        return PageHelperUtils.page(()=> systemRoleInfoMapper.getSystemRoleInfoList(req));
    }

}
