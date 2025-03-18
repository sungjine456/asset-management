package com.psp.am.stocks;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class StockDTO {
    
    String code;
    String name;

    public StockDTO(StockEntity entity) {
        code = entity.getCode();
        name = entity.getName();
    }

    public StockEntity getEntity() {
        return new StockEntity(code, name);
    }
}
