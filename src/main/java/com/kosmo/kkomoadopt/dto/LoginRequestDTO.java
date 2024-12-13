package com.kosmo.kkomoadopt.dto;

import com.kosmo.kkomoadopt.enums.Authority;
import com.kosmo.kkomoadopt.enums.Provider;

import java.time.LocalDateTime;
import java.util.List;

public record LoginRequestDTO(
        String userId,
        String nickname,
        String email,
        String name,
        String phoneNumber,
        String password,
        LocalDateTime userCreate,
        String userImgUrl,
        String profileText,
        LocalDateTime userLastLogin,
        Boolean isBlacklisted,
        String socialId,
        Provider provider,
        Authority authority,
        List<BlacklistDTO> blacklists,
        List<String> scraps
) {
}
