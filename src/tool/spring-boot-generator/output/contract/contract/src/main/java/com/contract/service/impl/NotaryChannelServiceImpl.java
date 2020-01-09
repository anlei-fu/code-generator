package com.contract.service.impl;

import com.contract.mapper.NotaryChannelMapper;
import com.contract.pojo.entity.NotaryChannel;
import com.contract.pojo.entity.NotaryChannel;
import com.contract.pojo.param.UpdateNotaryChannelByIdParams;
import com.contract.pojo.req.AddNotaryChannelReq;
import com.contract.pojo.req.GetNotaryChannelListReq;
import com.contract.pojo.req.UpdateNotaryChannelByIdReq;
import com.contract.service.NotaryChannelService;
import com.contract.utils.PageHelperUtils;
import com.github.pagehelper.PageInfo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class NotaryChannelServiceImpl implements NotaryChannelService {

    @Autowired
    private NotaryChannelMapper notaryChannelMapper;

    @Override
    public boolean addNotaryChannel(AddNotaryChannelReq req) {
        return notaryChannelMapper.addNotaryChannel(req) > 0;
    }

    @Override
    public boolean deleteNotaryChannelById(Integer id) {
        return notaryChannelMapper.deleteNotaryChannelById(id) > 0;
    }

    @Override
    public boolean updateNotaryChannelById(Integer id, UpdateNotaryChannelByIdReq req) {
        UpdateNotaryChannelByIdParams params = new UpdateNotaryChannelByIdParams(id, req);
        return notaryChannelMapper.updateNotaryChannelById(params) > 0;
    }

    @Override
    public NotaryChannel getNotaryChannelById(Integer id) {
        return notaryChannelMapper.getNotaryChannelById(id);
    }

    @Override
    public PageInfo<NotaryChannel> getNotaryChannelList(GetNotaryChannelListReq req) {
        return PageHelperUtils.paging(req, () -> notaryChannelMapper.getNotaryChannelList(req));
    }

}

