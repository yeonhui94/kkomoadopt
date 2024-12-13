package com.kosmo.kkomoadopt.repository;

import com.kosmo.kkomoadopt.entity.AdoptionNoticeEntity;
import com.kosmo.kkomoadopt.enums.NoticeCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface AdoptionNoticeRepository extends JpaRepository<AdoptionNoticeEntity, String> {
    // noticeUid로 공지사항 찾기
    Optional<AdoptionNoticeEntity> findByNoticeUid(String noticeUid);

    // 입양 공고 전체 조회
    Page<AdoptionNoticeEntity> findAll(Pageable pageable);

    // 카테고리로 입양 공고 조회
    Page<AdoptionNoticeEntity> findByNoticeCategory(NoticeCategory noticeCategory, Pageable pageable);

    // LIKE 검색을 위한 쿼리
    @Query("SELECT a FROM AdoptionNoticeEntity a WHERE a.animalType LIKE %:searchTerm% OR a.animalType LIKE %:searchTerm%")
    Page<AdoptionNoticeEntity> findBySearchTerm(String searchTerm, Pageable pageable);

    // noticeUid를 기준으로 삭제하고, 삭제된 레코드 수를 반환
    int deleteByNoticeUid(String noticeUid);



    long count();
}
