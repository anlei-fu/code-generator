package com.contractSign.mapper;

import com.undefined.pojo.entity.@name;
import org.mapstruct.Mapper;


@Mapper
public interface @nameMapper {
        
    int addUserSignSeal(@Params("req") AddUserSignSealReq req);
        int deleteUserSignSealById(Integer id);
        int updateUserSignSealById(@Params("id") Integer id, @Params("req") UpdateUserSignSealByIdReq req);
        UserSignSeal getUserSignSealById(Integer id);
        List<UserSignSeal> getUserSignSealList(@Params("req") GetUserSignSealListReq req);
       
}