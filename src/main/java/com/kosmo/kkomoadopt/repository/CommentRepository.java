package com.kosmo.kkomoadopt.repository;

import com.kosmo.kkomoadopt.entity.CommentEntity;
import com.kosmo.kkomoadopt.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<CommentEntity, String> {

    // 댓글 ID와 작성자 ID로 댓글 존재 여부를 확인
    boolean existsByCommentIdAndUserId(String commentId, String userId);
}

