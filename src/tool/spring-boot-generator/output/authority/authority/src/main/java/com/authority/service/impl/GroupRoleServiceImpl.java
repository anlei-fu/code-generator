package com.authority.service.impl;

import com.authority.mapper.GroupRoleMapper;
import com.authority.pojo.entity.GroupRole;
import com.authority.pojo.entity.GroupRole;
import com.authority.pojo.req.AddGroupRoleReq;
import com.authority.pojo.req.GetGroupRoleListReq;
import com.authority.pojo.req.UpdateGroupRoleByIdReq;
import com.authority.service.GroupRoleService;
import com.authority.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class GroupRoleServiceImpl implements GroupRoleService {

    @Autowired
    private GroupRoleMapper groupRoleMapper;

    @Override
    public boolean addGroupRole(AddGroupRoleReq req) {
        return groupRoleMapper.addGroupRole(req) > 0;
    }

    @Override
    public boolean deleteGroupRoleById(Integer id) {
        return groupRoleMapper.deleteGroupRoleById(id) > 0;
    }

    @Override
    public boolean updateGroupRoleById(Integer id, UpdateGroupRoleByIdReq req) {
        return groupRoleMapper.updateGroupRoleById(id, req) > 0;
    }

    @Override
    public GroupRole getGroupRoleById(Integer id) {
        return groupRoleMapper.getGroupRoleById(id);
    }

    @Override
    public PageInfo<GroupRole> getGroupRoleList(GetGroupRoleListReq req) {
        return PageHelperUtils.page(()=> groupRoleMapper.getGroupRoleList(req));
    }

}
