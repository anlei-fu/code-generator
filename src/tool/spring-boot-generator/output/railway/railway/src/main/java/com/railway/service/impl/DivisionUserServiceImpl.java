package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.DivisionUserMapper;
import com.railway.pojo.entity.DivisionUser;
import com.railway.pojo.entity.DivisionUser;
import com.railway.pojo.req.AddDivisionUserReq;
import com.railway.pojo.req.GetDivisionUserListReq;
import com.railway.pojo.req.UpdateDivisionUserByIdReq;
import com.railway.service.DivisionUserService;
import com.railway.utils.PageHelperUtils;
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
        params params = new UpdateDivisionUserByIdParams(id, req)
        return divisionUserMapper.updateDivisionUserById(params) > 0;
    }

    @Override
    public DivisionUser getDivisionUserById(Integer id) {
        return divisionUserMapper.getDivisionUserById(id);
    }

    @Override
    public PageInfo<DivisionUser> getDivisionUserList(GetDivisionUserListReq req) {
        return PageHelperUtils.page(()=> divisionUserMapper.getDivisionUserList(req));
    }

}
