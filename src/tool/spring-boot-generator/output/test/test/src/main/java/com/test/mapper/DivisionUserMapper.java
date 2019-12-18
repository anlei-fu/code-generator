package com.undefined.mapper;

import com.undefined.pojo.entity.DivisionUser;
import org.mapstruct.Mapper;
import org.apache.ibatis.annotations.Param;

@Mapper
public interface DivisionUserMapper {
        
    int addDivisionUser(AddDivisionUserReq req);
    
    int deleteDivisionUserById(Integer id);
    
    int updateDivisionUserById(@Params("id") Integer id, @Params("req") UpdateDivisionUserByIdReq req);
    
    DivisionUser getDivisionUserById(Integer id);
    
    List<DivisionUser> getDivisionUserList(GetDivisionUserListReq req);   
}