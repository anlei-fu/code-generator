package com.test.mapper;

import com.test.pojo.req.AddBureauInfoReq;
import com.test.pojo.req.GetBureauInfoListReq;
import com.test.pojo.req.UpdateBureauInfoByIdReq;
import com.test.pojo.entity.BureauInfo;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface BureauInfoMapper {
        
    int addBureauInfo(AddBureauInfoReq req);
    
    int deleteBureauInfoById(Integer id);
    
    int updateBureauInfoById(@Params("id") Integer id, @Params("req") UpdateBureauInfoByIdReq req);
    
    BureauInfo getBureauInfoById(Integer id);
    
    List<BureauInfo> getBureauInfoList(GetBureauInfoListReq req);   
}