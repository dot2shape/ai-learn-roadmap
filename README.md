# 무료로 배우는 AI — 24주 학습 로드맵

인스타그램 이미지에 정리된 **"무료로 배우는 AI 학습 사이트 32곳"** 을
하나씩 직접 접속해 검증하고, 그 내용을 바탕으로 **학습 일정 · 커리큘럼 · 목차**를 설계해 만든 정적 웹사이트입니다.

## 🔗 배포 주소

- GitHub Pages: `https://dot2shape.github.io/ai-learn-roadmap/`

## 무엇이 들어 있나

| 섹션 | 내용 |
|------|------|
| 개요 | 이 순서로 배워야 하는 3가지 원칙, 원본 이미지와 달라진 점 |
| 8단계 커리큘럼 | AI 리터러시 → 코딩/데이터 → ML → 딥러닝 → LLM·에이전트 → 특화 → MLOps → 심화. 단계별 통과 기준 포함 |
| 24주 학습 일정 | 주 8~10시간 기준 주차별 목표와 할 일 (0주차 ~ 24주차+) |
| 리소스 32개 | 각 사이트의 실제 커리큘럼·난이도·학습시간·비용·수료증·언어 + 링크 상태 배지 |
| 목차(TOC) | 8단계별 전체 학습 내용 구조도 (접기/펼치기) |
| 학습법 | 지속하는 법 3원칙 + LLM 단계 진입 전 선수지식 체크리스트 |

## 🔍 링크 검증 결과 (2026-10 기준)

원본 이미지의 32개 링크를 실제로 열어본 결과:

- **정상 24개**
- **주소 변경 7개** — 리다이렉트 또는 개편
- **링크 사망 1개**

특히 아래 5개는 그대로 쓸 수 없어 수정된 주소로 연결했습니다.

| 원본 | 문제 | 실제 |
|------|------|------|
| `kaggle.com/learn/intro-to-ml` | 404 | `/learn/intro-to-machine-learning` |
| `kaggle.com/learn/generative-ai` | 404 | Kaggle *5-Day Intensive Generative AI* |
| `huggingface.co/learn` (NLP) | 코스 통합 | *LLM Course* 로 통합 |
| `learn.microsoft.com/azure/ai-services` | 서비스 개편 | *Microsoft Foundry* |
| `buildwithai.com` | 도메인 사망(404) | Google *Build with AI* |

## 구조

```
ai-learn-roadmap/
├── index.html          # 페이지 마크업
├── assets/
│   ├── styles.css      # 다크 테마 스타일 (반응형)
│   ├── data.js         # 32개 리소스 + 8단계 + 24주 일정 데이터
│   └── app.js          # 렌더링·필터·검색·TOC 인터랙션
└── README.md
```

빌드 도구 없이 **순수 정적 파일**이라 GitHub Pages에 그대로 올라갑니다.
콘텐츠를 바꾸려면 `assets/data.js`만 수정하면 됩니다.

## 로컬에서 보기

```bash
python3 -m http.server 8899
# http://127.0.0.1:8899
```

## 데이터 출처

- 원본 이미지: 인스타그램 `@promppy_com`
- 각 과정 명칭·커리큘럼·비용은 제공 기관 사정에 따라 변경될 수 있습니다.
