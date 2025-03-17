package com.psp.am.assets;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PostMapping;


@RestController
public class AssetsController {
    
    @PostMapping("asset")
    public boolean addAsset(@RequestBody AssetDTO dto) {
        System.out.println(dto);
        
        return true;
    }
}
