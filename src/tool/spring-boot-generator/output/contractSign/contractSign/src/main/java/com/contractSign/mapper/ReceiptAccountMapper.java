package com.contractSign.mapper;

import com.undefined.pojo.entity.@name;
import org.mapstruct.Mapper;


@Mapper
public interface @nameMapper {
        
    int addReceiptAccount(@Params("req") AddReceiptAccountReq req);
        int deleteReceiptAccountById(Integer id);
        int updateReceiptAccountById(@Params("id") Integer id, @Params("req") UpdateReceiptAccountByIdReq req);
        ReceiptAccount getReceiptAccountById(Integer id);
        List<ReceiptAccount> getReceiptAccountList(@Params("req") GetReceiptAccountListReq req);
       
}