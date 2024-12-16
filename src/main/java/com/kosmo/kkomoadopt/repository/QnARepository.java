package com.kosmo.kkomoadopt.repository;

import com.kosmo.kkomoadopt.entity.CommunityPostEntity;
import com.kosmo.kkomoadopt.entity.QnAEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface QnARepository extends JpaRepository<QnAEntity, String> {

    // MAX(qnaId)를 구하는 쿼리 추가
    @Query("SELECT MAX(q.qnaId) FROM QnAEntity q")
    Integer findMaxQnaId();

    // 댓글 ID와 작성자 ID로 댓글 존재 여부를 확인
    boolean existsByQnaUidAndUserId(String qnaUid, String userId);

    //Qna 글 목록 불러오기

    Optional<QnAEntity> findByQnaUid(String qnaUid);

}
