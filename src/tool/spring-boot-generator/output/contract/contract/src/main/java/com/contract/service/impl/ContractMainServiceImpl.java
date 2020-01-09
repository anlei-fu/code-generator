package com.contract.service.impl;

import com.contract.mapper.ContractMainMapper;
import com.contract.pojo.entity.ContractMain;
import com.contract.pojo.entity.ContractMain;
import com.contract.pojo.param.UpdateContractMainByIdParams;
import com.contract.pojo.req.AddContractMainReq;
import com.contract.pojo.req.GetContractMainListReq;
import com.contract.pojo.req.UpdateContractMainByIdReq;
import com.contract.service.ContractMainService;
import com.contract.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContractMainServiceImpl implements ContractMainService {

    @Autowired
    private ContractMainMapper contractMainMapper;

    @Override
    public boolean addContractMain(AddContractMainReq req) {
        return contractMainMapper.addContractMain(req) > 0;
    }

    @Override
    public boolean deleteContractMainById(Integer id) {
        return contractMainMapper.deleteContractMainById(id) > 0;
    }

    @Override
    public boolean updateContractMainById(Integer id, UpdateContractMainByIdReq req) {
        UpdateContractMainByIdParams params = new UpdateContractMainByIdParams(id, req);
        return contractMainMapper.updateContractMainById(params) > 0;
    }

    @Override
    public ContractMain getContractMainById(Integer id) {
        return contractMainMapper.getContractMainById(id);
    }

    @Override
    public PageInfo<ContractMain> getContractMainList(GetContractMainListReq req) {
        return PageHelperUtils.paging(req, () -> contractMainMapper.getContractMainList(req));
    }

}

