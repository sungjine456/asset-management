package com.psp.am.assets;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@AllArgsConstructor
@NoArgsConstructor
@ToString
public class AssetDTO {
    
    String id;
    String name;
    int price;
    int count;

    public AssetDTO(AssetEntity entity) {
        id = entity.getId();
        name = entity.getName();
        price = entity.getPrice();
        count = entity.getCount();
    }

    public AssetEntity getEntity() {
        return new AssetEntity(id, name, price, count);
    }
}
