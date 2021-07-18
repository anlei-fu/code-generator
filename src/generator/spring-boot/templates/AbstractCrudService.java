/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 1:58:28 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.@project.service.impl;

import com.@project.pojo.req.PageReq;
import com.@project.pojo.req.PageTimeReq;
import com.@project.pojo.resp.PageResult;
import com.@project.utils.DaoUtil;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

public abstract class AbstractCrudService<T,TId> {
    public boolean update(Object entity) {
        return DaoUtil.updateNormal(getMapper(), entity, getEntityClass());
    }

    public boolean add(Object entity) {
        return DaoUtil.insertNormal(getMapper(), entity, getEntityClass());
    }

    public boolean delete(Object pk) {
        return getMapper().deleteByPrimaryKey(pk) > 0;
    }

    public T getById(Object pk) {
        return getMapper().selectByPrimaryKey(pk);
    }

    public T selectOne(T entity) {
        return getMapper().selectOne(entity);
    }

    public List<T> select(T entity) {
        return getMapper().select(entity);
    }

    public List<T> all() {
        return getMapper().selectAll();
    }

    public PageResult<T> page(PageReq dto, String orderByClause, String... likeProperties) {
        return DaoUtil.queryNormalPage(getMapper(), dto, getEntityClass(), orderByClause, null, likeProperties);
    }

    public PageResult<T> page(PageTimeReq dto, String orderByClause, String timeRangeProperty, String... likeProperties) {
        return DaoUtil.queryNormalPage(getMapper(), dto, getEntityClass(), orderByClause, timeRangeProperty, likeProperties);
    }

    protected abstract Mapper<T> getMapper();

    protected abstract Class<T> getEntityClass();
}
