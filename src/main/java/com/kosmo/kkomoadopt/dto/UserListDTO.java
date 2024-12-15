package com.kosmo.kkomoadopt.dto;

import com.kosmo.kkomoadopt.enums.Authority;

import java.time.LocalDateTime;
import java.util.List;

public record UserListDTO(
        List<UserListDTO.Users> users,      // 공고 리스트
        long totalElements,        // 총 공고 수
        int pageNumber,
        List<String> scrapList
) {
public record Users(
        String userId,
        String email,
        String name,
        String phoneNumber,
        String nickname,
        LocalDateTime userCreate,
        String userImgUrl,
        String profileText,
        LocalDateTime userLastLogin,
        Boolean isBlacklisted,
        Authority authority,
        List<BlacklistDTO> blacklists
)
{ }
}

