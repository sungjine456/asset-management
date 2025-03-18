package com.psp.am.assets;

import org.springframework.data.jpa.repository.JpaRepository;

public interface AssetsRepository extends JpaRepository<AssetEntity, String> {
    
}
