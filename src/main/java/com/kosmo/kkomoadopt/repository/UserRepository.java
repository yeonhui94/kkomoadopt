package com.kosmo.kkomoadopt.repository;

import com.kosmo.kkomoadopt.entity.UserEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

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
}