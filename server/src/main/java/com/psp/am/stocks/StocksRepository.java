package com.psp.am.stocks;

import org.springframework.data.jpa.repository.JpaRepository;

public interface StocksRepository extends JpaRepository<StockEntity, String> {
    
}
