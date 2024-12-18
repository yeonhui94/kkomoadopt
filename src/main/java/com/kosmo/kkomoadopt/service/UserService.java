package com.kosmo.kkomoadopt.service;

import com.kosmo.kkomoadopt.dto.*;
import com.kosmo.kkomoadopt.enums.Provider;
import com.kosmo.kkomoadopt.entity.UserEntity;
import com.kosmo.kkomoadopt.repository.CommunityPostRepository;
import com.kosmo.kkomoadopt.repository.UserRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final CommunityPostRepository communityPostRepository;

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
            session.setAttribute("userId", user.getUserId());
            session.setAttribute("email", user.getEmail());
            session.setAttribute("name", user.getName());
            session.setAttribute("phoneNumber", user.getPhoneNumber());
            session.setAttribute("nickname", user.getNickname());
            session.setAttribute("password", user.getPassword());
            session.setAttribute("user_create", user.getUserCreate());
            session.setAttribute("userImgUrl", user.getUserImgUrl());
            session.setAttribute("profileText", user.getProfileText());
            session.setAttribute("userLastLogin", user.getUserLastLogin());
            session.setAttribute("isBlacklisted", user.getIsBlacklisted());
            session.setAttribute("socialId", user.getSocialId());
            session.setAttribute("provider", user.getProvider());
            session.setAttribute("authority", user.getAuthority());
            session.setAttribute("blacklists", user.getBlacklists());
            session.setAttribute("scraps", user.getScraps());

            return true;
        }

        return false; // 사용자가 없거나 비밀번호가 일치하지 않으면 실패
    }

    public boolean saveScarpUser (String adoptNum, HttpServletRequest request) {

        boolean result = false;
        HttpSession session = request.getSession();
        String userId = (String)session.getAttribute("userId");
        UserEntity user = userRepository.findById(userId).orElse(null);
        System.out.println("adoptNum "+adoptNum);
        System.out.println("user "+ user);
        if(user != null) {
            List<String> scrapList = user.getScraps();
            String scrapNum = "";
            for(int idx = 0 ; idx < scrapList.size(); idx++) {
                scrapNum =  scrapList.get(idx);
                if(scrapNum.equals(adoptNum)) {
                    scrapList.remove(idx);
                    result = true;
                }
            }

            if(!result) {
                scrapList.add(adoptNum);

            }

            user.setScraps(scrapList);
            user = userRepository.save(user);
            if(user != null) {
                result = true;
            }
        }


        return result;
    }

    /**
     *
     * @param pageable
     * @param query
     * @return
     */
    public Page<UserEntity> getUserList(Pageable pageable,String query) {
        Page<UserEntity> result= null;

        if(query != null && (!"".equals(query))) {
             result = userRepository.findEmailOrNick(query,pageable);
        } else {
            result =userRepository.findAll( pageable);
        }

        System.out.println("타니");
        result = result.map(obj-> {
            System.out.println("userId :"+obj.getUserId());

            Long count = communityPostRepository.countByUserId(obj.getUserId());
            obj.setWriteCount(count);
            return obj;
        });


        return result;
    }


    public Page<UserEntity> searchBlackUserList(Pageable pageable,String query) {
        Page<UserEntity> result= null;

        if(query != null && (!"".equals(query))) {
            result = userRepository.findEmailOrNickByBlackUser(query,true,pageable);
        } else {
            result =userRepository.findAllByIsBlacklisted( true,pageable);
        }





        return result;
    }


    public boolean saveBlackUserList (String blackReason, List<String> blackList) {


        UserEntity entity = null;
        BlacklistDTO dto = null;
        ArrayList<BlacklistDTO> dtoList = new ArrayList<>();
        for(String nickname : blackList) {

            entity = userRepository.findByNickname(nickname);
            entity.setIsBlacklisted(true);
            dto = new BlacklistDTO(LocalDateTime.now(),blackReason);
            dtoList = new ArrayList<>();
            dtoList.add(dto);
            entity.setBlacklists(dtoList);
            userRepository.save(entity);
        }

        return true;
    }

    // 블랙리스트 유저 삭제
    public boolean delBlackUserList ( List<String> blackList) {


        UserEntity entity = null;
        BlacklistDTO dto = null;
        ArrayList<BlacklistDTO> dtoList = new ArrayList<>();
        for(String nickname : blackList) {

            entity = userRepository.findByNickname(nickname);
            entity.setIsBlacklisted(false);

            dtoList = new ArrayList<>();
            entity.setBlacklists(dtoList);
            userRepository.save(entity);
        }

        return true;
    }


    // 이름과 전화번호로 이메일 찾기
    public String findEmailByNameAndPhoneNumber(String name, String phoneNumber) {
        UserEntity user = userRepository.findByNameAndPhoneNumber(name, phoneNumber)
                .orElseThrow(() -> new IllegalArgumentException("이름과 전화번호로 사용자를 찾을 수 없습니다."));
        return user.getEmail();
    }
}