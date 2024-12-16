package com.kosmo.kkomoadopt.repository;

import com.kosmo.kkomoadopt.entity.VisitRequestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface VisitRequestRepository extends JpaRepository<VisitRequestEntity, Integer> {

    // MAX(RequestId)를 구하는 쿼리 추가
    @Query("SELECT MAX(r.requestId) FROM VisitRequestEntity r")
    Integer findMaxRequestId();
}
