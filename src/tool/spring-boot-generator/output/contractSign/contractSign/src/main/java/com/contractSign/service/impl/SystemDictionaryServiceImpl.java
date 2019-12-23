package com.contractSign.service;



public interface @nameService {

    boolean addSystemDictionary(AddSystemDictionaryReq req);
    boolean deleteSystemDictionaryById(Integer id);
    boolean updateSystemDictionaryById(Integer id, UpdateSystemDictionaryByIdReq req);
    SystemDictionary getSystemDictionaryById(Integer id);
    PageInfo<SystemDictionary> getSystemDictionaryList(GetSystemDictionaryListReq req);

}