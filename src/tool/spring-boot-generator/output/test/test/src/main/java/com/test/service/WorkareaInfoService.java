package com.test.service;

import com.test.pojo.entity.WorkareaInfo;
import com.test.pojo.req.AddWorkareaInfoReq;
import com.test.pojo.req.GetWorkareaInfoListReq;
import com.test.pojo.req.UpdateWorkareaInfoByIdReq;
import com.github.pagehelper.PageInfo;


public interface WorkareaInfoService {

    boolean addWorkareaInfo(AddWorkareaInfoReq req);

    boolean deleteWorkareaInfoById(Integer id);

    boolean updateWorkareaInfoById(Integer id, UpdateWorkareaInfoByIdReq req);

    WorkareaInfo getWorkareaInfoById(Integer id);

    PageInfo<WorkareaInfo> getWorkareaInfoList(GetWorkareaInfoListReq req);
}