package com.psp.am.assets;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "assets")
@NoArgsConstructor
@AllArgsConstructor
public class AssetEntity {

    @Id
    private String id;

    @Column
    private String name;

    @Column
    private int price;

    @Column 
    private int count;
}