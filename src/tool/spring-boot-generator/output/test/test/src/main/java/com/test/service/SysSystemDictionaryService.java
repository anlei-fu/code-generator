package com.undefined.service;

import com.undefined.pojo.entity.SysSystemDictionary;

public interface SysSystemDictionaryService {

    boolean addSysSystemDictionary(AddSysSystemDictionaryReq req);

    boolean deleteSysSystemDictionaryByDicid(Integer dicid);

    boolean updateSysSystemDictionaryByDicid(Integer dicid, UpdateSysSystemDictionaryByDicidReq req);

    SysSystemDictionary getSysSystemDictionaryByDicid(Integer dicid);

    PageInfo<SysSystemDictionary> getSysSystemDictionaryList(GetSysSystemDictionaryListReq req);
}