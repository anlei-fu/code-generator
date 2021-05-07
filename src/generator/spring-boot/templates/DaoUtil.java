package com.@project.utils;

import cn.hutool.core.util.StrUtil;
import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.@project.mapper.BaseCrudMapper;
import com.@project.pojo.req.PageReq;
import com.@project.pojo.req.PageTimeReq;
import com.@project.pojo.resp.PageResult;
import org.springframework.beans.BeanUtils;
import tk.mybatis.mapper.common.Mapper;
import tk.mybatis.mapper.entity.Config;
import tk.mybatis.mapper.entity.Example;
import tk.mybatis.mapper.mapperhelper.EntityHelper;

import java.beans.PropertyDescriptor;
import java.lang.reflect.Method;
import java.util.Date;
import java.util.List;
import java.util.Objects;

/**
 * 基本mapper方法
 *
 * @Copyright (C) 四川千行你我科技有限公司
 * @Author: fuanlei
 * @Date: 2020-12-23
 * @Description:
 */
public class DaoUtil {

    /**
     * 常规分页查询
     *
     * @param mapper        extends {@see Mapper}
     * @param dto
     * @param targetClazz   class of entity
     * @param orderByClause 不需要加 order by 前缀
     * @param <T>
     * @return
     */
    public static <T> PageResult<T> queryNormalPage(
            Mapper<T> mapper,
            PageReq dto,
            Class<T> targetClazz,
            String orderByClause
    ) {
        return queryNormalPage(mapper, dto, targetClazz, orderByClause, null);
    }

    /**
     * 常规分页查询
     *
     * @param mapper
     * @param dto               stem from {@see MyMapper}
     * @param targetClazz       class of entity
     * @param orderByClause     不需要加 order by 前缀
     * @param timeRangeProperty 为空默认 'createTime' 只有继承 {@type TimePageDTO} 才会起作用
     * @param likeProperties    需要进行模糊查询(%xx%)的字段
     * @param <T>
     * @return
     */
    public static <T> PageResult<T> queryNormalPage(
            Mapper<T> mapper,
            PageReq dto,
            Class<T> targetClazz,
            String orderByClause,
            String timeRangeProperty,
            String... likeProperties) {
        Page page = PageHelper.startPage(dto.getPageIndex(), dto.getPageSize());
        Example example = createPageExample(dto, targetClazz, timeRangeProperty, likeProperties);
        example.setOrderByClause(orderByClause);
        mapper.selectByExample(example);
        return PageResult.create(page);
    }

    /**
     * 常规列表查询
     *
     * @param mapper
     * @param dto
     * @param targetClazz
     * @param orderByClause
     * @param <T>
     * @return
     */
    public static <T> List<T> queryNormalList(
            Mapper<T> mapper,
            PageReq dto,
            Class<T> targetClazz,
            String orderByClause) {
        return queryNormalList(mapper, dto, targetClazz, orderByClause, null);
    }

    /**
     * 常规列表查询
     *
     * @param mapper
     * @param dto
     * @param targetClazz
     * @param orderByClause
     * @param timeRangeProperty
     * @param likeProperties
     * @param <T>
     * @return
     */
    public static <T> List<T> queryNormalList(
            Mapper<T> mapper,
            PageReq dto,
            Class<T> targetClazz,
            String orderByClause,
            String timeRangeProperty,
            String... likeProperties) {
        Example example = createPageExample(dto, targetClazz, timeRangeProperty, likeProperties);
        example.setOrderByClause(orderByClause);
        return mapper.selectByExample(example);
    }

    /**
     * 创建查询 example
     *
     * @param dto
     * @param targetClazz
     * @param timeRangeProperty
     * @param likeProperties
     * @param <T>
     * @return
     */
    public static <T> Example createPageExample(
            PageReq dto,
            Class<T> targetClazz,
            String timeRangeProperty,
            String... likeProperties
    ) {
        if (Objects.isNull(dto)) {
            throw new NullPointerException();
        }

        if (Objects.isNull(targetClazz)) {
            throw new NullPointerException();
        }

        checkOrInitEntityTable(targetClazz);
        Example example = new Example(targetClazz);
        Example.Criteria criteria = example.createCriteria();

        setEmptyStringFieldToNull(dto);
        setTimeRange(dto, criteria, targetClazz, timeRangeProperty);
        // 设置like字段
        if (likeProperties.length > 0) {
            setLikeFields(dto, criteria, likeProperties);
        }

        setEqualProperties(dto, targetClazz, criteria);
        return example;
    }

    /**
     * 设置相等属性
     *
     * @param source
     * @param targetClazz
     * @param criteria
     * @param <T>
     */
    public static <T> void setEqualProperties(Object source, Class<T> targetClazz, Example.Criteria criteria) {
        T instance = BeanUtils.instantiateClass(targetClazz);
        BeanUtils.copyProperties(source, instance);
        criteria.andEqualTo(instance);
    }

    /**
     * 一般更新
     *
     * @param mapper
     * @param source
     * @param targetClazz
     * @param <T>
     * @return
     */
    public static <T> boolean updateNormal(Mapper<T> mapper, Object source, Class<T> targetClazz) {
        T instance = BeanUtils.instantiateClass(targetClazz);
        setEmptyStringFieldToNull(source);
        BeanUtils.copyProperties(source, instance);
 //       checkAndSetProperty(instance, "updateUser", RequestContextUtil.getCurrentUser());
        checkAndSetProperty(instance, "updateTime", new Date());
        return mapper.updateByPrimaryKeySelective(instance) > 0;
    }

    /**
     * 一般插入
     *
     * @param mapper
     * @param source
     * @param targetClazz
     * @param <T>
     * @return
     */
    public static <T> boolean insertNormal(Mapper<T> mapper, Object source, Class<T> targetClazz) {
        T instance = BeanUtils.instantiateClass(targetClazz);
        setEmptyStringFieldToNull(source);
        BeanUtils.copyProperties(source, instance);
//        checkAndSetProperty(instance, "createUser", RequestContextUtil.getCurrentUser());
//        checkAndSetProperty(instance, "createTime", new Date());
//        checkAndSetProperty(instance, "updateUser", RequestContextUtil.getCurrentUser());
//        checkAndSetProperty(instance, "updateTime", new Date());
        return mapper.insertSelective(instance) > 0;
    }

    /**
     * Set empty str field to null
     *
     * @param obj
     */
    public static void setEmptyStringFieldToNull(Object obj) {
        if (Objects.isNull(obj)) {
            throw new  NullPointerException();
        }

        Class clazz = obj.getClass();
        PropertyDescriptor[] descriptors = BeanUtils.getPropertyDescriptors(clazz);
        for (PropertyDescriptor descriptor : descriptors) {
            Class propertyType = descriptor.getPropertyType();
            if (propertyType != String.class) {
                continue;
            }

            Method getter = descriptor.getReadMethod();
            Method setter = descriptor.getWriteMethod();
            if (Objects.isNull(getter) || Objects.isNull(setter)) {
                continue;
            }
            try {
                String value = (String) getter.invoke(obj);
                if (StrUtil.isEmpty(value)) {
                    setter.invoke(obj, new Object[]{null});
                }
            } catch (Exception ex) {
                // ignore
            }
        }
    }

    /**
     * 检查属性是否存在，如果存在 赋值 ，注意属性类型一致
     *
     * @param instance
     * @param property
     * @param value
     */
    private static void checkAndSetProperty(Object instance, String property, Object value) {
        PropertyDescriptor descriptor = BeanUtils.getPropertyDescriptor(instance.getClass(), property);
        if (!Objects.isNull(descriptor)) {
            Method setter = descriptor.getWriteMethod();
            if (!Objects.isNull(setter)) {
                try {
                    setter.invoke(instance, value);
                } catch (Exception ex) {
                    throw new RuntimeException(String.format(
                            "set property(%s) of class(%s) failed",
                            property,
                            instance.getClass()
                    ));
                }
            }
        }
    }

    /**
     * 设置时间字段
     *
     * @param dto
     * @param criteria
     * @param targetClazz
     * @param timeRangeProperty
     */
    private static void setTimeRange(
            PageReq dto,
            Example.Criteria criteria,
            Class<?> targetClazz,
            String timeRangeProperty) {
        if (!(dto instanceof PageTimeReq)) {
            return;
        }

        PageTimeReq pageTimeDTO = (PageTimeReq) dto;
        if (pageTimeDTO.getStartTime() == null
                && pageTimeDTO.getEndTime() == null) {
            return;
        }

        // 默认 时间筛选字段
        String timeField = "createTime";
        if (!StrUtil.isEmpty(timeRangeProperty)) {
            timeField = timeRangeProperty;
        }

        // 检查时间字段是否存在
        PropertyDescriptor timeFieldProperty = BeanUtils.getPropertyDescriptor(targetClazz, timeField);
        if (timeFieldProperty == null
                || timeFieldProperty.getPropertyType() != Date.class
        ) {
            throw new RuntimeException(
                    String.format(
                            "time-field(%s) of class(%s) not exists or incorrect date type",
                            timeField,
                            targetClazz
                    )
            );

        }

        if (!Objects.isNull(pageTimeDTO.getStartTime())) {
            criteria.andGreaterThanOrEqualTo(timeField, pageTimeDTO.getStartTime());
        }

        if (!Objects.isNull(pageTimeDTO.getEndTime())) {
            criteria.andLessThan(timeField, pageTimeDTO.getEndTime());
        }
    }

    /***
     * 设置 模糊查询字段
     *
     * @param dto
     * @param criteria
     * @param likeProperties
     */
    private static void setLikeFields(Object dto, Example.Criteria criteria, String... likeProperties) {
        Class<?> dtoClass = dto.getClass();
        for (String property : likeProperties) {
            PropertyDescriptor descriptor = BeanUtils.getPropertyDescriptor(dtoClass, property);
            if (Objects.isNull(descriptor)) {
                continue;
            }

            Method getter = descriptor.getReadMethod();
            Method setter = descriptor.getWriteMethod();
            if (Objects.isNull(getter) || Objects.isNull(setter)) {
                continue;
            }

            try {
                Object value = getter.invoke(dto);
                if (Objects.isNull(value)) {
                    continue;
                }

                String strValue = (String) value;
                if (StrUtil.isEmpty(strValue)) {
                    continue;
                }

                criteria.andLike(property, String.format("%%%s%%", strValue));
                // 设置字段为null
                setter.invoke(dto, new Object[]{null});
            } catch (Exception ex) {
                throw new RuntimeException(String.format("操作类型(%s)属性(%s)失败", dtoClass, property), ex);
            }
        }
    }

    /**
     * TODO:不是正确的解决方法
     *
     * @param clazz
     */
    private static void checkOrInitEntityTable(Class<?> clazz) {
        try {
            EntityHelper.getEntityTable(clazz);
        } catch (Exception ex) {
            EntityHelper.initEntityNameMap(clazz, new Config());
        }
    }
}
