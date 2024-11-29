package com.kosmo.kkomoadopt.repository;

import com.kosmo.kkomoadopt.entity.CommunityPostEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CommunityPostRepository extends JpaRepository<CommunityPostEntity, String> {

    // 최대 postId 값을 찾는 쿼리 추가
    Integer findMaxPostId();
}
