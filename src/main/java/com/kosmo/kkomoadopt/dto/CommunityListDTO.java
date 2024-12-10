package com.kosmo.kkomoadopt.dto;

import java.time.LocalDateTime;
import java.util.List;

public record CommunityListDTO
        (
                List<Post> communityList,
                long totalCnt,
                long currentPageNum
        ){

        public record Post(
                Integer postId,
                PostCategory postCategory,
                String postTitle,
                String postContent,
                LocalDateTime postCreatedAt,
                List<String> postImgUrl,
                Boolean isDeleted,
                String deleteReason,
                Integer postViewCount,
                String postNickname
        ) {
        }
}
