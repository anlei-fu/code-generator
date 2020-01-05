package com.authority.service.impl;

import com.authority.mapper.RoleSystemUserInfoMapper;
import com.authority.pojo.entity.RoleSystemUserInfo;
import com.authority.pojo.entity.RoleSystemUserInfo;
import com.authority.pojo.req.AddRoleSystemUserInfoReq;
import com.authority.pojo.req.GetRoleSystemUserInfoListReq;
import com.authority.pojo.req.UpdateRoleSystemUserInfoByAccountReq;
import com.authority.service.RoleSystemUserInfoService;
import com.authority.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class RoleSystemUserInfoServiceImpl implements RoleSystemUserInfoService {

    @Autowired
    private RoleSystemUserInfoMapper roleSystemUserInfoMapper;

    @Override
    public boolean addRoleSystemUserInfo(AddRoleSystemUserInfoReq req) {
        return roleSystemUserInfoMapper.addRoleSystemUserInfo(req) > 0;
    }

    @Override
    public boolean deleteRoleSystemUserInfoByAccount(Integer account) {
        return roleSystemUserInfoMapper.deleteRoleSystemUserInfoByAccount(account) > 0;
    }

    @Override
    public boolean updateRoleSystemUserInfoByAccount(Integer account, UpdateRoleSystemUserInfoByAccountReq req) {
        return roleSystemUserInfoMapper.updateRoleSystemUserInfoByAccount(account, req) > 0;
    }

    @Override
    public RoleSystemUserInfo getRoleSystemUserInfoByAccount(Integer account) {
        return roleSystemUserInfoMapper.getRoleSystemUserInfoByAccount(account);
    }

    @Override
    public PageInfo<RoleSystemUserInfo> getRoleSystemUserInfoList(GetRoleSystemUserInfoListReq req) {
        return roleSystemUserInfoMapper.getRoleSystemUserInfoList(req);
    }

}
