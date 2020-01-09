package com.contract.service;

import com.contract.pojo.entity.NotaryChannel;
import com.contract.pojo.req.AddNotaryChannelReq;
import com.contract.pojo.req.GetNotaryChannelListReq;
import com.contract.pojo.req.UpdateNotaryChannelByIdReq;
import com.github.pagehelper.PageInfo;

public interface NotaryChannelService {

    boolean addNotaryChannel(AddNotaryChannelReq req);

    boolean deleteNotaryChannelById(Integer id);

    boolean updateNotaryChannelById(Integer id, UpdateNotaryChannelByIdReq req);

    NotaryChannel getNotaryChannelById(Integer id);

    PageInfo<NotaryChannel> getNotaryChannelList(GetNotaryChannelListReq req);

}
