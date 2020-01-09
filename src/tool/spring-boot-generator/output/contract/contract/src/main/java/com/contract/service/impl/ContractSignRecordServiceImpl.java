package com.contract.service.impl;

import com.contract.mapper.ContractSignRecordMapper;
import com.contract.pojo.entity.ContractSignRecord;
import com.contract.pojo.entity.ContractSignRecord;
import com.contract.pojo.param.UpdateContractSignRecordByIdParams;
import com.contract.pojo.req.AddContractSignRecordReq;
import com.contract.pojo.req.GetContractSignRecordListReq;
import com.contract.pojo.req.UpdateContractSignRecordByIdReq;
import com.contract.service.ContractSignRecordService;
import com.contract.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContractSignRecordServiceImpl implements ContractSignRecordService {

    @Autowired
    private ContractSignRecordMapper contractSignRecordMapper;

    @Override
    public boolean addContractSignRecord(AddContractSignRecordReq req) {
        return contractSignRecordMapper.addContractSignRecord(req) > 0;
    }

    @Override
    public boolean deleteContractSignRecordById(Integer id) {
        return contractSignRecordMapper.deleteContractSignRecordById(id) > 0;
    }

    @Override
    public boolean updateContractSignRecordById(Integer id, UpdateContractSignRecordByIdReq req) {
        UpdateContractSignRecordByIdParams params = new UpdateContractSignRecordByIdParams(id, req);
        return contractSignRecordMapper.updateContractSignRecordById(params) > 0;
    }

    @Override
    public ContractSignRecord getContractSignRecordById(Integer id) {
        return contractSignRecordMapper.getContractSignRecordById(id);
    }

    @Override
    public PageInfo<ContractSignRecord> getContractSignRecordList(GetContractSignRecordListReq req) {
        return PageHelperUtils.paging(req, () -> contractSignRecordMapper.getContractSignRecordList(req));
    }

}

