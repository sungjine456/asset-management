package com.psp.am.commonCode;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CommonCodeRepository extends JpaRepository<CommonCodeEntity, String> {

    List<CommonCodeEntity> findAllByParentIsNull();
}
