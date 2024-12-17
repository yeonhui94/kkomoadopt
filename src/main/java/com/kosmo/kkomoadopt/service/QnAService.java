package com.kosmo.kkomoadopt.service;

import com.kosmo.kkomoadopt.dto.CommunityMypageDTO;
import com.kosmo.kkomoadopt.dto.QnADTO;
import com.kosmo.kkomoadopt.dto.QnAListDTO;
import com.kosmo.kkomoadopt.dto.QnAMypageDTO;
import com.kosmo.kkomoadopt.entity.CommunityPostEntity;
import com.kosmo.kkomoadopt.entity.QnAEntity;
import com.kosmo.kkomoadopt.entity.UserEntity;
import com.kosmo.kkomoadopt.enums.QnAState;
import com.kosmo.kkomoadopt.repository.QnARepository;
import com.kosmo.kkomoadopt.repository.UserRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class QnAService {
    @Autowired
    private final QnARepository qnARepository;
    @Autowired
    private final FileService fileService;
    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private EntityManager em;

    // QnA 저장 메서드
    public boolean saveQnA(QnADTO qnADTO,MultipartFile[] files,  @SessionAttribute("userId") String userId) {

        QnAEntity qnAEntity = new QnAEntity();

        Integer maxPostId = qnARepository.findMaxQnaId();
        // 만약 DB에 저장된 postId가 없다면, 1부터 시작
        if (maxPostId == null) {
            qnAEntity.setQnaId(1);  // 첫 번째 게시글은 postId 1
        } else {
            qnAEntity.setQnaId(maxPostId + 1);  // 기존의 최대 postId 값에 1을 더해 다음 postId를 설정
        }
        // 엔티티 생성 및 기본 값 설정
        qnAEntity.setQnaTitle(qnADTO.qnaTitle());
        qnAEntity.setQnaContent(qnADTO.qnaContent());
        qnAEntity.setQnaCreatedAt(LocalDateTime.now());
        qnAEntity.setQnaPassword(qnADTO.qnaPassword());

        if (userId == null) {
            throw new RuntimeException("User is not logged in or userId is not in session");
        }

        // userId로 작성자 설정
        qnAEntity.setUserId(userId);

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
    public boolean updateQna(QnADTO qnADTO, String authority, @SessionAttribute("userId") String userId) {
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

    // QnA 작성자인지 확인하는 메서드
    public boolean isQnaAuthor(String qnaUid, String userId) {
        return qnARepository.existsByQnaUidAndUserId(qnaUid, userId);
    }

    // QnA 삭제
    public boolean deleteQnAByQnaUid(String qnaUid, String userId) {
        // QnA가 존재하는지 확인
        Optional<QnAEntity> qnAEntityOptional = qnARepository.findById(qnaUid);
        if (qnAEntityOptional.isEmpty()) {
            return false; // QnA가 존재하지 않으면 삭제 실패
        }

        // QnA 작성자가 현재 로그인한 사용자와 일치하는지 확인
        QnAEntity qnAEntity = qnAEntityOptional.get();
        if (!isQnaAuthor(qnaUid, userId)) {
            return false; // 작성자가 아니면 삭제 불가
        }

        // QnA 삭제
        qnARepository.delete(qnAEntity); // QnA 삭제
        return true; // 삭제 성공
    }


    // QNA 전체 글 가져오기
    public Page<QnAListDTO> getQnaList(Pageable pageable) {
        Page<QnAEntity> qnaList = qnARepository.findAll(pageable);  // 전체 데이터 조회

        return qnaList.map(qna -> {
            Optional<UserEntity> userOptional = userRepository.findById(qna.getUserId());
            String nickname = userOptional.map(UserEntity::getNickname).orElse("Unknown");

            // 3. 답변자 닉네임 조회
            String answerAuthor = null;
            if (qna.getAnswerAuthor() != null) {

                answerAuthor = qna.getAnswerAuthor()!=null ? qna.getAnswerAuthor() : "";
            }

            return new QnAListDTO(
                    qna.getQnaUid(),
                    qna.getQnaId(),
                    qna.getQnaTitle(),
                    qna.getQnaCreatedAt(),
                    qna.getQnaPassword(),
                    qna.getQnaState(),
                    qna.getQnaRequestFile(),
                    qna.getQnaContent(),
                    qna.getQnaAnswer(),
                    nickname,
                    answerAuthor,
                    qna.getQnaViewCount(),
                    null
            );
        });

    }
    // QnA 게시글 상세 조회
    public QnAListDTO getQnaPostUid(String qnaUid) {
        // qnaUid로 게시글 조회
        Optional<QnAEntity> optionalQna = qnARepository.findByQnaUid(qnaUid);

        // 결과가 없다면 예외 발생
        if (optionalQna.isEmpty()) {
            System.out.println("No QnA found with UID: " + qnaUid); // 존재하지 않는 경우 로그 출력
            throw new RuntimeException("QnA with UID " + qnaUid + " not found");
        }

        QnAEntity qna = optionalQna.get();

        // qna 객체 정보 출력
        System.out.println("QnA found: " + qna);

        // 유저 정보 조회
        Optional<UserEntity> userOptional = userRepository.findById(qna.getUserId());
        String nickname = userOptional.map(UserEntity::getNickname).orElse("Unknown");

        // 답변자 정보 조회
        String answerAuthor = null;
        UserEntity answerAuthorOptional = null;
        if (qna.getAnswerAuthor() != null) {
            answerAuthorOptional = userRepository.findByNickname(qna.getAnswerAuthor());
            answerAuthor = answerAuthorOptional.getNickname();
        }

        return new QnAListDTO(
                qna.getQnaUid(),
                qna.getQnaId(),
                qna.getQnaTitle(),
                qna.getQnaCreatedAt(),
                qna.getQnaPassword(),
                qna.getQnaState(),
                qna.getQnaRequestFile(),
                qna.getQnaContent(),
                qna.getQnaAnswer(),
                nickname,
                answerAuthor,
                qna.getQnaViewCount(),
                answerAuthorOptional != null ? answerAuthorOptional.getPhoneNumber() : null
        );
    }

    // QnAMypageDTO 변환 함수
    private QnAMypageDTO convertToQnaDTO(QnAEntity entity) {
        return new QnAMypageDTO(
                entity.getQnaUid(),
                entity.getQnaId(),
                entity.getQnaTitle(),
                entity.getQnaCreatedAt(),
                entity.getQnaState(),
                entity.getUserId(),
                entity.getAnswerAuthor()
        );
    }

    // 마이페이지 Qna 전체 데이터 불러오기
    public List<QnAMypageDTO> getMypageQnaList(){
        List<QnAEntity> qnAEntities = qnARepository.findAll();

        // QnAEntity 객체를 QnAMypageDTO 변환
        return qnAEntities.stream()
                .map(this::convertToQnaDTO)  // convertToQnaDTO 변환
                .collect(Collectors.toList());  // List로 수집
    }
}