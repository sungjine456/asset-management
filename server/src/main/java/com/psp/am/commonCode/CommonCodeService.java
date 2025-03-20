package com.psp.am.commonCode;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommonCodeService {
    
    @Autowired
    private CommonCodeRepository repository;

    public String addCommon(CommonCodeDto dto) {
        String result = "SUC";

        if (repository.existsById(dto.getCode())) {
            return "COMMON_CODE_DUP";
        }

        CommonCodeEntity code = repository.save(dto.getEntity());

        if (code == null) {
            result = "FAIL";
        }
        
        return result;
    }

    public List<CommonCodeDto> getCommons() {

        return repository.findAll().stream().map(s -> new CommonCodeDto(s)).collect(Collectors.toList());
    }
}
