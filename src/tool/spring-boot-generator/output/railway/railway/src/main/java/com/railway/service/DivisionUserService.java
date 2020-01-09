package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DivisionUser;
import com.railway.pojo.req.AddDivisionUserReq;
import com.railway.pojo.req.GetDivisionUserListReq;
import com.railway.pojo.req.UpdateDivisionUserByIdReq;

public interface DivisionUserService {

    boolean addDivisionUser(AddDivisionUserReq req);

    boolean deleteDivisionUserById(Integer id);

    boolean updateDivisionUserById(Integer id, UpdateDivisionUserByIdReq req);

    DivisionUser getDivisionUserById(Integer id);

    PageInfo<DivisionUser> getDivisionUserList(GetDivisionUserListReq req);

}
