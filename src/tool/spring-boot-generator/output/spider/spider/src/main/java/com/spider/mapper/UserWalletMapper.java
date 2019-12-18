package com.undefined.mapper;

import com.undefined.pojo.entity.UserWallet;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface UserWalletMapper {
        
    int addUserWallet(AddUserWalletReq req);
    
    int deleteUserWalletById(Integer id);
    
    int updateUserWalletById(@Params("id") Integer id, @Params("req") UpdateUserWalletByIdReq req);
    
    UserWallet getUserWalletById(Integer id);
    
    List<UserWallet> getUserWalletList(GetUserWalletListReq req);   
}