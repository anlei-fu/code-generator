package com.undefined.service;

import com.undefined.pojo.entity.BureauInfo;

public interface BureauInfoService {

    boolean addBureauInfo(AddBureauInfoReq req);

    boolean deleteBureauInfoById(Integer id);

    boolean updateBureauInfoById(Integer id, UpdateBureauInfoByIdReq req);

    BureauInfo getBureauInfoById(Integer id);

    PageInfo<BureauInfo> getBureauInfoList(GetBureauInfoListReq req);
}