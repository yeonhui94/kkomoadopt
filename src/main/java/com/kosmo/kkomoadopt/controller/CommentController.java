package com.kosmo.kkomoadopt.controller;

import com.kosmo.kkomoadopt.entity.CommentEntity;
import com.kosmo.kkomoadopt.entity.CommunityPostEntity;
import com.kosmo.kkomoadopt.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/comment")
public class CommentController {

    private final CommentService commentService;

    @Autowired
    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    // Dummy-comments 등록
    @PostMapping("/dummy_comments")
    public ResponseEntity<List<CommentEntity>> createComments(@RequestBody List<CommentEntity> commentEntities) {
        List<CommentEntity> savedComments = commentService.savecomments(commentEntities);
        return new ResponseEntity<>(savedComments, HttpStatus.CREATED);
    }
}
