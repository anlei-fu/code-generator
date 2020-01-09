package com.contract.mapper;

import com.contract.pojo.entity.UserWallet;
import com.contract.pojo.param.UpdateUserWalletByIdParams;
import com.contract.pojo.req.AddUserWalletReq;
import com.contract.pojo.req.GetUserWalletListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface UserWalletMapper {

    int addUserWallet(AddUserWalletReq req);

    int deleteUserWalletById(@Param("id") Integer id);

    int updateUserWalletById(UpdateUserWalletByIdParams params);

    UserWallet getUserWalletById(@Param("id") Integer id);

    List<UserWallet> getUserWalletList(GetUserWalletListReq req);

}
