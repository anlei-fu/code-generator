package com.contractSign.service;



public interface @nameService {

    boolean addNotaryChannel(AddNotaryChannelReq req);
    boolean deleteNotaryChannelById(Integer id);
    boolean updateNotaryChannelById(Integer id, UpdateNotaryChannelByIdReq req);
    NotaryChannel getNotaryChannelById(Integer id);
    PageInfo<NotaryChannel> getNotaryChannelList(GetNotaryChannelListReq req);

}