package com.test.service;

import com.test.pojo.entity.WeldingInfo;
import com.test.pojo.req.AddWeldingInfoReq;
import com.test.pojo.req.GetWeldingInfoListReq;
import com.test.pojo.req.UpdateWeldingInfoByIdReq;
import com.github.pagehelper.PageInfo;


public interface WeldingInfoService {

    boolean addWeldingInfo(AddWeldingInfoReq req);

    boolean deleteWeldingInfoById(Integer id);

    boolean updateWeldingInfoById(Integer id, UpdateWeldingInfoByIdReq req);

    WeldingInfo getWeldingInfoById(Integer id);

    PageInfo<WeldingInfo> getWeldingInfoList(GetWeldingInfoListReq req);
}