package com.psp.am.stocks;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@RestController
public class StocksController {
    
    @Autowired
    private StockService service;
    
    @PostMapping("stock")
    public String addStock(@RequestBody StockDTO dto) {
        log.info("param => {}", dto.toString());

        return service.addStock(dto);
    }

    @GetMapping("stock/list")
    public List<StockDTO> getStocks() {

        return service.getStocks();
    }
}
