package com.undefined.service;

import com.undefined.pojo.entity.DamageDealUser;

public interface DamageDealUserService {

    boolean addDamageDealUser(AddDamageDealUserReq req);

    boolean deleteDamageDealUserById(Integer id);

    boolean updateDamageDealUserById(Integer id, UpdateDamageDealUserByIdReq req);

    DamageDealUser getDamageDealUserById(Integer id);

    PageInfo<DamageDealUser> getDamageDealUserList(GetDamageDealUserListReq req);
}