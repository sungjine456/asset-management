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

    public String addCommonCode(CommonCodeDto dto) {
        if (repository.existsById(dto.getCode())) {
            return "COMMON_CODE_DUP";
        }

        CommonCodeEntity newCode = new CommonCodeEntity(dto);
        
        if (dto.getParent() != null) {
            newCode.setParent(repository.findById(dto.getParent()));
        }

        if (repository.save(newCode) == null) {
            return "FAIL";
        }

        return "SUC";
    }

    public String updateCommonCode(CommonCodeDto dto) {
        /*
         * 꼬리무는 것을 방지
         */
        if (dto.getCode().equals(dto.getParent())){
            return "FAIL_UPDATE_SELF_INHERITANCE";
        }

        Optional<CommonCodeEntity> entity = repository.findById(dto.getCode());

        if (entity.isPresent()) {
            CommonCodeEntity e = entity.get();

            if (dto.getParent() != null) {
                /*
                 * 계층이 깊어지는 것 또는 꼬리무는 것을 방지
                 */
                if (e.getParent() == null && !e.getChildren().isEmpty()) {
                    return "FAIL_UPDATE_HAS_CHILDREN";
                }

                e.setParent(repository.findById(dto.getParent()));
            } else {
                e.setParent(Optional.empty());
            }

            e.setName(dto.getName());

            if (repository.save(e) == null) {
                return "FAIL";
            }
        } else {
            return "FAIL";
        }

        return "SUC";
    }

    public String deleteCommonCode(String code) {
        Optional<CommonCodeEntity> entity = repository.findById(code);

        if (entity.isPresent()) {
            if (!entity.get().getChildren().isEmpty()) {
                return "FAIL_DEL_NOT_EMPTY_CHILDREN_CODE";
            }

            repository.deleteById(code);
        }

        return "SUC";
    }

    public List<CommonCodeDto> getCommonCodes() {

        return repository.findAllByParentIsNull()
            .stream()
            .flatMap(e -> resolveCode(e).stream())
            .collect(Collectors.toList());
    }

    public List<CommonCodeDto> getParentCodes() {

        return repository.findAllByParentIsNull()
            .stream()
            .map(CommonCodeDto::new)
            .collect(Collectors.toList());
    }

    private List<CommonCodeDto> resolveCode(CommonCodeEntity entity) {
        List<CommonCodeDto> list = new ArrayList<>();

        list.add(new CommonCodeDto(entity));
        for (CommonCodeEntity e : entity.getChildren()) {
            list.add(new CommonCodeDto(e));
        }

        return list;
    }
}
