package com.psp.am.commonCode;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@Slf4j
@RestController
public class CommonCodeController {
    
    @Autowired
    private CommonCodeService service;

    @PostMapping("commonCode")
    public String postMethodName(@RequestBody CommonCodeDto dto) {
        log.info("param => {}", dto);
        
        return service.addCommon(dto);
    }

    @GetMapping("commonCode/list")
    public List<CommonCodeDto> getCommons() {

        return service.getCommons();
    }
}
