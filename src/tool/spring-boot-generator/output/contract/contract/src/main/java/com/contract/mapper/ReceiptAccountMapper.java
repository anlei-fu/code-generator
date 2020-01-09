package com.contract.mapper;

import com.contract.pojo.entity.ReceiptAccount;
import com.contract.pojo.param.UpdateReceiptAccountByIdParams;
import com.contract.pojo.req.AddReceiptAccountReq;
import com.contract.pojo.req.GetReceiptAccountListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface ReceiptAccountMapper {

    int addReceiptAccount(AddReceiptAccountReq req);

    int deleteReceiptAccountById(@Param("id") Integer id);

    int updateReceiptAccountById(UpdateReceiptAccountByIdParams params);

    ReceiptAccount getReceiptAccountById(@Param("id") Integer id);

    List<ReceiptAccount> getReceiptAccountList(GetReceiptAccountListReq req);

}
