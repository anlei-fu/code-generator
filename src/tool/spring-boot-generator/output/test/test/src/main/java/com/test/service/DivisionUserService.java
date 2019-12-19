package com.test.service;

import com.test.pojo.entity.DivisionUser;
import com.test.pojo.req.AddDivisionUserReq;
import com.test.pojo.req.GetDivisionUserListReq;
import com.test.pojo.req.UpdateDivisionUserByIdReq;
import com.github.pagehelper.PageInfo;


public interface DivisionUserService {

    boolean addDivisionUser(AddDivisionUserReq req);

    boolean deleteDivisionUserById(Integer id);

    boolean updateDivisionUserById(Integer id, UpdateDivisionUserByIdReq req);

    DivisionUser getDivisionUserById(Integer id);

    PageInfo<DivisionUser> getDivisionUserList(GetDivisionUserListReq req);
}