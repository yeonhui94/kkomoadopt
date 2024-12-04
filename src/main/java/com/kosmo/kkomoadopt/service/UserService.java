package com.kosmo.kkomoadopt.service;

import com.kosmo.kkomoadopt.dto.RegisterUserDTO;
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

    // 이메일 중복 체크
    public boolean checkEmail(String email) {
        // 이메일이 이미 존재하는지 확인
        return userRepository.existsByEmail(email);
    }

    // 닉네임 중복 체크
    public boolean checkNickname(String nickname) {
        // 닉네임이 이미 존재하는지 확인
        return userRepository.existsByNickname(nickname);
    }

    // 이메일과 닉네임 모두 중복 체크
    public boolean checkEmailOrNickname(String email, String nickname) {
        // 이메일 또는 닉네임 중복 여부를 확인
        return userRepository.existsByEmailOrNickname(email, nickname);
    }

    // 회원 가입 처리
    public boolean registerUser(RegisterUserDTO registerUserDTO) {
        if (checkEmail(registerUserDTO.email()) || checkNickname(registerUserDTO.nickname())) {
            return false; // 이메일 또는 닉네임 중복
        }

        // UserEntity 객체를 생성하고, 저장
        // 회원 가입 로직 작성
        UserEntity userEntity = new UserEntity();
        userEntity.setEmail(registerUserDTO.email());
        userEntity.setName(registerUserDTO.name());
        userEntity.setPhoneNumber(registerUserDTO.phoneNumber());
        userEntity.setNickname(registerUserDTO.nickname());
        userEntity.setPassword(registerUserDTO.password());  // 비밀번호 암호화 필요

        userRepository.save(userEntity);
        return true; // 성공적으로 가입 완료
    }

    // dummy-Users 저장 메서드
    public List<UserEntity> saveUsers(List<UserEntity> userEntities) {
        return userRepository.saveAll(userEntities);
    }

}