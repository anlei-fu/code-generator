package com.railway.mapper;

import com.railway.pojo.entity.DetectStaffInfo;
import com.railway.pojo.entity.DetectStaffInfoCopy;
import com.railway.pojo.param.UpdateDetectStaffInfoCopyByIdParams;
import com.railway.pojo.req.AddDetectStaffInfoCopyReq;
import com.railway.pojo.req.GetDetectStaffInfoCopyListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface DetectStaffInfoCopyMapper {

    int addDetectStaffInfoCopy(AddDetectStaffInfoCopyReq req);

    int deleteDetectStaffInfoCopyById(@Param("id") Integer id);

    int updateDetectStaffInfoCopyById(UpdateDetectStaffInfoCopyByIdParams params);

    DetectStaffInfoCopy getDetectStaffInfoCopyById(@Param("id") Integer id);

    List<DetectStaffInfoCopy> getDetectStaffInfoCopyList(GetDetectStaffInfoCopyListReq req);

}
