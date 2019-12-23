package com.contractSign.service;



public interface @nameService {

    boolean addReceiptAccount(AddReceiptAccountReq req);
    boolean deleteReceiptAccountById(Integer id);
    boolean updateReceiptAccountById(Integer id, UpdateReceiptAccountByIdReq req);
    ReceiptAccount getReceiptAccountById(Integer id);
    PageInfo<ReceiptAccount> getReceiptAccountList(GetReceiptAccountListReq req);

}