package com.contractSign.mapper;

import com.undefined.pojo.entity.@name;
import org.mapstruct.Mapper;


@Mapper
public interface @nameMapper {
        
    int addNotaryChannel(@Params("req") AddNotaryChannelReq req);
        int deleteNotaryChannelById(Integer id);
        int updateNotaryChannelById(@Params("id") Integer id, @Params("req") UpdateNotaryChannelByIdReq req);
        NotaryChannel getNotaryChannelById(Integer id);
        List<NotaryChannel> getNotaryChannelList(@Params("req") GetNotaryChannelListReq req);
       
}