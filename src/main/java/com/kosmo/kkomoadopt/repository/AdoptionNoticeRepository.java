package com.kosmo.kkomoadopt.repository;

import com.kosmo.kkomoadopt.entity.AdoptionNoticeEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdoptionNoticeRepository extends JpaRepository<AdoptionNoticeEntity, String> {
    // noticeUid로 공지사항 찾기
    Optional<AdoptionNoticeEntity> findByNoticeUid(String noticeUid);

    // noticeUid를 기준으로 삭제하고, 삭제된 레코드 수를 반환
    int deleteByNoticeUid(String noticeUid);

    long count();
}
