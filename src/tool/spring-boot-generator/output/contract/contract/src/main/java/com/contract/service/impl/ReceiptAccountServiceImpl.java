package com.contract.service.impl;

import com.contract.mapper.ReceiptAccountMapper;
import com.contract.pojo.entity.ReceiptAccount;
import com.contract.pojo.entity.ReceiptAccount;
import com.contract.pojo.param.UpdateReceiptAccountByIdParams;
import com.contract.pojo.req.AddReceiptAccountReq;
import com.contract.pojo.req.GetReceiptAccountListReq;
import com.contract.pojo.req.UpdateReceiptAccountByIdReq;
import com.contract.service.ReceiptAccountService;
import com.contract.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ReceiptAccountServiceImpl implements ReceiptAccountService {

    @Autowired
    private ReceiptAccountMapper receiptAccountMapper;

    @Override
    public boolean addReceiptAccount(AddReceiptAccountReq req) {
        return receiptAccountMapper.addReceiptAccount(req) > 0;
    }

    @Override
    public boolean deleteReceiptAccountById(Integer id) {
        return receiptAccountMapper.deleteReceiptAccountById(id) > 0;
    }

    @Override
    public boolean updateReceiptAccountById(Integer id, UpdateReceiptAccountByIdReq req) {
        UpdateReceiptAccountByIdParams params = new UpdateReceiptAccountByIdParams(id, req);
        return receiptAccountMapper.updateReceiptAccountById(params) > 0;
    }

    @Override
    public ReceiptAccount getReceiptAccountById(Integer id) {
        return receiptAccountMapper.getReceiptAccountById(id);
    }

    @Override
    public PageInfo<ReceiptAccount> getReceiptAccountList(GetReceiptAccountListReq req) {
        return PageHelperUtils.paging(req, () -> receiptAccountMapper.getReceiptAccountList(req));
    }

}

