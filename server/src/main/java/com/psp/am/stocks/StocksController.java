package com.psp.am.stocks;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StocksController {
    
    @Autowired
    private StocksRepository repository;
    
    @PostMapping("stock")
    public boolean addStock(@RequestBody StockDTO dto) {
        System.out.println(dto);

        StockEntity stock = repository.save(dto.getEntity());
        
        return stock != null;
    }

    @GetMapping("stock/list")
    public List<StockDTO> getStocks() {

        return repository.findAll().stream().map(s -> new StockDTO(s)).collect(Collectors.toList());
    }
}
