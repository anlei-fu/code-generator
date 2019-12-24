package com.spider.util;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.spider.pojo.req.PageReq;

import java.util.function.Supplier;


public class PageHelperUtils {

    public  static <T>  PageInfo<T> paging(PageReq req, Supplier<T> supplier){
        startPage(req);
        return  new PageInfo<>(supplier.get());
    }

    public static void startPage(PageReq req) {
        PageHelper.startPage(req.getPageNo(), req.getPageSize());
    }
}
