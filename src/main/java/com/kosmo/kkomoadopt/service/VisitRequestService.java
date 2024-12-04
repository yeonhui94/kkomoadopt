package com.kosmo.kkomoadopt.service;

import com.kosmo.kkomoadopt.entity.CommunityPostEntity;
import com.kosmo.kkomoadopt.entity.VisitRequestEntity;
import com.kosmo.kkomoadopt.repository.VisitRequestRePository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VisitRequestService {

    private final VisitRequestRePository visitRequestRePository;

    @Autowired
    public VisitRequestService(VisitRequestRePository visitRequestRePository) {
        this.visitRequestRePository = visitRequestRePository;
    }

    // dummy-requests 저장 메서드
    public List<VisitRequestEntity> saveRequests(List<VisitRequestEntity> visitRequestEntities) {
        return visitRequestRePository.saveAll(visitRequestEntities);
    }
}
