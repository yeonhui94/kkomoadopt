package com.kosmo.kkomoadopt.controller;

import com.kosmo.kkomoadopt.dto.LoginRequestDTO;
import com.kosmo.kkomoadopt.dto.LoginResponseDTO;
import com.kosmo.kkomoadopt.dto.RegisterUserDTO;
import com.kosmo.kkomoadopt.entity.UserEntity;
import com.kosmo.kkomoadopt.repository.UserRepository;
import com.kosmo.kkomoadopt.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/user")
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
    public ResponseEntity<String> checkEmail(@RequestParam("email") String email) {
        boolean emailExists = userRepository.existsByEmail(email);
        if (emailExists) {
            return ResponseEntity.badRequest().body("이미 존재하는 이메일입니다.");
        }
        return ResponseEntity.ok("사용 가능한 이메일입니다.");
    }

    // 닉네임 중복 체크 API
    @GetMapping("/check/nickname")
    public ResponseEntity<String> checkNickname(@RequestParam("nickname") String nickname) {
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

    // 로그인 처리 API
    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> loginUser(@RequestBody LoginRequestDTO loginRequestDTO, HttpServletRequest request) {
        boolean isAuthenticated = userService.loginUser(loginRequestDTO, request);

        if (isAuthenticated) {
            UserEntity user = userRepository.findByEmail(loginRequestDTO.email()).orElse(null);
            if (user != null){
                // 응답을 생성할 때 유효성 검사를 진행할 수 있습니다.
                LoginResponseDTO responseDTO = new LoginResponseDTO(user.getAuthority(), user.getNickname());
                return ResponseEntity.ok(responseDTO);
            }
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
    }

    // 로그아웃 처리 API
    @PostMapping("/logout")
    public ResponseEntity<String> logoutUser(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null) {
            session.invalidate();  // 세션 무효화
        }
        return ResponseEntity.ok("로그아웃 성공");
    }

    // 로그인 상태 확인 API
    @GetMapping("/check/login")
    public ResponseEntity<String> checkLoginStatus(HttpServletRequest request) {
        HttpSession session = request.getSession(false);
        if (session != null && session.getAttribute("userId") != null) {
            return ResponseEntity.ok("로그인 상태입니다.");
        }
        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("로그인하지 않았습니다.");
    }

    // Dummy-Users 등록
//    @PostMapping("/dummy_users")
//    public ResponseEntity<List<UserEntity>> createUsers(@RequestBody List<UserEntity> userEntities) {
//        List<UserEntity> savedUsers = userService.saveUsers(userEntities);
//        return new ResponseEntity<>(savedUsers, HttpStatus.CREATED);
//    }
}