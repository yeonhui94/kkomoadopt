package com.kosmo.kkomoadopt.controller;

import com.kosmo.kkomoadopt.entity.CommunityPostEntity;
import com.kosmo.kkomoadopt.entity.VisitRequestEntity;
import com.kosmo.kkomoadopt.service.VisitRequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/visit")
public class VisitRequestController {

    private final VisitRequestService visitRequestService;

    @Autowired
    public VisitRequestController(VisitRequestService visitRequestService) {
        this.visitRequestService = visitRequestService;
    }

    // Dummy-Requests 등록
    @PostMapping("/dummy_requests")
    public ResponseEntity<List<VisitRequestEntity>> createRequests(@RequestBody List<VisitRequestEntity> visitRequestEntities) {
        List<VisitRequestEntity> savedRequests = visitRequestService.saveRequests(visitRequestEntities);
        return new ResponseEntity<>(savedRequests, HttpStatus.CREATED);
    }
}
