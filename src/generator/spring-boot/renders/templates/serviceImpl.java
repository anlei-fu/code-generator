package com.@project.service.impl;

@packages
import com.@project.mapper.@nameMapper;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.resp.*;
import com.@project.pojo.entity.@name;
import com.@project.service.@nameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.@project.utils.PageHelperUtils;
import tk.mybatis.mapper.common.Mapper;
@packages

@Service
public class @nameServiceImpl extends AbstractCrudService<@name> implements @nameService {

    @Autowired
    private @nameMapper @snameMapper;

@content

    @Override
    protected Class<@name> getEntityClass(){
        return @name.class;
    }

    @Override
    protected Mapper<@name> getMapper() {
        return  @snameMapper;
    }
}
