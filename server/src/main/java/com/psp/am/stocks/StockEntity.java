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
    private String code;

    @Column
    private String name;
}