package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.BureauInfo;
import com.railway.pojo.req.AddBureauInfoReq;
import com.railway.pojo.req.GetBureauInfoListReq;
import com.railway.pojo.req.UpdateBureauInfoByIdReq;


public interface BureauInfoService {

    boolean addBureauInfo(AddBureauInfoReq req);
    
    boolean deleteBureauInfoById(Integer id);
    
    boolean updateBureauInfoById(Integer id, UpdateBureauInfoByIdReq req);
    
    BureauInfo getBureauInfoById(Integer id);
    
    PageInfo<BureauInfo> getBureauInfoList(GetBureauInfoListReq req);

}