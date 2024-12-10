package com.kosmo.kkomoadopt.dto;



public record CommunityDTO(
        PostCategory postCategory,
        String postTitle,
        String postContent,
        Boolean isDeleted,
        String deleteReason,
        String postAuthor
){
}
