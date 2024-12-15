package com.kosmo.kkomoadopt.dto;


import com.kosmo.kkomoadopt.enums.PostCategory;

public record CommunityDTO(
        String postUid,
        PostCategory postCategory,
        String postTitle,
        String postContent,
        Boolean isDeleted,
        String deleteReason,
        String userId,
        String postAuthor
){
}
