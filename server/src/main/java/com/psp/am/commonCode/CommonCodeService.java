package com.psp.am.commonCode;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CommonCodeService {
    
    @Autowired
    private CommonCodeRepository repository;

    public String addCommon(CommonCodeDto dto) {
        if (repository.existsById(dto.getCode())) {
            return "COMMON_CODE_DUP";
        }

        Optional<CommonCodeEntity> parent = repository.findById(dto.getParent());
        CommonCodeEntity newCode = new CommonCodeEntity(dto);

        if (parent.isPresent()) {
            newCode.setParent(parent.get());
        }

        if (repository.save(newCode) == null) {
            return "FAIL";
        }

        return "SUC";
    }

    public List<CommonCodeDto> getCommons() {

        return repository.findAllByParentIsNull()
            .stream()
            .flatMap(e -> resolve(e).stream())
            .collect(Collectors.toList());
    }

    private List<CommonCodeDto> resolve(CommonCodeEntity entity) {
        List<CommonCodeDto> list = new ArrayList<>();

        list.add(new CommonCodeDto(entity));
        for (CommonCodeEntity e : entity.getChildren()) {
            list.add(new CommonCodeDto(e));
        }

        return list;
    }
}
