/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-20 5:12:33 PM
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.service.impl;

import com.jasmine.crud.pojo.req.PageReq;
import com.jasmine.crud.pojo.req.PageTimeReq;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.utils.DaoUtil;
import tk.mybatis.mapper.common.Mapper;

import java.util.List;

public abstract class AbstractCrudService<T> {
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
