package com.railway.mapper;

import com.railway.pojo.entity.DamageDealUser;
import com.railway.pojo.param.UpdateDamageDealUserByIdParams;
import com.railway.pojo.req.AddDamageDealUserReq;
import com.railway.pojo.req.GetDamageDealUserListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper
public interface DamageDealUserMapper {

    int addDamageDealUser(AddDamageDealUserReq req);

    int deleteDamageDealUserById(@Param("id") Integer id);

    int updateDamageDealUserById(UpdateDamageDealUserByIdParams params);

    DamageDealUser getDamageDealUserById(@Param("id") Integer id);

    List<DamageDealUser> getDamageDealUserList(GetDamageDealUserListReq req);

}
