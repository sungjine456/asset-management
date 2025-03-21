package com.psp.am.commonCode;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

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
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "parent")
    @Setter
    private CommonCodeEntity parent;

    @Column
    private String name;

    @OneToMany(mappedBy = "parent")
    private List<CommonCodeEntity> children = new ArrayList<>();

    public CommonCodeEntity(CommonCodeDto dto) {
        code = dto.getCode();
        name = dto.getName();
    }
}
