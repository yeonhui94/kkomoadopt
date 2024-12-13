package com.kosmo.kkomoadopt.service;

import com.kosmo.kkomoadopt.dto.QnADTO;
import com.kosmo.kkomoadopt.entity.QnAEntity;
import com.kosmo.kkomoadopt.enums.QnAState;
import com.kosmo.kkomoadopt.repository.QnARepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class QnAService {

    private final QnARepository qnARepository;
    private final FileService fileService;
    @Autowired
    private EntityManager em;

    // QnA 저장 메서드
    public boolean saveQnA(QnADTO qnADTO,MultipartFile[] files) {

        QnAEntity qnAEntity = new QnAEntity();

        Integer maxPostId = qnARepository.findMaxQnaId();
        // 만약 DB에 저장된 postId가 없다면, 1부터 시작
        if (maxPostId == null) {
            qnAEntity.setQnaId(1);  // 첫 번째 게시글은 postId 1
        } else {
            qnAEntity.setQnaId(maxPostId + 1);  // 기존의 최대 postId 값에 1을 더해 다음 postId를 설정
        }
        // 엔티티 생성 및 기본 값 설정
        qnAEntity.setUserId(qnADTO.userId());
        qnAEntity.setQnaTitle(qnADTO.qnaTitle());
        qnAEntity.setQnaContent(qnADTO.qnaContent());
        qnAEntity.setQnaCreatedAt(LocalDateTime.now());
        qnAEntity.setQnaPassword(qnADTO.qnaPassword());
        // 파일 저장 및 처리
        List<String> fileNames = saveFiles(files); // 파일 저장 로직 분리
        if (fileNames != null && !fileNames.isEmpty()) {
            qnAEntity.setQnaRequestFile(fileNames);
        }
        // DB에 저장
        QnAEntity savedEntity = qnARepository.save(qnAEntity);
        return savedEntity != null;
    }

    private List<String> saveFiles(MultipartFile[] files) {
        if (files == null || files.length == 0) {
            return new ArrayList<>(); // 파일이 없으면 null 반환
        }
        try {
            String[] fileNames = fileService.saveFiles(files);
            if (fileNames != null && fileNames.length > 0) {
                System.out.println("파일 저장 성공: " + Arrays.toString(fileNames)); // 파일 이름 출력
                return Arrays.asList(fileNames); // 파일 이름 배열을 리스트로 변환하여 반환
            } else {
                System.out.println("파일 저장 실패");
                return null; // 파일 저장 실패 시
            }
        } catch (IOException e) {
            // 파일 저장 실패 시 예외 처리
            e.printStackTrace();
            throw new RuntimeException("파일 저장 중 오류가 발생했습니다.", e);
        }
    }


    // QnA 답변(update) 메서드
    public boolean updateQna(QnADTO qnADTO, String authority, String sessionUserId) {
        // QnA UID로 DB에서 해당 댓글 조회
        Optional<QnAEntity> existingQnAOptional = qnARepository.findById(qnADTO.qnaUid());

        if (existingQnAOptional.isEmpty()) {
            return false; // QnA가 존재하지 않으면 업데이트 실패
        }

        QnAEntity qnAEntity = existingQnAOptional.get();

        // ADMIN 권한인 경우: 모든 QnA 답변 가능
        if (authority.equals("ADMIN")) {
            // 관리자일 경우, 수정 가능한 로직 (작성자와 관계없이 수정)
            qnAEntity.setQnaAnswer(qnADTO.qnaAnswer());
            qnAEntity.setQnaState(QnAState.ANSCOMPLETE);  // 상태 변경
            qnAEntity.setAnswerAuthor("관리자");
        } else {
            // USER 권한인 경우 수정 불가
            return false; // USER는 수정할 수 없음
        }
        // QnA 답변 저장
        qnARepository.save(qnAEntity);

        return true;
    }

    public boolean isQnaAuthor(String qnaUid, String userId) {
        // 댓글 ID와 작성자 ID를 기반으로 댓글 작성 여부 확인
        return qnARepository.existsByQnaUidAndUserId(qnaUid, userId);
    }

    // QnA 삭제
    public boolean deleteQnAByQnaUid(String qnaUid) {
        Optional<QnAEntity> qnAEntityOptional = qnARepository.findById(qnaUid);

        if (qnAEntityOptional.isEmpty()) {
            return false; // QnA가 없으면 삭제 실패
        }
        QnAEntity qnAEntity = qnAEntityOptional.get();
        qnARepository.delete(qnAEntity); // QnA 삭제
        return true; // 삭제 성공
    }
}
