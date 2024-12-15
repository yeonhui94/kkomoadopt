package com.kosmo.kkomoadopt.service;

import com.kosmo.kkomoadopt.dto.AdoptNoticeListDTO;
import com.kosmo.kkomoadopt.dto.CommentListDTO;
import com.kosmo.kkomoadopt.dto.CommunityListDTO;
import com.kosmo.kkomoadopt.dto.CommunityDTO;
import com.kosmo.kkomoadopt.entity.AdoptionNoticeEntity;
import com.kosmo.kkomoadopt.enums.NoticeCategory;
import com.kosmo.kkomoadopt.entity.CommentEntity;
import com.kosmo.kkomoadopt.enums.PostCategory;
import com.kosmo.kkomoadopt.entity.CommunityPostEntity;
import com.kosmo.kkomoadopt.entity.UserEntity;
import com.kosmo.kkomoadopt.repository.CommentRepository;
import com.kosmo.kkomoadopt.repository.CommunityPostRepository;
import com.kosmo.kkomoadopt.repository.UserRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class CommunityPostService {

    @Autowired
    private final CommunityPostRepository communityPostRepository;
    @Autowired
    private final FileService fileService;
    @Autowired
    private final UserRepository userRepository;
    @Autowired
    private  CommentRepository commentRepository;

    @Autowired
    private EntityManager em;

    // 게시물 저장 메서드
    public boolean savePost(CommunityDTO communityDTO) {
        try {
            // CommunityPostEntity 객체 생성
            CommunityPostEntity communityPostEntity = new CommunityPostEntity();

            // postId 설정 (DB에서 maxPostId를 조회하여 자동 증가)
            Integer maxPostId = communityPostRepository.findMaxPostId();
            if (maxPostId == null) {
                communityPostEntity.setPostId(1); // 첫 번째 게시물의 ID는 1
            } else {
                communityPostEntity.setPostId(maxPostId + 1); // 기존의 maxPostId에 1을 더한 값을 설정
            }

            // DTO에서 전달받은 데이터로 엔티티 채우기
            communityPostEntity.setPostCategory(communityDTO.postCategory());
            communityPostEntity.setPostTitle(communityDTO.postTitle());
            communityPostEntity.setPostContent(communityDTO.postContent());
            communityPostEntity.setIsDeleted(communityDTO.isDeleted());
            communityPostEntity.setDeleteReason(communityDTO.deleteReason());
            communityPostEntity.setPostCreatedAt(LocalDateTime.now()); // 생성 시간
            communityPostEntity.setPostUpdatedAt(LocalDateTime.now()); // 수정 시간
            communityPostEntity.setPostViewCount(0); // 기본 뷰 카운트

            // 작성자 정보 처리 (nickname으로 UserEntity 찾기)
            String nickname = communityDTO.postAuthor();
            UserEntity userEntity = userRepository.findByNickname(nickname);
            if (userEntity != null) {
                communityPostEntity.setUserId(userEntity.getUserId());
            } else {
                throw new RuntimeException("User with the nickname " + nickname + " not found");
            }

            // CommunityPostEntity 저장
            communityPostEntity = communityPostRepository.save(communityPostEntity);

            return communityPostEntity != null;
        } catch (Exception e) {
            // 예외 발생 시 로깅하고 false 반환
            e.printStackTrace();  // 로그에 에러 출력
            return false;
        }
    }

    // category별로 게시물 가져오기
    public List<CommunityListDTO> getCommunityListByCategory(String category) {
        PostCategory category1 = PostCategory.valueOf(category.toUpperCase());

        // Assuming you have a UserRepository injected here
        List<CommunityListDTO> CommunityListDTOList = communityPostRepository.findByPostCategory(category1).stream()
                .map(community -> {
                    // Fetch the user entity by userId
                    Optional<UserEntity> user = userRepository.findById(community.getUserId());
                    List<CommentListDTO> comments = null;
                    // Create CommunityListDTO using the nickname as postAuthor
                    return new CommunityListDTO(
                            community.getPostUid(),
                            community.getPostId(),
                            community.getPostCategory(),
                            community.getPostTitle(),
                            community.getPostContent(),
                            community.getPostCreatedAt(),
                            community.getPostUpdatedAt(),
                            community.getPostImgUrl(),
                            community.getIsDeleted(),
                            community.getDeleteReason(),
                            community.getUserId(),
                            community.getPostViewCount(),
                            user.isPresent() ? user.get().getNickname() : "Unknown",
                            comments
                    );
                })
                .collect(Collectors.toList());

        return CommunityListDTOList;
    }

//    // 카테고리로 커뮤니티글 가져오기
//    public CommunityListDTO getCommunityByCategory(PostCategory postCategory, Pageable pageable) {
//        Page<AdoptionNoticeEntity> adoptionNoticePage = communityPostRepository.findByNoticeCategory(noticeCategory, pageable);
//
//        // 결과를 DTO로 변환
//        List<AdoptNoticeListDTO.Notice> notices = adoptionNoticePage.getContent().stream()
//                .map(this::convertToNoticeDTO)
//                .collect(Collectors.toList());
//
//        // DTO를 리턴
//        return new AdoptNoticeListDTO(notices, adoptionNoticePage.getTotalElements(), adoptionNoticePage.getNumber());
//    }

    public CommunityListDTO getCommunityPostUid (String postUid) {
        Optional<CommunityPostEntity> optionalPost = communityPostRepository.findByPostUid(postUid);

        if(optionalPost.isEmpty()){
            throw new RuntimeException("Post with UID" + postUid + "not found");
        }

        CommunityPostEntity post = optionalPost.get();

        //유저 정보 조회
        Optional<UserEntity> userOptional = userRepository.findById(post.getUserId());
        String nickname = userOptional.map(UserEntity::getNickname).orElse("Unknown");


        //댓글 리스트 조회
        List<CommentEntity> commentEntities = commentRepository.findByPostUid(postUid);
        List<CommentListDTO> comments = commentEntities.stream().map(comment ->{
            Optional<UserEntity> commenterOptional = userRepository.findById(comment.getCommentId());
            String commenterNickname = commenterOptional.map(UserEntity::getNickname).orElse("Unknown");

            return new CommentListDTO(
                    comment.getCommentId(),         // 댓글 ID
                    comment.getCommentContent(),    // 댓글 내용
                    comment.getCommentCreatedAt(),  // 작성일
                    comment.getPostUid(),
                    commenterNickname,
                    comment.getIsDeleted(),
                    comment.getCommentDelReason()
            );
        }).toList();

        return new CommunityListDTO(
                post.getPostUid(),
                post.getPostId(),
                post.getPostCategory(),
                post.getPostTitle(),
                post.getPostContent(),
                post.getPostCreatedAt(),
                post.getPostUpdatedAt(),
                post.getPostImgUrl(),
                post.getIsDeleted(),
                post.getDeleteReason(),
                post.getUserId(),
                post.getPostViewCount(),
                nickname,
                comments
        );
    };


//
// 댓글로직 추가 예정입니다............
//    public CommunityListDTO getCommunityPostWithComments (String postUid) {
//        Optional<CommunityPostEntity> optionalPost = communityPostRepository.findByPostUid(postUid);
//
//        if(optionalPost.isEmpty()){
//            throw new RuntimeException("Post with UID" + postUid + "not found");
//        }
//
//        CommunityPostEntity post = optionalPost.get();
//        System.out.println("User ID: " + post.getUserId());
//
//
//        //유저 정보 조회
//        Optional<UserEntity> userOptional = userRepository.findById(post.getUserId());
//        String nickname = userOptional.map(UserEntity::getNickname).orElse("Unknown");
//
//        List<CommentListDTO> comments = CommentRepository.findByPostUid(postUid).stream();
//
//        return new CommunityListDTO(
//                post.getPostUid(),
//                post.getPostId(),
//                post.getPostCategory(),
//                post.getPostTitle(),
//                post.getPostContent(),
//                post.getPostCreatedAt(),
//                post.getPostUpdatedAt(),
//                post.getPostImgUrl(),
//                post.getIsDeleted(),
//                post.getDeleteReason(),
//                post.getUserId(),
//                post.getPostViewCount(),
//                nickname,
//                comments
//        );
//    };



//                ProjectCategory category = ProjectCategory.valueOf(projectCategory.toUpperCase());
//                return projectRepository.findProjectsByCategoryAndFundingStatusAndDateRange(category, fundingStatus, now)
//                        .stream()
//                        .map(project -> projectConverter.toOutDTO(project))
//                        .collect(Collectors.toList());
//            } catch (IllegalArgumentException e) {
//                // Enum 변환 실패 시 빈 리스트 반환
//                return Collections.emptyList();
//            }
//        }
//    }



//        // 전체 게시글 수 가져오기
//        long totalCnt = em.createQuery("select count(c) from CommunityPostEntity c where c.postCategory = :category", Long.class)
//                .setParameter("category", postCategory)  // category를 바인딩
//                .getSingleResult();
//
//        // 결과를 CommunityDto에 담아서 반환
//        return new CommunityListDTO(postDtos, totalCnt, pageNum);
//    }

//    // 게시물 10개씩 가져오기
//    public CommunityListDTO getListCommunity2(PostCategory postCategory, int pageNum) {
//
//        // 쿼리 로그 추가
//        System.out.println("Fetching posts for category: " + postCategory);
//
//        // 사용자 닉네임 가져오기
//        List<CommunityPostEntity> communityPostEntities = em.createQuery(
//                        "select c from CommunityPostEntity c where c.postCategory = :category ORDER BY c.postId", CommunityPostEntity.class)
//                .setParameter("category", postCategory)  // category를 바인딩
//                .setFirstResult((pageNum - 1) * 10)  // 페이지네이션
//                .setMaxResults(10)  // 한 페이지에 10개씩
//                .getResultList();
//
//        // 게시글 정보를 CommunityDto.Post 형식으로 변환
//        List<CommunityListDTO.Post> postDtos = new ArrayList<>();
//        for (CommunityPostEntity post : communityPostEntities) {
//            String userId = post.getUserId();
//            UserEntity user = userRepository.findById(userId).orElse(null);
//            String nickname = (user != null) ? user.getNickname() : "닉네임과 일치하는 사용자 없음";
//
//            // CommunityDto.Post로 변환
//            CommunityListDTO.Post postDto = new CommunityListDTO.Post(
//                    post.getPostId(),
//                    post.getPostCategory(),
//                    post.getPostTitle(),
//                    post.getPostContent(),
//                    post.getPostCreatedAt(),
//                    post.getPostImgUrl(),
//                    post.getIsDeleted(),
//                    post.getDeleteReason(),
//                    post.getPostViewCount(),
//                    nickname
//            );
//            postDtos.add(postDto);
//        }
//
//        // 전체 게시글 수 가져오기
//        long totalCnt = em.createQuery("select count(c) from CommunityPostEntity c where c.postCategory = :category", Long.class)
//                .setParameter("category", postCategory)  // category를 바인딩
//                .getSingleResult();
//
//        // 결과를 CommunityDto에 담아서 반환
//        return new CommunityListDTO(postDtos, totalCnt, pageNum);
//    }
}
