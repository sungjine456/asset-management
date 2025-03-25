package com.psp.am.stocks;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StockDto {
    
    private String code;
    private String index;
    private String industry;
    private String name;

    public StockDto(StockEntity entity) {
        code = entity.getCode();
        index = entity.getIndex();
        industry = entity.getIndustry();
        name = entity.getName();
    }

    public StockEntity getEntity() {
        return new StockEntity(code, index, industry, name);
    }
}
