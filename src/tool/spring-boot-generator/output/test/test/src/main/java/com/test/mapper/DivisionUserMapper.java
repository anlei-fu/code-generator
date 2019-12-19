package com.test.mapper;

import com.test.pojo.req.AddDivisionUserReq;
import com.test.pojo.req.GetDivisionUserListReq;
import com.test.pojo.req.UpdateDivisionUserByIdReq;
import com.test.pojo.entity.DivisionUser;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DivisionUserMapper {
        
    int addDivisionUser(AddDivisionUserReq req);
    
    int deleteDivisionUserById(Integer id);
    
    int updateDivisionUserById(@Params("id") Integer id, @Params("req") UpdateDivisionUserByIdReq req);
    
    DivisionUser getDivisionUserById(Integer id);
    
    List<DivisionUser> getDivisionUserList(GetDivisionUserListReq req);   
}