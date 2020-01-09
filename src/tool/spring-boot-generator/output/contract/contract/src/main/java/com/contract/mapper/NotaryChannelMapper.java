package com.contract.mapper;

import com.contract.pojo.entity.NotaryChannel;
import com.contract.pojo.param.UpdateNotaryChannelByIdParams;
import com.contract.pojo.req.AddNotaryChannelReq;
import com.contract.pojo.req.GetNotaryChannelListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface NotaryChannelMapper {

    int addNotaryChannel(AddNotaryChannelReq req);

    int deleteNotaryChannelById(@Param("id") Integer id);

    int updateNotaryChannelById(UpdateNotaryChannelByIdParams params);

    NotaryChannel getNotaryChannelById(@Param("id") Integer id);

    List<NotaryChannel> getNotaryChannelList(GetNotaryChannelListReq req);

}
