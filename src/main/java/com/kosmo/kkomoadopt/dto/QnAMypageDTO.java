package com.kosmo.kkomoadopt.dto;

import com.kosmo.kkomoadopt.enums.QnAState;

import java.time.LocalDateTime;

public record QnAMypageDTO(
        String qnaUid,
        Integer qnaId,
        String qnaTitle,
        LocalDateTime qnaCreatedAt,
        QnAState qnaState,
        String userId,
        String answerAuthor
) {
}
