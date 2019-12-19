package com.test.service;

import com.test.pojo.entity.SysSystemDictionary;
import com.test.pojo.req.AddSysSystemDictionaryReq;
import com.test.pojo.req.GetSysSystemDictionaryListReq;
import com.test.pojo.req.UpdateSysSystemDictionaryByDicidReq;
import com.github.pagehelper.PageInfo;


public interface SysSystemDictionaryService {

    boolean addSysSystemDictionary(AddSysSystemDictionaryReq req);

    boolean deleteSysSystemDictionaryByDicid(Integer dicid);

    boolean updateSysSystemDictionaryByDicid(Integer dicid, UpdateSysSystemDictionaryByDicidReq req);

    SysSystemDictionary getSysSystemDictionaryByDicid(Integer dicid);

    PageInfo<SysSystemDictionary> getSysSystemDictionaryList(GetSysSystemDictionaryListReq req);
}