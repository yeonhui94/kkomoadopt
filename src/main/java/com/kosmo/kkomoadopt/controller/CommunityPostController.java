package com.kosmo.kkomoadopt.controller;

import com.kosmo.kkomoadopt.entity.CommunityPostEntity;
import com.kosmo.kkomoadopt.service.CommunityPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/post")
public class CommunityPostController {

    private final CommunityPostService communityPostService;

    @Autowired
    public CommunityPostController(CommunityPostService communityPostService) {
        this.communityPostService = communityPostService;
    }

    // Dummy-Posts 등록
    @PostMapping("/dummy_posts")
    public ResponseEntity<List<CommunityPostEntity>> createPosts(@RequestBody List<CommunityPostEntity> communityPostEntities) {
        List<CommunityPostEntity> savedPosts = communityPostService.savePosts(communityPostEntities);
        return new ResponseEntity<>(savedPosts, HttpStatus.CREATED);
    }
}
