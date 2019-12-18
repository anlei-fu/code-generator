package com.undefined.mapper;

import com.undefined.pojo.entity.DamageDealUser;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DamageDealUserMapper {
        
    int addDamageDealUser(AddDamageDealUserReq req);
    
    int deleteDamageDealUserById(Integer id);
    
    int updateDamageDealUserById(@Params("id") Integer id, @Params("req") UpdateDamageDealUserByIdReq req);
    
    DamageDealUser getDamageDealUserById(Integer id);
    
    List<DamageDealUser> getDamageDealUserList(GetDamageDealUserListReq req);   
}