package com.kosmo.kkomoadopt.service;

import com.kosmo.kkomoadopt.entity.CommunityPostEntity;
import com.kosmo.kkomoadopt.entity.UserEntity;
import com.kosmo.kkomoadopt.repository.CommunityPostRepository;
import com.kosmo.kkomoadopt.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class CommunityPostService {

    private final CommunityPostRepository communityPostRepository;

    @Autowired
    public CommunityPostService(CommunityPostRepository communityPostRepository) {
        this.communityPostRepository = communityPostRepository;
    }

    // 서비스 메서드에서 postId를 1부터 채번하여 처리
    public CommunityPostEntity createPost(CommunityPostEntity newPost) {
        // 현재 DB에 존재하는 최대 postId 값을 조회
        Integer maxPostId = communityPostRepository.findMaxPostId();

        // 만약 DB에 저장된 postId가 없다면, 1부터 시작
        if (maxPostId == null) {
            newPost.setPostId(1);  // 첫 번째 게시글은 postId 1
        } else {
            newPost.setPostId(maxPostId + 1);  // 기존의 최대 postId 값에 1을 더해 다음 postId를 설정
        }

        // 나머지 필드 세팅
        newPost.setPostCreatedAt(LocalDateTime.now());
        newPost.setPostUpdatedAt(LocalDateTime.now());
        newPost.setIsDeleted(false);  // 기본값 설정

        // 저장
        return communityPostRepository.save(newPost);
    }

    // dummy-Posts 저장 메서드
    public List<CommunityPostEntity> savePosts(List<CommunityPostEntity> communityPostEntities) {
        return communityPostRepository.saveAll(communityPostEntities);
    }
}
