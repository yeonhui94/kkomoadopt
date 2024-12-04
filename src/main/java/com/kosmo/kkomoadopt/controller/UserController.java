package com.kosmo.kkomoadopt.controller;

import com.kosmo.kkomoadopt.dto.Authority;
import com.kosmo.kkomoadopt.dto.RegisterUserDTO;
import com.kosmo.kkomoadopt.entity.UserEntity;
import com.kosmo.kkomoadopt.repository.UserRepository;
import com.kosmo.kkomoadopt.service.UserService;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.ObjectError;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/user")
public class UserController {

    private final UserService userService;
    private final UserRepository userRepository;

    @Autowired
    public UserController(UserService userService, UserRepository userRepository) {
        this.userService = userService;
        this.userRepository = userRepository;
    }

    // 이메일 중복 체크 API
    @GetMapping("/check/email")
    public ResponseEntity<String> checkEmail(@RequestParam String email) {
        boolean emailExists = userRepository.existsByEmail(email);
        if (emailExists) {
            return ResponseEntity.badRequest().body("이미 존재하는 이메일입니다.");
        }
        return ResponseEntity.ok("사용 가능한 이메일입니다.");
    }

    // 닉네임 중복 체크 API
    @GetMapping("/check/nickname")
    public ResponseEntity<String> checkNickname(@RequestParam String nickname) {
        boolean nicknameExists = userRepository.existsByNickname(nickname);
        if (nicknameExists) {
            return ResponseEntity.badRequest().body("이미 존재하는 닉네임입니다.");
        }
        return ResponseEntity.ok("사용 가능한 닉네임입니다.");
    }

    // 회원가입 처리 API
    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody @Valid RegisterUserDTO registerUserDTO) {
        boolean isRegistered = userService.registerUser(registerUserDTO);

        if (!isRegistered) {
            return ResponseEntity.badRequest().body("이메일 또는 닉네임이 이미 존재합니다.");
        }

        // 가입 성공
        return ResponseEntity.ok("회원가입 성공");
    }

    // Dummy-Users 등록
    @PostMapping("/dummy_users")
    public ResponseEntity<List<UserEntity>> createUsers(@RequestBody List<UserEntity> userEntities) {
        List<UserEntity> savedUsers = userService.saveUsers(userEntities);
        return new ResponseEntity<>(savedUsers, HttpStatus.CREATED);
    }
}