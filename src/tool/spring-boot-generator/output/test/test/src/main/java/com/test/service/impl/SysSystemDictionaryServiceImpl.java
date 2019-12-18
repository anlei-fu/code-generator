package com.undefined.service.impl;

import com.undefined.mapper.SysSystemDictionaryMapper;
import com.undefined.pojo.entity.SysSystemDictionary;
import com.spider.service.SysSystemDictionaryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SysSystemDictionaryServiceImpl implements SysSystemDictionaryService {

    @Autowired
    private SysSystemDictionaryMapper sysSystemDictionaryMapper;

    @Override
    public boolean addSysSystemDictionary(AddSysSystemDictionaryReq req) {
        return sysSystemDictionaryMapper.addSysSystemDictionary(req) > 0;
    }


    @Override
    public boolean deleteSysSystemDictionaryByDicid(Integer dicid) {
        return sysSystemDictionaryMapper.deleteSysSystemDictionaryByDicid(dicid) > 0;
    }


    @Override
    public boolean updateSysSystemDictionaryByDicid(Integer dicid, UpdateSysSystemDictionaryByDicidReq req) {
        return sysSystemDictionaryMapper.updateSysSystemDictionaryByDicid(dicid, req) > 0;
    }


    @Override
    public SysSystemDictionary getSysSystemDictionaryByDicid(Integer dicid) {
        return sysSystemDictionaryMapper.getSysSystemDictionaryByDicid(dicid);
    }


    @Override
    public PageInfo<SysSystemDictionary> getSysSystemDictionaryList(GetSysSystemDictionaryListReq req) {
        return sysSystemDictionaryMapper.getSysSystemDictionaryList(req);
    }
}
