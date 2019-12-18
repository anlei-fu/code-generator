package com.undefined.service;

import com.undefined.pojo.entity.WorkareaInfo;

public interface WorkareaInfoService {

    boolean addWorkareaInfo(AddWorkareaInfoReq req);

    boolean deleteWorkareaInfoById(Integer id);

    boolean updateWorkareaInfoById(Integer id, UpdateWorkareaInfoByIdReq req);

    WorkareaInfo getWorkareaInfoById(Integer id);

    PageInfo<WorkareaInfo> getWorkareaInfoList(GetWorkareaInfoListReq req);
}