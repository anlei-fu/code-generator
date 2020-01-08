package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.SysSystemDictionaryMapper;
import com.railway.pojo.entity.SysSystemDictionary;
import com.railway.pojo.entity.SysSystemDictionary;
import com.railway.pojo.req.AddSysSystemDictionaryReq;
import com.railway.pojo.req.GetSysSystemDictionaryListReq;
import com.railway.pojo.req.UpdateSysSystemDictionaryByDicidReq;
import com.railway.service.SysSystemDictionaryService;
import com.railway.utils.PageHelperUtils;
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
        params params = new UpdateSysSystemDictionaryByDicidParams(dicid, req)
        return sysSystemDictionaryMapper.updateSysSystemDictionaryByDicid(params) > 0;
    }

    @Override
    public SysSystemDictionary getSysSystemDictionaryByDicid(Integer dicid) {
        return sysSystemDictionaryMapper.getSysSystemDictionaryByDicid(dicid);
    }

    @Override
    public PageInfo<SysSystemDictionary> getSysSystemDictionaryList(GetSysSystemDictionaryListReq req) {
        return PageHelperUtils.page(()=> sysSystemDictionaryMapper.getSysSystemDictionaryList(req));
    }

}
