/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2021-4-26 3:27:14 PM 
 * All rights reserved by fal(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crud.controller;

import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.req.AddAditionalOptionReq;
import com.jasmine.crud.pojo.req.GetAditionalOptionPageReq;
import com.jasmine.crud.pojo.req.UpdateAditionalOptionReq;
import com.jasmine.crud.pojo.resp.*;
import com.jasmine.crud.pojo.resp.PageResult;
import com.jasmine.crud.service.AditionalOptionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/aditional-option")
public class AditionalOptionController extends ControllerBase {

    @Autowired
    private AditionalOptionService aditionalOptionService;

    @PostMapping
    public R add(@Validated AddAditionalOptionReq req) {
        boolean result = aditionalOptionService.add(req);
        return responseBoolean(result);
    }

    @DeleteMapping(path = "{id}")
    public R deleteById(@PathVariable Integer id) {
        boolean result = aditionalOptionService.deleteById(id);
        return responseBoolean(result);
    }

    @PutMapping
    public R update(@Validated UpdateAditionalOptionReq req) {
        boolean result = aditionalOptionService.update(req);
        return responseBoolean(result);
    }

    @GetMapping(path = "detail/page")
    public R<PageResult<AditionalOptionDetailResp>> getDetailPage(@Validated GetAditionalOptionPageReq req) {
        PageResult<AditionalOptionDetailResp> result = aditionalOptionService.getDetailPage(req);
        return responseData(result);
    }

}

