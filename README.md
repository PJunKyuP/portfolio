### 포트폴리오 웹사이트

Next.js와 Tailwind CSS로 구축된 반응형 포트폴리오 웹사이트입니다. 다크 모드를 지원하며 프로젝트 쇼케이스, 기술 스택, 연락처 정보 등을 표시할 수 있습니다.

## 🚀 기능

- 반응형 디자인 (모바일, 태블릿, 데스크톱)
- 다크 모드 지원
- 프로젝트 갤러리 및 상세 페이지
- 기술 스택 및 전문 분야 표시
- 연락처 폼
- SEO 최적화


## 🛠️ 기술 스택

- **프레임워크**: Next.js 14
- **스타일링**: Tailwind CSS
- **UI 컴포넌트**: shadcn/ui
- **아이콘**: Lucide React
- **폰트**: Inter (Google Fonts)
- **배포**: Vercel/Netlify


## 📋 사전 요구사항

- Node.js 18.17.0 이상
- npm 또는 yarn


## 🔧 설치 방법

1. 저장소 클론:

```shellscript
git clone https://github.com/사용자명/저장소명.git
cd 저장소명
```


2. 의존성 설치:

```shellscript
npm install
# 또는
yarn install
```


3. 개발 서버 실행:

```shellscript
npm run dev
# 또는
yarn dev
```


4. 브라우저에서 `http://localhost:3000` 접속


## 📝 사용자 정의 방법

### 기본 정보 변경

- `app/layout.tsx`: 웹사이트 제목, 설명, 헤더/푸터 정보 변경
- `app/page.tsx`: 메인 페이지 소개, 이름, 직업 등 변경


### 이미지 변경

1. 이미지 파일을 `public` 폴더에 추가 (예: `public/profile.jpg`, `public/projects/project1.jpg`)
2. 코드에서 이미지 경로 변경:

```javascriptreact
<Image src="/profile.jpg" alt="프로필 사진" fill className="object-cover" />
```




### 프로젝트 정보 변경

`app/projects/page.tsx` 및 `app/projects/[id]/page.tsx` 파일에서 프로젝트 데이터 배열 수정:

```javascript
const projects = [
  {
    id: 1,
    title: "프로젝트 제목",
    description: "프로젝트 설명",
    image: "/projects/project1.jpg",
    category: "카테고리",
    technologies: ["기술1", "기술2"],
    // 기타 정보...
  },
  // 추가 프로젝트...
]
```

### 스킬 정보 변경

`app/skills/page.tsx` 파일에서 스킬 정보 및 이미지 변경:

```javascriptreact
<Card>
  <CardContent className="p-4 flex flex-col items-center justify-center text-center">
    <div className="h-12 w-12 mb-2 flex items-center justify-center">
      <Image src="/skills/skill1.png" alt="스킬명" width={48} height={48} />
    </div>
    <h3 className="font-medium">스킬명</h3>
  </CardContent>
</Card>
```

### 연락처 정보 변경

`app/contact/page.tsx`에서 이메일, GitHub, LinkedIn 등의 연락처 정보 변경

## 🌐 배포 방법

### Netlify 배포

1. GitHub 저장소에 코드 푸시
2. Netlify 계정 생성 및 로그인
3. "New site from Git" 클릭 후 저장소 선택
4. 빌드 설정:

1. Build command: `npm run build`
2. Publish directory: `.next`



5. 프로젝트 루트에 `netlify.toml` 파일 생성:

```plaintext
[build]
  command = "npm run build"
  publish = ".next"

[[plugins]]
  package = "@netlify/plugin-nextjs"
```


6. 의존성 추가:

```shellscript
npm install -D @netlify/plugin-nextjs
```




### Vercel 배포

1. GitHub 저장소에 코드 푸시
2. Vercel 계정 생성 및 로그인
3. "New Project" 클릭 후 저장소 선택
4. 기본 설정 유지 후 "Deploy" 클릭


## 📄 라이센스

MIT

## 🙏 감사의 말

- [Next.js](https://nextjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [Lucide React](https://lucide.dev/)
