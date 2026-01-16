npm i react-router-dom @reduxjs/toolkit react-redux redux-thunk axios

** PWA 적용 **

설치

npm i -D vite-plugin-pwa
Manifest 설정

vite.config.js에 PWA Manifest 설정을 추가
아이콘 이미지는 아래의 사이즈 별로 필요
180x180(IOS), 192X192(web | Android), 512X512(web | Android)
서비스 워커 작성

src/sw.js, src/swRegister.js 파일 생성
src/main.jsx에 서비스 워커 레지스터 추가

index.html에 meta데이터 설정(IOS 대응 및 Manifest 기본 설정)

위 설정 완료 후 빌드 npm run build

빌드한 것으로 동작하는 내장서버 실행 npm run preview
