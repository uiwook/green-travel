import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA({
      registerType: 'autoUpdate', // 서비스 워커 자동 업데이트
      strategies: 'injectManifest', // 커스텀 서비스워커 사용 설정
      srcDir: 'src', // 커스텀 서비스워커 배치되어있는 디렉토리(경로에따라 사용 : 현재 src파일)
      filename: 'sw.js', // 커스텀 서비스워커 파일명
      includeAssets: [ // 로컬 경로의 이미지 참조(PWA에 포함 시킬 정적파일)
        '/icons.icon-180.png',
        '/icons.icon-192.png',
        '/icons.icon-512.png',
        '/base/Sungnyemun.jpg',
      ],
      manifest: {
        name: 'Green Travel', // PWA 앱 이름 (설치 배너에 표시)
        short_name: 'Green Travel', // 홈 화면 아이콘 아래에 표시될 이름
        description: '관광정보 제공합니다.', // 앱 설명
        theme_color: '#fff', // 브라우저 UI 테마 색상
        background_color: '#fff', // 기본 배경색
        lang: 'ko', // 언어 설정
        display: 'standalone', // 브라우저 없이 앱처럼 독립실행 할수있게 해줌
        orientation: 'portrait', // 앱 실행시 뷰의 기본방향 세로로 설정
        start_url: '/', // 홈화면에서 앱을 실행 했을 때, 초기URL 설정(Router설정의 path넣기)
        icons: [
          // 편의를 위해서 public 디렉토리에 배치하고 사용할 것
          {
            src: '/icons/icon-192.png', // 로컬 경로 설정
            sizes: '192x192', // 아이콘 크키
            type: 'image/png', // 해당 파일의 타입
            purpose: 'any',
            // Windows(Edge, Chrome on Desktop 등)의 경우, 'any'중 가장 첫번째 아이콘을 사용
            // Android(Chrome 등)의 경우, `maskable`을 우선 사용
            // IOS의 경우, manifest를 무시하고, index.html의 `<link rel="apple-touch-icon">`만 사용
          },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          },
        ],
      },
    })
  ],
})
