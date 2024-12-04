package com.kosmo.kkomoadopt.controller;

import com.kosmo.kkomoadopt.entity.AdoptionNoticeEntity;
import com.kosmo.kkomoadopt.service.AdoptionNoticeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/adopt")
public class AdoptionNoticeController {

    private final AdoptionNoticeService adoptionNoticeService;

    @Autowired
    public AdoptionNoticeController(AdoptionNoticeService adoptionNoticeService) {
        this.adoptionNoticeService = adoptionNoticeService;
    }

    // Dummy-notices 등록
    @PostMapping("/dummy_notices")
    public ResponseEntity<List<AdoptionNoticeEntity>> createNotices(@RequestBody List<AdoptionNoticeEntity> adoptionNoticeEntities) {
        List<AdoptionNoticeEntity> savedNotices = adoptionNoticeService.saveNotices(adoptionNoticeEntities);
        return new ResponseEntity<>(savedNotices, HttpStatus.CREATED);
    }
}
