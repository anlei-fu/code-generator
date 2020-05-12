package com.@project.pojo.resp;

import com.github.pagehelper.Page;
import com.@project.pojo.req.PageReq;
import lombok.Data;

import java.util.List;

/**
 * @Copyright (C) 四川千行你我科技有限公司
 * @Author: fuanlei
 * @Date:
 * @Description:
 */
@Data
public class PageResult<T> {
    private  Integer pageIndex;
    private Integer pageSize;
    private  Long total;
    private List<T> list;

    public  static <T> PageResult<T> create(PageReq req, Page<T> page){
        PageResult<T> result =new PageResult<>();
        result.list =page.getResult();
        result.total=page.getTotal();
        result.pageIndex=req.getPageIndex();
        result.pageSize=req.getPageSize();
        return  result;
    }
}
