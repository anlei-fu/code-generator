package com.contractSign.mapper;

import com.undefined.pojo.entity.@name;
import org.mapstruct.Mapper;


@Mapper
public interface @nameMapper {
        
    int addUserWallet(@Params("req") AddUserWalletReq req);
        int deleteUserWalletById(Integer id);
        int updateUserWalletById(@Params("id") Integer id, @Params("req") UpdateUserWalletByIdReq req);
        UserWallet getUserWalletById(Integer id);
        List<UserWallet> getUserWalletList(@Params("req") GetUserWalletListReq req);
       
}