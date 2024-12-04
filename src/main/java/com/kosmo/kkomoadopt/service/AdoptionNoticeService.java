package com.kosmo.kkomoadopt.service;

import com.kosmo.kkomoadopt.entity.AdoptionNoticeEntity;
import com.kosmo.kkomoadopt.entity.CommunityPostEntity;
import com.kosmo.kkomoadopt.repository.AdoptionNoticeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdoptionNoticeService {

    private final AdoptionNoticeRepository adoptionNoticeRepository;

    @Autowired
    public AdoptionNoticeService(AdoptionNoticeRepository adoptionNoticeRepository) {
        this.adoptionNoticeRepository = adoptionNoticeRepository;
    }

    // dummy-Notices 저장 메서드
    public List<AdoptionNoticeEntity> saveNotices(List<AdoptionNoticeEntity> adoptionNoticeEntities) {
        return adoptionNoticeRepository.saveAll(adoptionNoticeEntities);
    }
}
