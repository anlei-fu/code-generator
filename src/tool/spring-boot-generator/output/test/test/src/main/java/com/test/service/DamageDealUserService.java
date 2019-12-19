package com.test.service;

import com.test.pojo.entity.DamageDealUser;
import com.test.pojo.req.AddDamageDealUserReq;
import com.test.pojo.req.GetDamageDealUserListReq;
import com.test.pojo.req.UpdateDamageDealUserByIdReq;
import com.github.pagehelper.PageInfo;


public interface DamageDealUserService {

    boolean addDamageDealUser(AddDamageDealUserReq req);

    boolean deleteDamageDealUserById(Integer id);

    boolean updateDamageDealUserById(Integer id, UpdateDamageDealUserByIdReq req);

    DamageDealUser getDamageDealUserById(Integer id);

    PageInfo<DamageDealUser> getDamageDealUserList(GetDamageDealUserListReq req);
}