package com.authority.service.impl;

import com.authority.mapper.UserRoleMapper;
import com.authority.pojo.entity.UserRole;
import com.authority.pojo.entity.UserRole;
import com.authority.pojo.req.AddUserRoleReq;
import com.authority.pojo.req.GetUserRoleListReq;
import com.authority.pojo.req.UpdateUserRoleByIdReq;
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
    public boolean addUserRole(AddUserRoleReq req) {
        return userRoleMapper.addUserRole(req) > 0;
    }

    @Override
    public boolean deleteUserRoleById(Integer id) {
        return userRoleMapper.deleteUserRoleById(id) > 0;
    }

    @Override
    public boolean updateUserRoleById(Integer id, UpdateUserRoleByIdReq req) {
        return userRoleMapper.updateUserRoleById(id, req) > 0;
    }

    @Override
    public UserRole getUserRoleById(Integer id) {
        return userRoleMapper.getUserRoleById(id);
    }

    @Override
    public PageInfo<UserRole> getUserRoleList(GetUserRoleListReq req) {
        return PageHelperUtils.page(()=> userRoleMapper.getUserRoleList(req));
    }

}
