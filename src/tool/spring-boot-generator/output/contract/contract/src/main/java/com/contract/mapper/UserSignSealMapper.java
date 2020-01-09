package com.contract.mapper;

import com.contract.pojo.entity.UserSignSeal;
import com.contract.pojo.param.UpdateUserSignSealByIdParams;
import com.contract.pojo.req.AddUserSignSealReq;
import com.contract.pojo.req.GetUserSignSealListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface UserSignSealMapper {

    int addUserSignSeal(AddUserSignSealReq req);

    int deleteUserSignSealById(@Param("id") Integer id);

    int updateUserSignSealById(UpdateUserSignSealByIdParams params);

    UserSignSeal getUserSignSealById(@Param("id") Integer id);

    List<UserSignSeal> getUserSignSealList(GetUserSignSealListReq req);

}
