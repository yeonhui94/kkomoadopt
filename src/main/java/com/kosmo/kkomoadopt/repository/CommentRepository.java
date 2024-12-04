package com.kosmo.kkomoadopt.repository;

import com.kosmo.kkomoadopt.entity.CommentEntity;
import com.kosmo.kkomoadopt.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<CommentEntity, String> {
}

