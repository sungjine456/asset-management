package com.psp.am.assets;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Slf4j
@RestController
public class AssetsController {

    @Autowired
    private AssetsRepository repository;
    
    @PostMapping("asset")
    public boolean addAsset(@RequestBody AssetDTO dto) {
        log.info("param => {}", dto.toString());

        repository.save(dto.getEntity());
        
        return true;
    }

    @GetMapping("asset/{id}")
    public AssetDTO getAsset(@PathVariable("id") String id) {
        log.info("param => id : {}", id);

        return repository.findById(id).map(a -> new AssetDTO(a)).orElse(null);
    }
}
