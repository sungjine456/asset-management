package com.psp.am.commonCode;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "common_code")
@NoArgsConstructor
public class CommonCodeEntity {

    @Id
    @Column(length = 5)
    private String code;
    
    @Column(length = 5)
    private String parent;

    @Column
    private String name;

    public CommonCodeEntity(String code, String parent, String name) {
        this.code = code;
        this.parent = parent;
        this.name = name;
    }
}
