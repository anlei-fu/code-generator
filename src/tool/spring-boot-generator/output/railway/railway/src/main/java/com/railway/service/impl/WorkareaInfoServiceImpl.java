package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.WorkareaInfoMapper;
import com.railway.pojo.entity.WorkareaInfo;
import com.railway.pojo.entity.WorkareaInfo;
import com.railway.pojo.req.AddWorkareaInfoReq;
import com.railway.pojo.req.GetWorkareaInfoListReq;
import com.railway.pojo.req.UpdateWorkareaInfoByIdReq;
import com.railway.service.WorkareaInfoService;
import com.railway.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class WorkareaInfoServiceImpl implements WorkareaInfoService {

    @Autowired
    private WorkareaInfoMapper workareaInfoMapper;

    @Override
    public boolean addWorkareaInfo(AddWorkareaInfoReq req) {
        return workareaInfoMapper.addWorkareaInfo(req) > 0;
    }

    @Override
    public boolean deleteWorkareaInfoById(Integer id) {
        return workareaInfoMapper.deleteWorkareaInfoById(id) > 0;
    }

    @Override
    public boolean updateWorkareaInfoById(Integer id, UpdateWorkareaInfoByIdReq req) {
        params params = new UpdateWorkareaInfoByIdParams(id, req)
        return workareaInfoMapper.updateWorkareaInfoById(params) > 0;
    }

    @Override
    public WorkareaInfo getWorkareaInfoById(Integer id) {
        return workareaInfoMapper.getWorkareaInfoById(id);
    }

    @Override
    public PageInfo<WorkareaInfo> getWorkareaInfoList(GetWorkareaInfoListReq req) {
        return PageHelperUtils.page(()=> workareaInfoMapper.getWorkareaInfoList(req));
    }

}
