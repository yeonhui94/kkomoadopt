package com.kosmo.kkomoadopt.repository;

import com.kosmo.kkomoadopt.entity.CommunityPostEntity;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommunityPostRepository extends JpaRepository<CommunityPostEntity, String> {

    // MAX(postId)를 구하는 쿼리 추가
    @Query("SELECT MAX(p.postId) FROM CommunityPostEntity p")
    Integer findMaxPostId();

    long count();


}
