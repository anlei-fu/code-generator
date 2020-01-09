package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.DamageDealUser;
import com.railway.pojo.req.AddDamageDealUserReq;
import com.railway.pojo.req.GetDamageDealUserListReq;
import com.railway.pojo.req.UpdateDamageDealUserByIdReq;

public interface DamageDealUserService {

    boolean addDamageDealUser(AddDamageDealUserReq req);

    boolean deleteDamageDealUserById(Integer id);

    boolean updateDamageDealUserById(Integer id, UpdateDamageDealUserByIdReq req);

    DamageDealUser getDamageDealUserById(Integer id);

    PageInfo<DamageDealUser> getDamageDealUserList(GetDamageDealUserListReq req);

}
