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
}
