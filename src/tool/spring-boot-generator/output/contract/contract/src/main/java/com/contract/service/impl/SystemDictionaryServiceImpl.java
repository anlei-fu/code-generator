package com.contract.service.impl;

import com.contract.mapper.SystemDictionaryMapper;
import com.contract.pojo.entity.SystemDictionary;
import com.contract.pojo.entity.SystemDictionary;
import com.contract.pojo.param.UpdateSystemDictionaryByIdParams;
import com.contract.pojo.req.AddSystemDictionaryReq;
import com.contract.pojo.req.GetSystemDictionaryListReq;
import com.contract.pojo.req.UpdateSystemDictionaryByIdReq;
import com.contract.service.SystemDictionaryService;
import com.contract.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SystemDictionaryServiceImpl implements SystemDictionaryService {

    @Autowired
    private SystemDictionaryMapper systemDictionaryMapper;

    @Override
    public boolean addSystemDictionary(AddSystemDictionaryReq req) {
        return systemDictionaryMapper.addSystemDictionary(req) > 0;
    }

    @Override
    public boolean deleteSystemDictionaryById(Integer id) {
        return systemDictionaryMapper.deleteSystemDictionaryById(id) > 0;
    }

    @Override
    public boolean updateSystemDictionaryById(Integer id, UpdateSystemDictionaryByIdReq req) {
        UpdateSystemDictionaryByIdParams params = new UpdateSystemDictionaryByIdParams(id, req);
        return systemDictionaryMapper.updateSystemDictionaryById(params) > 0;
    }

    @Override
    public SystemDictionary getSystemDictionaryById(Integer id) {
        return systemDictionaryMapper.getSystemDictionaryById(id);
    }

    @Override
    public PageInfo<SystemDictionary> getSystemDictionaryList(GetSystemDictionaryListReq req) {
        return PageHelperUtils.paging(req, () -> systemDictionaryMapper.getSystemDictionaryList(req));
    }

}

