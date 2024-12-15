package com.kosmo.kkomoadopt.service;

import com.kosmo.kkomoadopt.dto.CommentDTO;
import com.kosmo.kkomoadopt.dto.CommentListDTO;
import com.kosmo.kkomoadopt.entity.CommentEntity;
import com.kosmo.kkomoadopt.entity.CommunityPostEntity;
import com.kosmo.kkomoadopt.entity.UserEntity;
import com.kosmo.kkomoadopt.repository.CommentRepository;
import com.kosmo.kkomoadopt.repository.CommunityPostRepository;
import com.kosmo.kkomoadopt.repository.UserRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.xml.stream.events.Comment;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class CommentService {

    private final CommentRepository commentRepository;
    private final UserRepository userRepository;
    private final CommunityPostRepository communityPostRepository;

    @Autowired
    private EntityManager em;

    // post save 메서드
    public boolean saveComment(CommentDTO commentDTO) {

        CommentEntity commentEntity = new CommentEntity();

        // 엔티티 설정
        commentEntity.setCommentContent(commentDTO.commentContent());
        commentEntity.setCommentCreatedAt(LocalDateTime.now()); // 기본값 설정
        commentEntity.setCommentUpdatedAt(LocalDateTime.now()); // 기본값 설정
        commentEntity.setPostUid(commentDTO.postUid());
        commentEntity.setUserId(commentDTO.userId());

        // DB에 저장
        commentRepository.save(commentEntity);

        if(commentEntity != null) {
            return true;
        } else {
            return false;
        }
    }

    public boolean isCommentAuthor(String commentId, String userId) {
        // 댓글 ID와 작성자 ID를 기반으로 댓글 작성 여부 확인
        return commentRepository.existsByCommentIdAndUserId(commentId, userId);
    }

    // 댓글 업데이트 메서드
    public boolean updateComment(CommentDTO commentDTO, String authority, String sessionUserId) {

        // 댓글 ID로 DB에서 해당 댓글 조회
        Optional<CommentEntity> existingCommentOptional = commentRepository.findById(commentDTO.commentId());

        if (existingCommentOptional.isEmpty()) {
            return false; // 댓글이 존재하지 않으면 업데이트 실패
        }

        CommentEntity commentEntity = existingCommentOptional.get();

        // USER 권한인 경우: 본인이 작성한 댓글만 수정 가능
        if (authority.equals("USER")) {
            if (!commentEntity.getUserId().equals(sessionUserId)) {
                return false; // 본인이 작성한 댓글이 아니면 업데이트 실패
            }

            // 댓글 내용과 수정 시간을 업데이트
            commentEntity.setCommentContent(commentDTO.commentContent());
            commentEntity.setCommentUpdatedAt(LocalDateTime.now()); // 수정 시간을 현재 시간으로 설정
        }
        // ADMIN 권한인 경우: 모든 댓글 수정 가능
        else if (authority.equals("ADMIN")) {
            commentEntity.setIsDeleted(true); // 댓글 삭제 상태로 변경
            commentEntity.setCommentDelReason(commentDTO.commentDelReason()); // 삭제 이유 저장
            commentEntity.setCommentUpdatedAt(LocalDateTime.now()); // 수정 시간을 현재 시간으로 설정
        }

        // 수정된 댓글 저장
        commentRepository.save(commentEntity);

        return true; // 댓글 업데이트 성공
    }

    public boolean deleteCommentByCommentId(String commentId) {
        Optional<CommentEntity> commentEntityOptional = commentRepository.findById(commentId);

        if (commentEntityOptional.isEmpty()) {
            return false; // 댓글이 없으면 삭제 실패
        }

        CommentEntity commentEntity = commentEntityOptional.get();
        commentRepository.delete(commentEntity); // 댓글 삭제
        return true; // 삭제 성공
    }

    public List<CommentListDTO> getCommentByPostId(String commentId){
        // 1. postUid로 해당하는 댓글을 받고
        List<CommentEntity> comments = commentRepository.findByPostUid(commentId);
        // 2. 해당 하는 댓글의 userId를 받아서 userRepository에서 유저닉네임을 찾아야함.
        // 2. 댓글 리스트를 순회하면서 각각의 댓글 작성자의 닉네임을 조회
        return comments.stream().map(comment -> {
            // 댓글 작성자의 userId로 닉네임 조회
            Optional<UserEntity> user = userRepository.findById(comment.getUserId());
            // postUid로 postCategory 가져오기
            Optional<CommunityPostEntity> community = communityPostRepository.findByPostUid(comment.getPostUid());
            // CommentListDTO 객체 생성

            return new CommentListDTO(
                    comment.getCommentId(),
                    comment.getCommentContent(),
                    comment.getCommentCreatedAt(),
                    comment.getPostUid(),
                    user.get().getNickname(),
                    comment.getIsDeleted(),
                    comment.getCommentDelReason(),
                    community.get().getPostCategory()
            );
        }).collect(Collectors.toList()); // 리스트로 변환
    }
}
