package com.kosmo.kkomoadopt.controller;

import com.kosmo.kkomoadopt.dto.Authority;
import com.kosmo.kkomoadopt.entity.UserEntity;
import com.kosmo.kkomoadopt.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    // User 등록 API
    @PostMapping("/signin")
    public ResponseEntity<UserEntity> createUser(@RequestBody UserEntity userEntity) {
        // 프론트에서 name, phoneNumber, nickname, password를 입력받고,
        // 나머지 필드는 기본값을 사용하여 사용자 생성
        userEntity.setUserCreate(LocalDateTime.now()); // 기본값으로 생성일시 설정
        userEntity.setUserLastLogin(LocalDateTime.now()); // 기본값으로 마지막 로그인 시간 설정
        userEntity.setIsBlacklisted(false); // 기본값 false
        userEntity.setAuthority(Authority.USER); // 기본값으로 USER 권한 설정

        UserEntity savedUser = userService.saveUser(userEntity);  // 서비스 호출하여 저장
        return new ResponseEntity<>(savedUser, HttpStatus.CREATED); // 저장된 사용자 반환
    }

    // Dummy-Users 등록
    @PostMapping("/dummy_users")
    public ResponseEntity<List<UserEntity>> createUsers(@RequestBody List<UserEntity> userEntities) {
        List<UserEntity> savedUsers = userService.saveUsers(userEntities);  // 서비스 호출하여 저장
        return new ResponseEntity<>(savedUsers, HttpStatus.CREATED); // 저장된 사용자 목록 반환
    }
}