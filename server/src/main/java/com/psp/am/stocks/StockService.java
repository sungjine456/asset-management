package com.psp.am.stocks;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StockService {

    @Autowired
    private StocksRepository repository;

    public String addStock(StockDto dto) {
        String result = "SUC";

        if (repository.existsById(dto.getCode())) {
            return "STOCK_DUP";
        }

        StockEntity stock = repository.save(dto.getEntity());

        if (stock == null) {
            result = "FAIL";
        }
        
        return result;
    }

    public List<StockDto> getStocks() {

        return repository.findAll().stream().map(s -> new StockDto(s)).collect(Collectors.toList());
    }
}
