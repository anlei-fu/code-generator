package com.contract.service;

import com.contract.pojo.entity.UserSignSeal;
import com.contract.pojo.req.AddUserSignSealReq;
import com.contract.pojo.req.GetUserSignSealListReq;
import com.contract.pojo.req.UpdateUserSignSealByIdReq;
import com.github.pagehelper.PageInfo;

public interface UserSignSealService {

    boolean addUserSignSeal(AddUserSignSealReq req);

    boolean deleteUserSignSealById(Integer id);

    boolean updateUserSignSealById(Integer id, UpdateUserSignSealByIdReq req);

    UserSignSeal getUserSignSealById(Integer id);

    PageInfo<UserSignSeal> getUserSignSealList(GetUserSignSealListReq req);

}
