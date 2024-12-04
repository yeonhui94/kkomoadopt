package com.kosmo.kkomoadopt.service;

import com.kosmo.kkomoadopt.entity.CommentEntity;
import com.kosmo.kkomoadopt.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    private final CommentRepository commentRepository;

    @Autowired
    public CommentService(CommentRepository commentRepository) {
        this.commentRepository = commentRepository;
    }

    // dummy-comments 저장 메서드
    public List<CommentEntity> savecomments(List<CommentEntity> commentEntities) {
        return commentRepository.saveAll(commentEntities);
    }
}
