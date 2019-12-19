package com.test.service;

import com.test.pojo.entity.BureauInfo;
import com.test.pojo.req.AddBureauInfoReq;
import com.test.pojo.req.GetBureauInfoListReq;
import com.test.pojo.req.UpdateBureauInfoByIdReq;
import com.github.pagehelper.PageInfo;


public interface BureauInfoService {

    boolean addBureauInfo(AddBureauInfoReq req);

    boolean deleteBureauInfoById(Integer id);

    boolean updateBureauInfoById(Integer id, UpdateBureauInfoByIdReq req);

    BureauInfo getBureauInfoById(Integer id);

    PageInfo<BureauInfo> getBureauInfoList(GetBureauInfoListReq req);
}