package com.undefined.service;

import com.undefined.pojo.entity.DivisionUser;

public interface DivisionUserService {

    boolean addDivisionUser(AddDivisionUserReq req);

    boolean deleteDivisionUserById(Integer id);

    boolean updateDivisionUserById(Integer id, UpdateDivisionUserByIdReq req);

    DivisionUser getDivisionUserById(Integer id);

    PageInfo<DivisionUser> getDivisionUserList(GetDivisionUserListReq req);
}