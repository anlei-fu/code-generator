package com.test.service.impl;

import com.test.pojo.req.AddDivisionUserReq;
import com.test.pojo.req.GetDivisionUserListReq;
import com.test.pojo.req.UpdateDivisionUserByIdReq;
import com.github.pagehelper.PageInfo;
import com.test.mapper.DivisionUserMapper;
import com.test.pojo.entity.DivisionUser;
import com.test.service.DivisionUserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class DivisionUserServiceImpl implements DivisionUserService {

    @Autowired
    private DivisionUserMapper divisionUserMapper;

    @Override
    public boolean addDivisionUser(AddDivisionUserReq req) {
        return divisionUserMapper.addDivisionUser(req) > 0;
    }


    @Override
    public boolean deleteDivisionUserById(Integer id) {
        return divisionUserMapper.deleteDivisionUserById(id) > 0;
    }


    @Override
    public boolean updateDivisionUserById(Integer id, UpdateDivisionUserByIdReq req) {
        return divisionUserMapper.updateDivisionUserById(id, req) > 0;
    }


    @Override
    public DivisionUser getDivisionUserById(Integer id) {
        return divisionUserMapper.getDivisionUserById(id);
    }


    @Override
    public PageInfo<DivisionUser> getDivisionUserList(GetDivisionUserListReq req) {
        return divisionUserMapper.getDivisionUserList(req);
    }
}
