package com.psp.am.assets;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@RestController
public class AssetsController {

    @Autowired
    private AssetsRepository repository;
    
    @PostMapping("asset")
    public boolean addAsset(@RequestBody AssetDTO dto) {
        System.out.println(dto);

        repository.save(dto.getEntity());
        
        return true;
    }

    @GetMapping("asset/{id}")
    public AssetDTO getAsset(@PathVariable("id") String id) {
        System.out.println(id);

        return repository.findById(id).map(a -> new AssetDTO(a)).orElse(null);
    }
}
