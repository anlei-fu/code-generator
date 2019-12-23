package com.contractSign.mapper;

import com.undefined.pojo.entity.@name;
import org.mapstruct.Mapper;


@Mapper
public interface @nameMapper {
        
    int addSystemDictionary(@Params("req") AddSystemDictionaryReq req);
        int deleteSystemDictionaryById(Integer id);
        int updateSystemDictionaryById(@Params("id") Integer id, @Params("req") UpdateSystemDictionaryByIdReq req);
        SystemDictionary getSystemDictionaryById(Integer id);
        List<SystemDictionary> getSystemDictionaryList(@Params("req") GetSystemDictionaryListReq req);
       
}