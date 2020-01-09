package com.contract.service.impl;

import com.contract.mapper.ContractSignMapper;
import com.contract.pojo.entity.ContractSign;
import com.contract.pojo.entity.ContractSign;
import com.contract.pojo.param.UpdateContractSignByIdParams;
import com.contract.pojo.req.AddContractSignReq;
import com.contract.pojo.req.GetContractSignListReq;
import com.contract.pojo.req.UpdateContractSignByIdReq;
import com.contract.service.ContractSignService;
import com.contract.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ContractSignServiceImpl implements ContractSignService {

    @Autowired
    private ContractSignMapper contractSignMapper;

    @Override
    public boolean addContractSign(AddContractSignReq req) {
        return contractSignMapper.addContractSign(req) > 0;
    }

    @Override
    public boolean deleteContractSignById(Integer id) {
        return contractSignMapper.deleteContractSignById(id) > 0;
    }

    @Override
    public boolean updateContractSignById(Integer id, UpdateContractSignByIdReq req) {
        UpdateContractSignByIdParams params = new UpdateContractSignByIdParams(id, req);
        return contractSignMapper.updateContractSignById(params) > 0;
    }

    @Override
    public ContractSign getContractSignById(Integer id) {
        return contractSignMapper.getContractSignById(id);
    }

    @Override
    public PageInfo<ContractSign> getContractSignList(GetContractSignListReq req) {
        return PageHelperUtils.paging(req, () -> contractSignMapper.getContractSignList(req));
    }

}

