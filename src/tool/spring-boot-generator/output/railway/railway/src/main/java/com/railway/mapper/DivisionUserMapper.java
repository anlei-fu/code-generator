package com.railway.mapper;

import com.railway.pojo.entity.DivisionUser;
import com.railway.pojo.params.UpdateDivisionUserByIdParams;
import com.railway.pojo.req.AddDivisionUserReq;
import com.railway.pojo.req.GetDivisionUserListReq;
import org.apache.ibatis.annotations.Param;
import org.mapstruct.Mapper;

import java.util.List;


@Mapper
public interface DivisionUserMapper {
        
    int addDivisionUser(AddDivisionUserReq req);
    
        int deleteDivisionUserById(@Params("id") Integer id);
    
        int updateDivisionUserById(UpdateDivisionUserByIdParams params);
    
        DivisionUser getDivisionUserById(@Params("id") Integer id);
    
        List<DivisionUser> getDivisionUserList(GetDivisionUserListReq req);
   
}