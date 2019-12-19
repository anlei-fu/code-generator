package com.test.mapper;

import com.test.pojo.req.AddDamageDealUserReq;
import com.test.pojo.req.GetDamageDealUserListReq;
import com.test.pojo.req.UpdateDamageDealUserByIdReq;
import com.test.pojo.entity.DamageDealUser;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DamageDealUserMapper {
        
    int addDamageDealUser(AddDamageDealUserReq req);
    
    int deleteDamageDealUserById(Integer id);
    
    int updateDamageDealUserById(@Params("id") Integer id, @Params("req") UpdateDamageDealUserByIdReq req);
    
    DamageDealUser getDamageDealUserById(Integer id);
    
    List<DamageDealUser> getDamageDealUserList(GetDamageDealUserListReq req);   
}