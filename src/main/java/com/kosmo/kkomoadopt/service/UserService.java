package com.kosmo.kkomoadopt.service;

import com.kosmo.kkomoadopt.entity.UserEntity;
import com.kosmo.kkomoadopt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // 사용자 저장 메서드
    public UserEntity saveUser(UserEntity userEntity) {
        return userRepository.save(userEntity); // JPA repository를 이용해 데이터베이스에 저장
    }

    // dummy-Users 저장 메서드
    public List<UserEntity> saveUsers(List<UserEntity> userEntities) {
        return userRepository.saveAll(userEntities);
    }

    // 사용자 ID로 사용자 찾기
    public UserEntity findById(String userId) {
        return userRepository.findById(userId)
                .orElseThrow(() -> new RuntimeException("User not found with id: " + userId));
    }

    // 사용자 엔티티 저장 (이미지 URL 업데이트 등)
    public UserEntity save(UserEntity user) {
        return userRepository.save(user);
    }
}