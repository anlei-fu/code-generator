package com.contract.mapper;

import com.contract.pojo.entity.SystemDictionary;
import com.contract.pojo.param.UpdateSystemDictionaryByIdParams;
import com.contract.pojo.req.AddSystemDictionaryReq;
import com.contract.pojo.req.GetSystemDictionaryListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface SystemDictionaryMapper {

    int addSystemDictionary(AddSystemDictionaryReq req);

    int deleteSystemDictionaryById(@Param("id") Integer id);

    int updateSystemDictionaryById(UpdateSystemDictionaryByIdParams params);

    SystemDictionary getSystemDictionaryById(@Param("id") Integer id);

    List<SystemDictionary> getSystemDictionaryList(GetSystemDictionaryListReq req);

}
