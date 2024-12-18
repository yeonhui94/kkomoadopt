package com.kosmo.kkomoadopt.repository;

import com.kosmo.kkomoadopt.entity.AdoptionNoticeEntity;
import com.kosmo.kkomoadopt.entity.UserEntity;
import com.kosmo.kkomoadopt.enums.NoticeCategory;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<UserEntity, String> {

    // 이메일로 중복 체크
    boolean existsByEmail(String email);

    // 닉네임으로 중복 체크
    boolean existsByNickname(String nickname);

    // 이메일과 닉네임 모두 중복 체크
    boolean existsByEmailOrNickname(String email, String nickname);

    // 이메일로 사용자 조회
    Optional<UserEntity> findByEmail(String email);

    // 아이디 조회
    Optional<UserEntity> findByUserId(String userId);

    // nickname으로 userId를 찾는 쿼리
    UserEntity findByNickname(String nickname);

    // 여러 userId로 UserEntity 조회
    List<UserEntity> findByUserIdIn(List<String> userIds);

    Page<UserEntity> findAllByIsBlacklisted(Boolean blackYn ,Pageable pageable);
    @Query("SELECT a FROM UserEntity a WHERE a.nickname LIKE %:query% OR a.email LIKE %:query% AND isBlacklisted = :blackListed"  )
    Page<UserEntity> findEmailOrNickByBlackUser(@Param("query")String Query,@Param("blackListed")Boolean blackListed,Pageable pageable);


    @Query("SELECT a FROM UserEntity a WHERE a.nickname LIKE %:query% OR a.email LIKE %:query%" )
    Page<UserEntity> findEmailOrNick(@Param("query") String query, Pageable pageable);

    // 이름과 전화번호로 사용자를 찾는 메서드
    Optional<UserEntity> findByNameAndPhoneNumber(String name, String phoneNumber);
//
//    // 유저 전체 조회
//    Page<UserEntity> findAll(Pageable pageable);
//
//    // 블랙리스트 된 유저 조회
//    Page<UserEntity> findByNoticeCategory(NoticeCategory noticeCategory, Pageable pageable);
}