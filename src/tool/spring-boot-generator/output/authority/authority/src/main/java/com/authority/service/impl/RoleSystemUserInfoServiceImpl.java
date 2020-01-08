package com.authority.service.impl;

import com.authority.mapper.RoleSystemUserInfoMapper;
import com.authority.pojo.entity.RoleSystemUserInfo;
import com.authority.pojo.entity.RoleSystemUserInfo;
import com.authority.pojo.req.AddRoleSystemUserInfoReq;
import com.authority.pojo.req.GetRoleSystemUserInfoListReq;
import com.authority.pojo.req.UpdateRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccountReq;
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
    public boolean addRoleSystemUserInfo(AddRoleSystemUserInfoReq req, String user) {
        params params = new AddRoleSystemUserInfoParams(req, user)
        return roleSystemUserInfoMapper.addRoleSystemUserInfo(params) > 0;
    }

    @Override
    public boolean deleteRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccount(String account) {
        return roleSystemUserInfoMapper.deleteRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccount(account) > 0;
    }

    @Override
    public boolean updateRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccount(String account, UpdateRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccountReq req) {
        params params = new UpdateRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccountParams(account, req)
        return roleSystemUserInfoMapper.updateRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccount(params) > 0;
    }

    @Override
    public RoleSystemUserInfo getRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccount(String account) {
        return roleSystemUserInfoMapper.getRoleSystemUserInfoByUserAndUserAndUserAndUserAndAccount(account);
    }

    @Override
    public PageInfo<RoleSystemUserInfo> getRoleSystemUserInfoList(GetRoleSystemUserInfoListReq req) {
        return PageHelperUtils.page(()=> roleSystemUserInfoMapper.getRoleSystemUserInfoList(req));
    }

}
