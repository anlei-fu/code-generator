package com.undefined.mapper;

import com.undefined.pojo.entity.DomainModel;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DomainModelMapper {
        
    int addDomainModel(AddDomainModelReq req);
    
    int deleteDomainModelById(Integer id);
    
    int updateDomainModelById(@Params("id") Integer id, @Params("req") UpdateDomainModelByIdReq req);
    
    DomainModel getDomainModelById(Integer id);
    
    List<DomainModel> getDomainModelList(GetDomainModelListReq req);   
}