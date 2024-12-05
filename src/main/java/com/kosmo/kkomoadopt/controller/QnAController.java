package com.kosmo.kkomoadopt.controller;

import com.kosmo.kkomoadopt.entity.CommunityPostEntity;
import com.kosmo.kkomoadopt.entity.QnAEntity;
import com.kosmo.kkomoadopt.service.QnAService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/qna")
public class QnAController {

    private final QnAService qnAService;

    @Autowired
    public QnAController(QnAService qnAService) {
        this.qnAService = qnAService;
    }

    // Dummy-qnas 등록
    @PostMapping("/dummy_qnas")
public ResponseEntity<List<QnAEntity>> createQnas(@RequestBody List<QnAEntity> qnAEntities) {
        List<QnAEntity> savedQnas = qnAService.saveQnas(qnAEntities);
        return new ResponseEntity<>(savedQnas, HttpStatus.CREATED);
    }
}
