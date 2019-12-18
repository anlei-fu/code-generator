package com.undefined.service;

import com.undefined.pojo.entity.WeldingInfo;

public interface WeldingInfoService {

    boolean addWeldingInfo(AddWeldingInfoReq req);

    boolean deleteWeldingInfoById(Integer id);

    boolean updateWeldingInfoById(Integer id, UpdateWeldingInfoByIdReq req);

    WeldingInfo getWeldingInfoById(Integer id);

    PageInfo<WeldingInfo> getWeldingInfoList(GetWeldingInfoListReq req);
}