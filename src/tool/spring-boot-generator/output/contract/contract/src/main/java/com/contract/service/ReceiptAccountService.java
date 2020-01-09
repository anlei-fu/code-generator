package com.contract.service;

import com.contract.pojo.entity.ReceiptAccount;
import com.contract.pojo.req.AddReceiptAccountReq;
import com.contract.pojo.req.GetReceiptAccountListReq;
import com.contract.pojo.req.UpdateReceiptAccountByIdReq;
import com.github.pagehelper.PageInfo;

public interface ReceiptAccountService {

    boolean addReceiptAccount(AddReceiptAccountReq req);

    boolean deleteReceiptAccountById(Integer id);

    boolean updateReceiptAccountById(Integer id, UpdateReceiptAccountByIdReq req);

    ReceiptAccount getReceiptAccountById(Integer id);

    PageInfo<ReceiptAccount> getReceiptAccountList(GetReceiptAccountListReq req);

}
