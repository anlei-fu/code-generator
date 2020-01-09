package com.railway.mapper;

import com.railway.pojo.entity.BureauInfo;
import com.railway.pojo.param.UpdateBureauInfoByIdParams;
import com.railway.pojo.req.AddBureauInfoReq;
import com.railway.pojo.req.GetBureauInfoListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface BureauInfoMapper {

    int addBureauInfo(AddBureauInfoReq req);

    int deleteBureauInfoById(@Param("id") Integer id);

    int updateBureauInfoById(UpdateBureauInfoByIdParams params);

    BureauInfo getBureauInfoById(@Param("id") Integer id);

    List<BureauInfo> getBureauInfoList(GetBureauInfoListReq req);

}
