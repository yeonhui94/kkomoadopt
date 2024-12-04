package com.kosmo.kkomoadopt.repository;

import com.kosmo.kkomoadopt.entity.QnAEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface QnARepository extends JpaRepository<QnAEntity, String> {
}
