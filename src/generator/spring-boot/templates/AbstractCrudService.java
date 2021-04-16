package com.@project.service.impl;

import com.@project.mapper.BaseCrudMapper;
import com.@project.pojo.req.PageReq;
import com.@project.pojo.req.PageTimeReq;
import com.@project.pojo.resp.PageResult;
import com.@project.utils.DaoUtil;

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

    protected abstract BaseCrudMapper<T> getMapper();

    protected abstract Class<T> getEntityClass();
}
