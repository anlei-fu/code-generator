package com.spider.service;

import com.github.pagehelper.PageInfo;
import com.spider.pojo.entity.DomainModel;
import com.spider.pojo.req.AddDomainModelReq;
import com.spider.pojo.req.GetDomainModelListReq;
import com.spider.pojo.req.UpdateDomainModelByIdReq;


public interface DomainModelService {

    boolean addDomainModel(AddDomainModelReq req);
    
    boolean deleteDomainModelById(Integer id);
    
    boolean updateDomainModelById(Integer id, UpdateDomainModelByIdReq req);
    
    DomainModel getDomainModelById(Integer id);
    
    PageInfo<DomainModel> getDomainModelList(GetDomainModelListReq req);

}