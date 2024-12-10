package com.kosmo.kkomoadopt.dto;


import com.kosmo.kkomoadopt.enums.PostCategory;

public record CommunityDTO(
        PostCategory postCategory,
        String postTitle,
        String postContent,
        Boolean isDeleted,
        String deleteReason,
        String postAuthor
){
}
