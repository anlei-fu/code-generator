package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.DamageDealUserMapper;
import com.railway.pojo.entity.DamageDealUser;
import com.railway.pojo.entity.DamageDealUser;
import com.railway.pojo.param.UpdateDamageDealUserByIdParams;
import com.railway.pojo.req.AddDamageDealUserReq;
import com.railway.pojo.req.GetDamageDealUserListReq;
import com.railway.pojo.req.UpdateDamageDealUserByIdReq;
import com.railway.service.DamageDealUserService;
import com.railway.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DamageDealUserServiceImpl implements DamageDealUserService {

    @Autowired
    private DamageDealUserMapper damageDealUserMapper;

    @Override
    public boolean addDamageDealUser(AddDamageDealUserReq req) {
        return damageDealUserMapper.addDamageDealUser(req) > 0;
    }

    @Override
    public boolean deleteDamageDealUserById(Integer id) {
        return damageDealUserMapper.deleteDamageDealUserById(id) > 0;
    }

    @Override
    public boolean updateDamageDealUserById(Integer id, UpdateDamageDealUserByIdReq req) {
        UpdateDamageDealUserByIdParams params = new UpdateDamageDealUserByIdParams(id, req);
        return damageDealUserMapper.updateDamageDealUserById(params) > 0;
    }

    @Override
    public DamageDealUser getDamageDealUserById(Integer id) {
        return damageDealUserMapper.getDamageDealUserById(id);
    }

    @Override
    public PageInfo<DamageDealUser> getDamageDealUserList(GetDamageDealUserListReq req) {
        return PageHelperUtils.paging(req, () -> damageDealUserMapper.getDamageDealUserList(req));
    }

}

