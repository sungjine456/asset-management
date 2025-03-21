package com.psp.am.commonCode;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

@Slf4j
@RestController
@RequestMapping("/commonCode")
public class CommonCodeController {
    
    @Autowired
    private CommonCodeService service;

    @PostMapping("")
    public String addCommonCode(@RequestBody CommonCodeDto dto) {
        log.info("param => {}", dto);
        
        return service.addCommonCode(dto);
    }

    @PostMapping("/update")
    public String updateCommonCode(@RequestBody CommonCodeDto dto) {
        log.info("param => {}", dto);
        
        return service.updateCommonCode(dto);
    }

    @DeleteMapping("/{code}")
    public String deleteCommonCode(@PathVariable(name = "code") String code) {
        log.info("param => code : {}", code);
        
        return service.deleteCommonCode(code);
    }

    @GetMapping("/list")
    public List<CommonCodeDto> getCommonCodes() {

        return service.getCommonCodes();
    }

    @GetMapping("/parents")
    public List<CommonCodeDto> getParentCodes() {

        return service.getParentCodes();
    }
}
