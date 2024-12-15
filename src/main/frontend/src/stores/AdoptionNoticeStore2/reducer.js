import {
  CHANGE_ADOPTION_NOTICE_UID,
  CHANGE_ADOPTION_NOTICE_CATEGORY,
  CHANGE_ADOPTION_NOTICE_TITLE,
  CHANGE_ADOPTION_NOTICE_VIEW_COUNT,
  CHANGE_ADOPTION_ANIMAL_TYPE,
  CHANGE_ADOPTION_STATUS,
  CHANGE_ADOPTION_NOTICE_NUM,
  CHANGE_ADOPTION_UNIQUE_NUM,
  CHANGE_ADOPTION_NOTICE_IMG_URL,
  CHANGE_ADOPTION_EUTHANASIA_DATE,
  CHANGE_ADOPTION_NOTICE_CONTENT,
  CHANGE_ADOPTION_NOTICE_CREATED_AT,
  CHANGE_ADOPTION_NOTICE_UPDATED_AT,
  CHANGE_ADOPTION_IMPOSSIBLE_REASON,
  CHANGE_ADOPTION_AUTHOR,
  RESET_ADOPTION_STATE,
  CREATE_ADOPTION_POST,
  READ_ADOPTION_POSTS,
  READ_ADOPTION_POST_DETAIL,
  UPDATE_ADOPTION_POST,
  DELETE_ADOPTION_POST,
} from './action';

export const initialState = {
  noticeUid: '',
  noticeCategory: '',
  noticeTitle: '',
  noticeViewCount: 0,
  animalType: '',
  adoptStatus: '',
  announcementNum: '',
  uniqueNum: null,
  noticeImgUrl: [],
  euthanasiaDate: null,
  noticeContent: '',
  noticeCreatedAt: null,
  noticeUpdatedAt: null,
  impossibleReason: '',
  adoptionAuthor: '',
  notices: [],               // 모든 입양 게시물을 저장할 배열
  noticeDetail: null,          // 선택된 게시물의 상세 정보를 저장
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // 입양 공지사항 상태 업데이트
    case CHANGE_ADOPTION_NOTICE_UID:
      return { ...state, noticeUid: action.payload };
    case CHANGE_ADOPTION_NOTICE_CATEGORY:
      return { ...state, noticeCategory: action.payload };
    case CHANGE_ADOPTION_NOTICE_TITLE:
      return { ...state, noticeTitle: action.payload };
    case CHANGE_ADOPTION_NOTICE_VIEW_COUNT:
      return { ...state, noticeViewCount: action.payload };
    case CHANGE_ADOPTION_ANIMAL_TYPE:
      return { ...state, animalType: action.payload };
    case CHANGE_ADOPTION_STATUS:
      return { ...state, adoptStatus: action.payload };
    case CHANGE_ADOPTION_NOTICE_NUM:
      return { ...state, announcementNum: action.payload };
    case CHANGE_ADOPTION_UNIQUE_NUM:
      return { ...state, uniqueNum: action.payload };
    case CHANGE_ADOPTION_NOTICE_IMG_URL:
      return { ...state, noticeImgUrl: action.payload };
    case CHANGE_ADOPTION_EUTHANASIA_DATE:
      return { ...state, euthanasiaDate: action.payload };
    case CHANGE_ADOPTION_NOTICE_CONTENT:
      return { ...state, noticeContent: action.payload };
    case CHANGE_ADOPTION_NOTICE_CREATED_AT:
      return { ...state, noticeCreatedAt: action.payload };
    case CHANGE_ADOPTION_NOTICE_UPDATED_AT:
      return { ...state, noticeUpdatedAt: action.payload };
    case CHANGE_ADOPTION_IMPOSSIBLE_REASON:
      return { ...state, impossibleReason: action.payload };
    case CHANGE_ADOPTION_AUTHOR:
      return { ...state, adoptionAuthor: action.payload };

    // 입양 게시물 CRUD 처리
    case CREATE_ADOPTION_POST:
      return { 
        ...state, 
        notices: [...state.notices, action.payload]  // 새로운 게시물 추가
      };
    case READ_ADOPTION_POSTS:
      return { 
        ...state, 
        notices: action.payload  // 모든 게시물 불러오기
      };
    case READ_ADOPTION_POST_DETAIL:
      return { 
        ...state, 
        noticeDetail: action.payload  // 선택된 게시물의 상세 정보
      };
    case UPDATE_ADOPTION_POST:
      return { 
        ...state, 
        posts: state.posts.map(post => 
          post.noticeUid === action.payload.noticeUid ? action.payload : post  // 게시물 업데이트
        )
      };
    case DELETE_ADOPTION_POST:
      return { 
        ...state, 
        posts: state.posts.filter(post => post.noticeUid !== action.payload)  // 게시물 삭제
      };

    // 상태 초기화
    case RESET_ADOPTION_STATE:
      return initialState;

    // 기본 리턴: 상태 그대로 반환
    default:
      return state;
  }
};
