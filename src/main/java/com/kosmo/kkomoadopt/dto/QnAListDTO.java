package com.kosmo.kkomoadopt.dto;

import com.kosmo.kkomoadopt.enums.QnAState;

import java.time.LocalDateTime;
import java.util.List;

public record QnAListDTO(
        String qnaUid,
        Integer qnaId,
        String qnaTitle,
        LocalDateTime qnaCreatedAt,
        Integer qnaPassword,
        QnAState qnaState,
        List<String> qnaRequestFile,
        String qnaContent,
        String qnaAnswer,
        String nickname,
        String answerAuthor,
        Integer qnaViewCount,
        String answerPhoneNumber
) {
}
