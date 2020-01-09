package com.@project.controller;

@packages
import com.@project.pojo.resp.R;
import com.@project.service.@nameService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
@packages

@Api(tags = "@description")
@RestController
public class @nameController {

    @Autowired
    private @nameService @snameService;

    @content
}
