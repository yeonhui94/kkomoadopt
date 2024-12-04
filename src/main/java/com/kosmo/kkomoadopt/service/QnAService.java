package com.kosmo.kkomoadopt.service;

import com.kosmo.kkomoadopt.entity.CommunityPostEntity;
import com.kosmo.kkomoadopt.entity.QnAEntity;
import com.kosmo.kkomoadopt.repository.QnARepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class QnAService {

    private final QnARepository qnARepository;

    @Autowired
    public QnAService(QnARepository qnARepository) {
        this.qnARepository = qnARepository;
    }

    // dummy-anas 저장 메서드
    public List<QnAEntity> saveQnas(List<QnAEntity> qnAEntities) {
        return qnARepository.saveAll(qnAEntities);
    }
}
