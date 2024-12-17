package com.kosmo.kkomoadopt.repository;

import com.kosmo.kkomoadopt.entity.AdoptionNoticeEntity;
import com.kosmo.kkomoadopt.enums.NoticeCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Optional;

@Repository
public interface AdoptionNoticeRepository extends JpaRepository<AdoptionNoticeEntity, String> {
    // noticeUid로 공지사항 찾기
    Optional<AdoptionNoticeEntity> findByNoticeUid(String noticeUid);

    // 입양 공고 전체 조회


    // 입양 공고 전체 조회
    Page<AdoptionNoticeEntity> findAll(Pageable pageable);

    // 입양 공고 전체 조회(입양종료일 안지난것만)
    Page<AdoptionNoticeEntity> findByEuthanasiaDateGreaterThan(@Param("euthanasiaDate")LocalDate euthanasiaDate, Pageable pageable);

    // 카테고리로 입양 공고 조회
    Page<AdoptionNoticeEntity> findByNoticeCategory(@Param("noticeCategory")NoticeCategory noticeCategory, Pageable pageable);

    // 카테고리로 입양 공고 조회(입양종료일 안지난것만)
    Page<AdoptionNoticeEntity> findByNoticeCategoryAndEuthanasiaDateGreaterThan(@Param("noticeCategory")NoticeCategory noticeCategory, @Param("euthanasiaDate")LocalDate euthanasiaDate, Pageable pageable);

    // 품종 전체 검색을 위한 쿼리
    @Query("SELECT a FROM AdoptionNoticeEntity a WHERE a.animalType LIKE %:searchTerm%" )
    Page<AdoptionNoticeEntity> findBySearchTerm(@Param("searchTerm") String searchTerm, Pageable pageable);

    // 공고번호 전체 검색을 위한 쿼리
    @Query("SELECT a FROM AdoptionNoticeEntity a WHERE a.announcementNum LIKE %:searchTerm%" )
    Page<AdoptionNoticeEntity> findBySearchTerm2(@Param("searchTerm") String searchTerm, Pageable pageable);

    // 품종 카테고리 검색을 위한 쿼리
    @Query("SELECT a FROM AdoptionNoticeEntity a WHERE a.animalType LIKE %:searchTerm% AND noticeCategory = :noticeCategory" )
    Page<AdoptionNoticeEntity> findBySearchTermCategory(@Param("searchTerm") String searchTerm, @Param("noticeCategory") NoticeCategory noticeCategory,Pageable pageable);

    // noticeUid를 기준으로 삭제하고, 삭제된 레코드 수를 반환
    int deleteByNoticeUid(String noticeUid);

    // announcementNum 찾기
    Optional<AdoptionNoticeEntity> findByAnnouncementNum(String announcementNum);

    long count();
}
