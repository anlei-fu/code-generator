package com.spider.mapper;

import com.spider.pojo.entity.DomainModel;
import com.spider.pojo.params.UpdateDomainModelByIdParams;
import com.spider.pojo.req.AddDomainModelReq;
import com.spider.pojo.req.GetDomainModelListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DomainModelMapper {
        
    int addDomainModel(AddDomainModelReq req);
    
        int deleteDomainModelById(@Params("id") Integer id);
    
        int updateDomainModelById(UpdateDomainModelByIdParams params);
    
        DomainModel getDomainModelById(@Params("id") Integer id);
    
        List<DomainModel> getDomainModelList(GetDomainModelListReq req);
   
}