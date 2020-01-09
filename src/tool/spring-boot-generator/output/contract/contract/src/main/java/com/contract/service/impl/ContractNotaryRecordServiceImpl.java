package com.contract.service.impl;

import com.contract.mapper.ContractNotaryRecordMapper;
import com.contract.pojo.entity.ContractNotaryRecord;
import com.contract.pojo.entity.ContractNotaryRecord;
import com.contract.pojo.param.UpdateContractNotaryRecordByIdParams;
import com.contract.pojo.req.AddContractNotaryRecordReq;
import com.contract.pojo.req.GetContractNotaryRecordListReq;
import com.contract.pojo.req.UpdateContractNotaryRecordByIdReq;
import com.contract.service.ContractNotaryRecordService;
import com.contract.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContractNotaryRecordServiceImpl implements ContractNotaryRecordService {

    @Autowired
    private ContractNotaryRecordMapper contractNotaryRecordMapper;

    @Override
    public boolean addContractNotaryRecord(AddContractNotaryRecordReq req) {
        return contractNotaryRecordMapper.addContractNotaryRecord(req) > 0;
    }

    @Override
    public boolean deleteContractNotaryRecordById(Integer id) {
        return contractNotaryRecordMapper.deleteContractNotaryRecordById(id) > 0;
    }

    @Override
    public boolean updateContractNotaryRecordById(Integer id, UpdateContractNotaryRecordByIdReq req) {
        UpdateContractNotaryRecordByIdParams params = new UpdateContractNotaryRecordByIdParams(id, req);
        return contractNotaryRecordMapper.updateContractNotaryRecordById(params) > 0;
    }

    @Override
    public ContractNotaryRecord getContractNotaryRecordById(Integer id) {
        return contractNotaryRecordMapper.getContractNotaryRecordById(id);
    }

    @Override
    public PageInfo<ContractNotaryRecord> getContractNotaryRecordList(GetContractNotaryRecordListReq req) {
        return PageHelperUtils.paging(req, () -> contractNotaryRecordMapper.getContractNotaryRecordList(req));
    }

}

