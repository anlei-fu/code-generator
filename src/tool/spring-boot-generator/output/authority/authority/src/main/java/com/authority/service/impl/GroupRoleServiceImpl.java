package com.authority.service.impl;

import com.authority.mapper.GroupRoleMapper;
import com.authority.pojo.entity.GroupRole;
import com.authority.pojo.entity.GroupRole;
import com.authority.pojo.req.AddGroupRoleReq;
import com.authority.pojo.req.GetGroupRoleListReq;
import com.authority.pojo.req.UpdateGroupRoleByUserAndUserAndUserAndUserAndIdReq;
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
    public boolean addGroupRole(AddGroupRoleReq req, String user) {
        params params = new AddGroupRoleParams(req, user)
        return groupRoleMapper.addGroupRole(params) > 0;
    }

    @Override
    public boolean deleteGroupRoleByUserAndUserAndUserAndUserAndId(Integer id) {
        return groupRoleMapper.deleteGroupRoleByUserAndUserAndUserAndUserAndId(id) > 0;
    }

    @Override
    public boolean updateGroupRoleByUserAndUserAndUserAndUserAndId(Integer id, UpdateGroupRoleByUserAndUserAndUserAndUserAndIdReq req) {
        params params = new UpdateGroupRoleByUserAndUserAndUserAndUserAndIdParams(id, req)
        return groupRoleMapper.updateGroupRoleByUserAndUserAndUserAndUserAndId(params) > 0;
    }

    @Override
    public GroupRole getGroupRoleByUserAndUserAndUserAndUserAndId(Integer id) {
        return groupRoleMapper.getGroupRoleByUserAndUserAndUserAndUserAndId(id);
    }

    @Override
    public PageInfo<GroupRole> getGroupRoleList(GetGroupRoleListReq req) {
        return PageHelperUtils.page(()=> groupRoleMapper.getGroupRoleList(req));
    }

}
