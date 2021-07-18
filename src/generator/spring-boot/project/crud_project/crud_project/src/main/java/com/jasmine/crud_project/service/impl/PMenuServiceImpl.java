/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 6/27/2021, 3:00:53 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud_project.service.impl;

import com.jasmine.crud_project.mapper.PMenuMapper;
import com.jasmine.crud_project.pojo.entity.PMenu;
import com.jasmine.crud_project.pojo.req.AddPMenuReq;
import com.jasmine.crud_project.pojo.req.GetPMenuPageReq;
import com.jasmine.crud_project.pojo.req.UpdatePMenuReq;
import com.jasmine.crud_project.pojo.resp.PMenuDetailResp;
import com.jasmine.crud_project.pojo.resp.PageResult;
import com.jasmine.crud_project.service.PMenuService;
import com.jasmine.crud_project.utils.DaoUtil;
import com.jasmine.crud_project.utils.PageHelperUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tk.mybatis.mapper.common.Mapper;


@Service
public class PMenuServiceImpl extends AbstractCrudService<PMenu> implements PMenuService {

    @Autowired
    private PMenuMapper pMenuMapper;

    @Override
    public boolean add(AddPMenuReq req) {
        return super.add(req);
    }

    @Override
    public boolean deleteById(Integer id) {
        return super.delete(id);
    }

    @Override
    public boolean update(UpdatePMenuReq req) {
        return DaoUtil.update(pMenuMapper,req,getEntityClass(),"id","projectId");
    }

    @Override
    public PMenu getById(Integer id) {
        return super.getById(id);
    }

    @Override
    public PageResult<PMenuDetailResp> getDetailPage(GetPMenuPageReq req) {
        return PageHelperUtils.paging(req, () -> pMenuMapper.getDetailPage(req));
    }


    @Override
    protected Class<PMenu> getEntityClass(){
        return PMenu.class;
    }

    @Override
    protected Mapper<PMenu> getMapper() {
        return  pMenuMapper;
    }
}

