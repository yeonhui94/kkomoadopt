package com.kosmo.kkomoadopt.repository;

import com.kosmo.kkomoadopt.entity.VisitRequestEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VisitRequestRePository extends JpaRepository<VisitRequestEntity, String> {
}
