package com.railway.mapper;

import com.railway.pojo.entity.DetectStaffInfo;
import com.railway.pojo.param.UpdateDetectStaffInfoByIdParams;
import com.railway.pojo.req.AddDetectStaffInfoReq;
import com.railway.pojo.req.GetDetectStaffInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface DetectStaffInfoMapper {

    int addDetectStaffInfo(AddDetectStaffInfoReq req);

    int deleteDetectStaffInfoById(@Param("id") Integer id);

    int updateDetectStaffInfoById(UpdateDetectStaffInfoByIdParams params);

    DetectStaffInfo getDetectStaffInfoById(@Param("id") Integer id);

    List<DetectStaffInfo> getDetectStaffInfoList(GetDetectStaffInfoListReq req);

}
