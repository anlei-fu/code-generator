package com.@project.service.impl;

import com.@project.mapper.WorkerInfoMapper;
import com.@project.pojo.entity.WorkerInfo;
import com.spider.service.WorkerInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class WorkerInfoServiceImpl implements WorkerInfoService {

    @Autowired
    private WorkerInfoMapper mapper;

    @Override
    public GetByIdResp GetById(Integer id) {
        return mapper.GetById(id);
    }


}
