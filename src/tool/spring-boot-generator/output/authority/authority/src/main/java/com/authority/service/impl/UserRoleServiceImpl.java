package com.authority.service.impl;

import com.authority.mapper.UserRoleMapper;
import com.authority.pojo.entity.UserRole;
import com.authority.pojo.entity.UserRole;
import com.authority.pojo.req.AddUserRoleReq;
import com.authority.pojo.req.GetUserRoleListReq;
import com.authority.pojo.req.UpdateUserRoleByUserAndUserAndUserAndUserAndIdReq;
import com.authority.service.UserRoleService;
import com.authority.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class UserRoleServiceImpl implements UserRoleService {

    @Autowired
    private UserRoleMapper userRoleMapper;

    @Override
    public boolean addUserRole(AddUserRoleReq req, String user) {
        params params = new AddUserRoleParams(req, user)
        return userRoleMapper.addUserRole(params) > 0;
    }

    @Override
    public boolean deleteUserRoleByUserAndUserAndUserAndUserAndId(Integer id) {
        return userRoleMapper.deleteUserRoleByUserAndUserAndUserAndUserAndId(id) > 0;
    }

    @Override
    public boolean updateUserRoleByUserAndUserAndUserAndUserAndId(Integer id, UpdateUserRoleByUserAndUserAndUserAndUserAndIdReq req) {
        params params = new UpdateUserRoleByUserAndUserAndUserAndUserAndIdParams(id, req)
        return userRoleMapper.updateUserRoleByUserAndUserAndUserAndUserAndId(params) > 0;
    }

    @Override
    public UserRole getUserRoleByUserAndUserAndUserAndUserAndId(Integer id) {
        return userRoleMapper.getUserRoleByUserAndUserAndUserAndUserAndId(id);
    }

    @Override
    public PageInfo<UserRole> getUserRoleList(GetUserRoleListReq req) {
        return PageHelperUtils.page(()=> userRoleMapper.getUserRoleList(req));
    }

}
