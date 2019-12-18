package com.undefined.service;

import com.undefined.pojo.entity.DomainModel;

public interface DomainModelService {

    boolean addDomainModel(AddDomainModelReq req);

    boolean deleteDomainModelById(Integer id);

    boolean updateDomainModelById(Integer id, UpdateDomainModelByIdReq req);

    DomainModel getDomainModelById(Integer id);

    PageInfo<DomainModel> getDomainModelList(GetDomainModelListReq req);
}