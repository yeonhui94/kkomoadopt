package com.kosmo.kkomoadopt.dto;

public record QnADTO(
        String qnaUid,
        String userId,
        String qnaTitle,
        String qnaContent,
        Integer qnaPassword,
        String qnaAnswer

) {
}
