# React 연습 게시판

# 개발 이력

환경 세팅
- git clone
- create-react-app

개발
- 게시판 추가 (간단한 리스트 페이지)

- scss 적용 (npm install node-sass)

- material ui 설치 (https://mui.com/material-ui/getting-started/installation/)

- table 작성 (https://mui.com/material-ui/react-table/)
  
  - 참고) https://github.com/mui/material-ui/blob/v5.6.3/docs/data/material/getting-started/templates/dashboard/Orders.tsx

- create, update, detail 화면 스켈레톤 작성

- react-router 도입

  ㄴ Link (화면 이동 버튼)
  
  ㄴ BrowserRouter, Routes, Route (페이지 URL 설정)
  
  ㄴ useNavigate (컴포넌트 내부에서 화면 이동)
  
    ㄴ v6 이후로 history.push나 history.back 대신에 사용

- create, update, delete 기능 추가 (context API 도입)

  ㄴ 상태를 전역적으로 관리 가능 (props drilling 방지)

  ㄴ reducer, dispatch, provider에 대한 이해 필요
  
  - 참고) https://react.vlpt.us/basic/22-context-dispatch.html


