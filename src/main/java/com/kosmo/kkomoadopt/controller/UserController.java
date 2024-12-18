package com.kosmo.kkomoadopt.controller;

import com.kosmo.kkomoadopt.dto.LoginRequestDTO;
import com.kosmo.kkomoadopt.dto.LoginResponseDTO;
import com.kosmo.kkomoadopt.dto.RegisterUserDTO;
import com.kosmo.kkomoadopt.dto.UserRequest;
import com.kosmo.kkomoadopt.entity.UserEntity;
import com.kosmo.kkomoadopt.enums.NoticeCategory;
import com.kosmo.kkomoadopt.repository.UserRepository;
import com.kosmo.kkomoadopt.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
    public ResponseEntity<String> registerUser(@RequestBody RegisterUserDTO registerUserDTO) {
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
                // LoginResponseDTO 객체를 생성하여 응답으로 반환
                LoginResponseDTO responseDTO = new LoginResponseDTO(
                        user.getUserId(),
                        user.getNickname(),
                        user.getEmail(),
                        user.getName(),
                        user.getPhoneNumber(),
                        user.getPassword(),
                        user.getUserCreate(),
                        user.getUserImgUrl(),
                        user.getProfileText(),
                        user.getUserLastLogin(),
                        user.getIsBlacklisted(),
                        user.getSocialId(),
                        user.getProvider(),
                        user.getAuthority(),
                        user.getBlacklists(),
                        user.getScraps()
                );

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

    @PostMapping("/scrap/save")
    public ResponseEntity<Boolean> changeScrap(@RequestBody Map<String,Object> map, HttpServletRequest request){
        boolean result = userService.saveScarpUser((String)map.get("adoptNum"), request);

        return ResponseEntity.ok(result);//
    }
//    hkk

    // 유저가져오기
    @GetMapping("/user/list")
    public ResponseEntity<Page<UserEntity>> getUserList(@RequestParam(name = "page", defaultValue = "1") int page,   // 페이지 번호 (디폴트: 0)

                                              @RequestParam(name = "sortBy", defaultValue = "userLastLogin") String sortBy,  // 정렬 기준 (디폴트: "name")
                                              @RequestParam(name = "sortOrder", defaultValue = "desc") String sortOrder,
                                              @RequestParam(name = "query" , defaultValue = "") String query) {

        // 페이지와 정렬 설정
        Sort sort = Sort.by(Sort.Order.asc(sortBy));  // 기본 정렬은 오름차순
        if ("desc".equalsIgnoreCase(sortOrder)) {
            sort = Sort.by(Sort.Order.desc(sortBy));
        }

        Pageable pageable = PageRequest.of(page-1, 8,sort );


        Page<UserEntity> result = userService.getUserList(pageable,query);


        return ResponseEntity.ok(result);
    }
    @GetMapping("/search/blacklist")
    public ResponseEntity<Page<UserEntity>> searchBlackList(@RequestParam(name = "page", defaultValue = "1") int page,   // 페이지 번호 (디폴트: 0)
                                                            @RequestParam(name = "sortBy", defaultValue = "userLastLogin") String sortBy,  // 정렬 기준 (디폴트: "name")
                                                            @RequestParam(name = "sortOrder", defaultValue = "desc") String sortOrder,
                                                            @RequestParam(name = "query" , defaultValue = "") String query){


        // 페이지와 정렬 설정
        Sort sort = Sort.by(Sort.Order.asc(sortBy));  // 기본 정렬은 오름차순
        if ("desc".equalsIgnoreCase(sortOrder)) {
            sort = Sort.by(Sort.Order.desc(sortBy));
        }

        Pageable pageable = PageRequest.of(page-1, 8,sort );
        Page<UserEntity> entityList =  userService.searchBlackUserList(pageable,query);

        return ResponseEntity.ok(entityList);
    }


    @PostMapping("/regi/blacklist")
    public ResponseEntity<Boolean> regiBlackList(@RequestBody Map<String,Object> map){
        List<String> blackList = (ArrayList) map.get("blackList");
        String blackReason = (String)map.get("blackReason");

         Boolean result = userService.saveBlackUserList(blackReason,blackList);

        return ResponseEntity.ok(result);
    }

    @PostMapping("/del/blacklist")
    public ResponseEntity<Boolean> deleteBlackList(@RequestBody Map<String,Object> map){
        List<String> blackList = (ArrayList) map.get("blackList");


        userService.delBlackUserList(blackList);

        return ResponseEntity.ok(null);
    }

    @PostMapping("/id")
    public ResponseEntity<String> findUserId(@RequestBody UserRequest userRequest) {
        // DTO에서 name과 phoneNumber를 꺼냄
        String name = userRequest.getName();
        String phoneNumber = userRequest.getPhoneNumber();

        // 서비스 호출
        String email = userService.findEmailByNameAndPhoneNumber(name, phoneNumber);

        if (email == null) {
            return ResponseEntity.status(404).body("User not found");
        }
        return ResponseEntity.ok(email);
    }





    // Dummy-Users 등록
//    @PostMapping("/dummy_users")
//    public ResponseEntity<List<UserEntity>> createUsers(@RequestBody List<UserEntity> userEntities) {
//        List<UserEntity> savedUsers = userService.saveUsers(userEntities);
//        return new ResponseEntity<>(savedUsers, HttpStatus.CREATED);
//    }
}