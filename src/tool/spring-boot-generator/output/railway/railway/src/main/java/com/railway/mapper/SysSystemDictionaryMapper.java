package com.railway.mapper;

import com.railway.pojo.entity.SysSystemDictionary;
import com.railway.pojo.params.UpdateSysSystemDictionaryByDicidParams;
import com.railway.pojo.req.AddSysSystemDictionaryReq;
import com.railway.pojo.req.GetSysSystemDictionaryListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface SysSystemDictionaryMapper {
        
    int addSysSystemDictionary(AddSysSystemDictionaryReq req);
    
        int deleteSysSystemDictionaryByDicid(@Params("dicid") Integer dicid);
    
        int updateSysSystemDictionaryByDicid(UpdateSysSystemDictionaryByDicidParams params);
    
        SysSystemDictionary getSysSystemDictionaryByDicid(@Params("dicid") Integer dicid);
    
        List<SysSystemDictionary> getSysSystemDictionaryList(GetSysSystemDictionaryListReq req);
   
}