package com.spider.mapper;

import com.spider.pojo.entity.UserWallet;
import com.spider.pojo.req.AddUserWalletReq;
import com.spider.pojo.req.GetUserWalletListReq;
import com.spider.pojo.req.UpdateUserWalletByIdReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface UserWalletMapper {
        
    int addUserWallet(AddUserWalletReq req);
    
        int deleteUserWalletById(@Params("id") Integer id);
    
        int updateUserWalletById(@Params("id") Integer id, @Params("req") UpdateUserWalletByIdReq req);
    
        UserWallet getUserWalletById(@Params("id") Integer id);
    
        List<UserWallet> getUserWalletList(GetUserWalletListReq req);
   
}