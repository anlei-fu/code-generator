package com.undefined.service.impl;

import com.undefined.mapper.DomainModelMapper;
import com.undefined.pojo.entity.DomainModel;
import com.spider.service.DomainModelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DomainModelServiceImpl implements DomainModelService {

    @Autowired
    private DomainModelMapper domainModelMapper;

    @Override
    public boolean addDomainModel(AddDomainModelReq req) {
        return domainModelMapper.addDomainModel(req) > 0;
    }


    @Override
    public boolean deleteDomainModelById(Integer id) {
        return domainModelMapper.deleteDomainModelById(id) > 0;
    }


    @Override
    public boolean updateDomainModelById(Integer id, UpdateDomainModelByIdReq req) {
        return domainModelMapper.updateDomainModelById(id, req) > 0;
    }


    @Override
    public DomainModel getDomainModelById(Integer id) {
        return domainModelMapper.getDomainModelById(id);
    }


    @Override
    public PageInfo<DomainModel> getDomainModelList(GetDomainModelListReq req) {
        return domainModelMapper.getDomainModelList(req);
    }
}
