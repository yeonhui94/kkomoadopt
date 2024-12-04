package com.kosmo.kkomoadopt.repository;

import com.kosmo.kkomoadopt.entity.AdoptionNoticeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdoptionNoticeRepository extends JpaRepository<AdoptionNoticeEntity, String> {
}
