package com.celebrate.organization.controller.rest;

import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class Test {

    @GetMapping(produces = MediaType.APPLICATION_JSON_VALUE)
    public String test(){
        return "Nebo je plavo";
    }
}
