package com.@project.controller;

@packages
import com.@project.service.@nameService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import com.jasmine.crud.pojo.req.*;
import com.jasmine.crud.pojo.resp.*;
@packages

@RestController
@RequestMapping("/@spname")
public class @nameController extends ControllerBase {

    @Autowired
    private @nameService @snameService;

@content
}
