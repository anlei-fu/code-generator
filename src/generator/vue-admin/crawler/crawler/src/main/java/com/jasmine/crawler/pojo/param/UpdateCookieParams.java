/*----------------------------------------------------------------------------
 * Jasmine code generator, a tool to build web crud application,with spring-
 * boot, mybatis, mysql,swagger,spring-security.
 * Generated at 2020-7-31 9:09:23 PM 
 * All rights reserved by fuanlei(email:767550758@qq.com) since 2019
 *---------------------------------------------------------------------------*/
package com.jasmine.crawler.pojo.param;

import com.jasmine.crawler.pojo.entity.Cookie;
import com.jasmine.crawler.pojo.req.UpdateCookieReq;
import lombok.Getter;
import lombok.Setter;

import java.util.Date;

public class UpdateCookieParams {

    @Getter
    @Setter
    private Integer id;

    private UpdateCookieReq req;

    public UpdateCookieParams(Integer id, UpdateCookieReq req) {
        this.id = id;
        this.req = req;
    }

    public Integer getSiteId() {
        return req.getSiteId();
    }

    public Integer getSiteAccountId() {
        return req.getSiteAccountId();
    }

    public String getCookie() {
        return req.getCookie();
    }

    public String getLoginIp() {
        return req.getLoginIp();
    }

    public Integer getCurrentBlockCount() {
        return req.getCurrentBlockCount();
    }

    public Integer getCurrentUseCount() {
        return req.getCurrentUseCount();
    }

    public Date getExpireTime() {
        return req.getExpireTime();
    }

}
