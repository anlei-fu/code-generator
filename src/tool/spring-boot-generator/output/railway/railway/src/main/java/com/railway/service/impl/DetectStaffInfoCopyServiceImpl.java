package com.railway.service.impl;

import com.github.pagehelper.PageInfo;
import com.railway.mapper.DetectStaffInfoCopyMapper;
import com.railway.pojo.entity.DetectStaffInfoCopy;
import com.railway.pojo.entity.DetectStaffInfo;
import com.railway.pojo.entity.DetectStaffInfoCopy;
import com.railway.pojo.param.UpdateDetectStaffInfoCopyByIdParams;
import com.railway.pojo.req.AddDetectStaffInfoCopyReq;
import com.railway.pojo.req.GetDetectStaffInfoCopyListReq;
import com.railway.pojo.req.UpdateDetectStaffInfoCopyByIdReq;
import com.railway.service.DetectStaffInfoCopyService;
import com.railway.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class DetectStaffInfoCopyServiceImpl implements DetectStaffInfoCopyService {

    @Autowired
    private DetectStaffInfoCopyMapper detectStaffInfoCopyMapper;

    @Override
    public boolean addDetectStaffInfoCopy(AddDetectStaffInfoCopyReq req) {
        return detectStaffInfoCopyMapper.addDetectStaffInfoCopy(req) > 0;
    }

    @Override
    public boolean deleteDetectStaffInfoCopyById(Integer id) {
        return detectStaffInfoCopyMapper.deleteDetectStaffInfoCopyById(id) > 0;
    }

    @Override
    public boolean updateDetectStaffInfoCopyById(Integer id, UpdateDetectStaffInfoCopyByIdReq req) {
        UpdateDetectStaffInfoCopyByIdParams params = new UpdateDetectStaffInfoCopyByIdParams(id, req);
        return detectStaffInfoCopyMapper.updateDetectStaffInfoCopyById(params) > 0;
    }

    @Override
    public DetectStaffInfoCopy getDetectStaffInfoCopyById(Integer id) {
        return detectStaffInfoCopyMapper.getDetectStaffInfoCopyById(id);
    }

    @Override
    public PageInfo<DetectStaffInfoCopy> getDetectStaffInfoCopyList(GetDetectStaffInfoCopyListReq req) {
        return PageHelperUtils.paging(req, () -> detectStaffInfoCopyMapper.getDetectStaffInfoCopyList(req));
    }

}

