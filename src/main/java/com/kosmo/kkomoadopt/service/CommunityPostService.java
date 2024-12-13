package com.kosmo.kkomoadopt.service;

import com.kosmo.kkomoadopt.dto.CommunityListDTO;
import com.kosmo.kkomoadopt.dto.CommunityDTO;
import com.kosmo.kkomoadopt.enums.PostCategory;
import com.kosmo.kkomoadopt.entity.CommunityPostEntity;
import com.kosmo.kkomoadopt.entity.UserEntity;
import com.kosmo.kkomoadopt.repository.CommunityPostRepository;
import com.kosmo.kkomoadopt.repository.UserRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.apache.catalina.User;
import org.springframework.beans.factory.annotation.Autowired;
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

    private final CommunityPostRepository communityPostRepository;
    private final FileService fileService;
    private final UserRepository userRepository;

    @Autowired
    private EntityManager em;

    // post save 메서드
    public boolean savePost(CommunityDTO communityDTO, MultipartFile[] files)  {

        CommunityPostEntity communityPostEntity = new CommunityPostEntity();

        Integer maxPostId = communityPostRepository.findMaxPostId();
        // 만약 DB에 저장된 postId가 없다면, 1부터 시작
        if (maxPostId == null) {
            communityPostEntity.setPostId(1);  // 첫 번째 게시글은 postId 1
        } else {
            communityPostEntity.setPostId(maxPostId + 1);  // 기존의 최대 postId 값에 1을 더해 다음 postId를 설정
        }

        // nickname을 통해 UserEntity를 찾기
        String nickname = communityDTO.postAuthor();
        UserEntity userEntity = userRepository.findByNickname(nickname);

        // nickname에 해당하는 UserEntity가 없을 경우 처리
        if (userEntity == null) {
            // 예외 처리 또는 로깅
            throw new RuntimeException("User with the nickname " + nickname + " not found");
        }

        // 엔티티 설정
        communityPostEntity.setUserId(userEntity.getUserId());
        communityPostEntity.setPostCategory(communityDTO.postCategory());
        communityPostEntity.setPostContent(communityDTO.postContent());
        communityPostEntity.setPostTitle(communityDTO.postTitle());
        communityPostEntity.setPostCreatedAt(LocalDateTime.now()); // 기본값 설정
        communityPostEntity.setPostUpdatedAt(LocalDateTime.now()); // 기본값 설정
        communityPostEntity.setIsDeleted(false);  // 기본값 설정

        String[] fileNames = null;
        try {
                fileNames = fileService.saveFiles(files);
        }catch (IOException e) {
            e.printStackTrace();
        }

        if(fileNames != null) {
            communityPostEntity.setPostImgUrl( Arrays.stream(fileNames).toList());
        }
        communityPostEntity =  communityPostRepository.save(communityPostEntity);

        if(communityPostEntity != null) {
            return true;
        } else {
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
                            user.isPresent() ? user.get().getNickname() : "Unknown"  // Using nickname as postAuthor
                    );
                })
                .collect(Collectors.toList());

        return CommunityListDTOList;
    }



    public CommunityListDTO getCommunityPostUid (String postUid) {
        Optional<CommunityPostEntity> optionalPost = communityPostRepository.findByPostUid(postUid);

        if(optionalPost.isEmpty()){
            throw new RuntimeException("Post with UID" + postUid + "not found");
        }

        CommunityPostEntity post = optionalPost.get();
        System.out.println("User ID: " + post.getUserId());


        //유저 정보 조회
        Optional<UserEntity> userOptional = userRepository.findById(post.getUserId());
        String nickname = userOptional.map(UserEntity::getNickname).orElse("Unknown");

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
                nickname
        );
    };



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
