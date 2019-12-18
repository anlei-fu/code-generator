package com.undefined.mapper;

import com.undefined.pojo.entity.SysSystemDictionary;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface SysSystemDictionaryMapper {
        
    int addSysSystemDictionary(AddSysSystemDictionaryReq req);
    
    int deleteSysSystemDictionaryByDicid(Integer dicid);
    
    int updateSysSystemDictionaryByDicid(@Params("dicid") Integer dicid, @Params("req") UpdateSysSystemDictionaryByDicidReq req);
    
    SysSystemDictionary getSysSystemDictionaryByDicid(Integer dicid);
    
    List<SysSystemDictionary> getSysSystemDictionaryList(GetSysSystemDictionaryListReq req);   
}