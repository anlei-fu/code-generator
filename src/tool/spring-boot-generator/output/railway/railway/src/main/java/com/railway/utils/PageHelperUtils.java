package com.railway.utils;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.railway.pojo.req.PageReq;

import java.util.List;
import java.util.function.Supplier;


public class PageHelperUtils {

    public  static <T>  PageInfo<T> paging(PageReq req, Supplier<List<T>> supplier){
        startPage(req);
        return  new PageInfo<>(supplier.get());
    }

    public static void startPage(PageReq req) {
        PageHelper.startPage(req.getPageIndex(), req.getPageSize());
    }
}
