package com.contract.mapper;

import com.contract.pojo.entity.SystemLog;
import com.contract.pojo.param.UpdateSystemLogByIdParams;
import com.contract.pojo.req.AddSystemLogReq;
import com.contract.pojo.req.GetSystemLogListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface SystemLogMapper {

    int addSystemLog(AddSystemLogReq req);

    int deleteSystemLogById(@Param("id") Integer id);

    int updateSystemLogById(UpdateSystemLogByIdParams params);

    SystemLog getSystemLogById(@Param("id") Integer id);

    List<SystemLog> getSystemLogList(GetSystemLogListReq req);

}
