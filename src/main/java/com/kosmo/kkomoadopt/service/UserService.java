package com.kosmo.kkomoadopt.service;

import com.kosmo.kkomoadopt.dto.LoginRequestDTO;
import com.kosmo.kkomoadopt.dto.Provider;
import com.kosmo.kkomoadopt.dto.RegisterUserDTO;
import com.kosmo.kkomoadopt.entity.UserEntity;
import com.kosmo.kkomoadopt.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;

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

        // 회원 가입 로직 작성
        UserEntity userEntity = new UserEntity();
        userEntity.setEmail(registerUserDTO.email());
        userEntity.setName(registerUserDTO.name());
        userEntity.setPhoneNumber(registerUserDTO.phoneNumber());
        userEntity.setNickname(registerUserDTO.nickname());
        userEntity.setPassword(registerUserDTO.password());

        // 회원가입시 나머지 항목 기본값 설정
        userEntity.setProvider(Provider.NORMAL); // provider 기본값 설정
        userEntity.setScraps(new ArrayList<>()); // scraps 빈 배열 설정

        userRepository.save(userEntity);
        return true; // 성공적으로 가입 완료
    }

    // 로그인 처리
    public boolean loginUser(LoginRequestDTO loginRequestDTO, HttpServletRequest request) {
        // 사용자가 입력한 이메일을 기반으로 사용자 조회
        UserEntity user = userRepository.findByEmail(loginRequestDTO.email()).orElse(null);

        if (user != null && loginRequestDTO.password().equals(user.getPassword())) {
            // 로그인 성공: 세션에 사용자 정보 저장
            HttpSession session = request.getSession();
            System.out.println("Saving authority to session: " + user.getAuthority());  // 로그로 authority 확인
            session.setAttribute("authority", user.getAuthority());
            session.setAttribute("nickname", user.getNickname());
            return true;
        }

        return false; // 사용자가 없거나 비밀번호가 일치하지 않으면 실패
    }



//    // dummy-Users 저장 메서드
//    public List<UserEntity> saveUsers(List<UserEntity> userEntities) {
//        return userRepository.saveAll(userEntities);
//    }

}