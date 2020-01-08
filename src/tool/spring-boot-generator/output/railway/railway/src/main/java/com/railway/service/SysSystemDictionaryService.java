package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.SysSystemDictionary;
import com.railway.pojo.req.AddSysSystemDictionaryReq;
import com.railway.pojo.req.GetSysSystemDictionaryListReq;
import com.railway.pojo.req.UpdateSysSystemDictionaryByDicidReq;


public interface SysSystemDictionaryService {

    boolean addSysSystemDictionary(AddSysSystemDictionaryReq req);
    
    boolean deleteSysSystemDictionaryByDicid(Integer dicid);
    
    boolean updateSysSystemDictionaryByDicid(Integer dicid, UpdateSysSystemDictionaryByDicidReq req);
    
    SysSystemDictionary getSysSystemDictionaryByDicid(Integer dicid);
    
    PageInfo<SysSystemDictionary> getSysSystemDictionaryList(GetSysSystemDictionaryListReq req);

}