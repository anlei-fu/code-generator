package com.undefined.service.impl;

import com.undefined.mapper.DamageDealUserMapper;
import com.undefined.pojo.entity.DamageDealUser;
import com.spider.service.DamageDealUserService;
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
        return damageDealUserMapper.updateDamageDealUserById(id, req) > 0;
    }


    @Override
    public DamageDealUser getDamageDealUserById(Integer id) {
        return damageDealUserMapper.getDamageDealUserById(id);
    }


    @Override
    public PageInfo<DamageDealUser> getDamageDealUserList(GetDamageDealUserListReq req) {
        return damageDealUserMapper.getDamageDealUserList(req);
    }
}
