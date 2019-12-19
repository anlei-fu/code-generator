package com.test.mapper;

import com.test.pojo.req.AddSysSystemDictionaryReq;
import com.test.pojo.req.GetSysSystemDictionaryListReq;
import com.test.pojo.req.UpdateSysSystemDictionaryByDicidReq;
import com.test.pojo.entity.SysSystemDictionary;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface SysSystemDictionaryMapper {
        
    int addSysSystemDictionary(AddSysSystemDictionaryReq req);
    
    int deleteSysSystemDictionaryByDicid(Integer dicid);
    
    int updateSysSystemDictionaryByDicid(@Params("dicid") Integer dicid, @Params("req") UpdateSysSystemDictionaryByDicidReq req);
    
    SysSystemDictionary getSysSystemDictionaryByDicid(Integer dicid);
    
    List<SysSystemDictionary> getSysSystemDictionaryList(GetSysSystemDictionaryListReq req);   
}