package com.psp.am.stocks;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@Entity(name = "stocks")
@NoArgsConstructor
@AllArgsConstructor
public class StockEntity {

    @Id
    @Column(length = 6)
    private String code;

    @Column
    private String index;

    @Column
    private String industry;

    @Column
    private String name;
}