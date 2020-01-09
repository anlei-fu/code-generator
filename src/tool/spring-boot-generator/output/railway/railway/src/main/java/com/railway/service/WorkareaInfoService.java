package com.railway.service;

import com.github.pagehelper.PageInfo;
import com.railway.pojo.entity.WorkareaInfo;
import com.railway.pojo.req.AddWorkareaInfoReq;
import com.railway.pojo.req.GetWorkareaInfoListReq;
import com.railway.pojo.req.UpdateWorkareaInfoByIdReq;

public interface WorkareaInfoService {

    boolean addWorkareaInfo(AddWorkareaInfoReq req);

    boolean deleteWorkareaInfoById(Integer id);

    boolean updateWorkareaInfoById(Integer id, UpdateWorkareaInfoByIdReq req);

    WorkareaInfo getWorkareaInfoById(Integer id);

    PageInfo<WorkareaInfo> getWorkareaInfoList(GetWorkareaInfoListReq req);

}
