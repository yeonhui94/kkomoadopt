//package com.kosmo.kkomoadopt.interceptor;
//
//import jakarta.servlet.http.HttpServletRequest;
//import jakarta.servlet.http.HttpServletResponse;
//import org.springframework.web.servlet.HandlerInterceptor;
//
//public class LoginInterceptor implements HandlerInterceptor {
//
//    // 요청 처리 전에 호출됩니다. (로그인 체크 등)
//    @Override
//    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
//        // 세션에서 로그인 여부 체크
//        Object user = request.getSession().getAttribute("userId");
//        System.out.println("인터셉터어어어어");
//
//        if (user == null) {
//            // 로그인하지 않았다면 401 Unauthorized 응답을 반환
//            response.sendError(HttpServletResponse.SC_UNAUTHORIZED, "로그인 필요");
//            return false; // 요청 처리를 중지하고 응답을 보냄
//        }
//
//        // 로그인 되어 있다면 요청을 계속 처리하도록 true 반환
//        return true;
//    }
//
//    // 요청 처리 후에 호출됩니다.
//    @Override
//    public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler,
//                           org.springframework.web.servlet.ModelAndView modelAndView) throws Exception {
//        // 요청 처리 후, 뷰를 렌더링 하기 전에 추가 작업을 할 수 있습니다.
//    }
//
//    // 뷰 렌더링 후에 호출됩니다.
//    @Override
//    public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
//        // 요청 처리 후 최종적으로 호출됩니다.
//    }
//}