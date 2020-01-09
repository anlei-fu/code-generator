package com.contract.service;

import com.contract.pojo.entity.SystemDictionary;
import com.contract.pojo.req.AddSystemDictionaryReq;
import com.contract.pojo.req.GetSystemDictionaryListReq;
import com.contract.pojo.req.UpdateSystemDictionaryByIdReq;
import com.github.pagehelper.PageInfo;

public interface SystemDictionaryService {

    boolean addSystemDictionary(AddSystemDictionaryReq req);

    boolean deleteSystemDictionaryById(Integer id);

    boolean updateSystemDictionaryById(Integer id, UpdateSystemDictionaryByIdReq req);

    SystemDictionary getSystemDictionaryById(Integer id);

    PageInfo<SystemDictionary> getSystemDictionaryList(GetSystemDictionaryListReq req);

}
