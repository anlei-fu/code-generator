package com.qxnw.os.admin.api.service.impl;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.qxnw.os.dao.base.PageList;
import com.qxnw.os.dao.mapper.@nameDAO;
import com.qxnw.os.model.database.@nameDO;
import com.qxnw.os.model.request.@nameCreateDTO;
import com.qxnw.os.model.request.@namePageDTO;
import com.qxnw.os.model.request.@nameUpdateDTO;
import org.springframework.beans.BeanUtils;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.entity.Example;

import javax.annotation.Resource;

/**
 * @Copyright (C) 四川千行你我科技有限公司
 * @Author: fuanlei
 * @Date: 2020-12-22
 * @Description:
 */
@Service
public class @nameService {

    @Resource
    private @nameDAO @snameDao;

    // @description 管理
    /**
     * 添加 @description
     * 
     * @param dto
     * @return
     */
    public boolean add@name(@nameCreateDTO dto) {
        return DaoUtil.insertNormal(@snameDao, dto, @nameDO.class);
    }

    /**
     * 删除 @description
     *
     * @param @pkName
     * @return
     */
    public boolean delete@nameBy@pkUpperName(@pkType @pkName) {
        return @snameDao.deleteByPrimaryKey(@pkName) > 0;
    }

    /**
     * 更新 @description
     * 
     * @param dto
     * @return
     */
    public boolean update@name(@nameUpdateDTO dto) {
        return DaoUtil.updateNormal(@snameDao, dto, @nameDO.class);
    }

    /**
     * 获取 @description 列表
     *
     * @param dto
     * @return
     */
    public PageList<@nameDO> get@namePage(@namePageDTO dto) {
        return DaoUtil.queryNormalPage(@snameDao,dto,@nameDO.class,"@pkRawName desc");
    }
}
