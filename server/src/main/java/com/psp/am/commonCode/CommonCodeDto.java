package com.psp.am.commonCode;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class CommonCodeDto {
    
    private String code;
    private String parent;
    private String name;

    public CommonCodeDto(CommonCodeEntity entity) {
        code = entity.getCode();
        if (entity.getParent() != null) {
            parent = entity.getParent().getCode();
        }
        name = entity.getName();
    }
}
