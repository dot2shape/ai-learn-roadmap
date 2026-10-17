/* ============================================================
   무료로 배우는 AI — 데이터
   이미지의 32개 링크를 실제 접속 조사한 결과 (2026-10)
   status: ok(정상) | moved(주소 변경) | dead(링크 사망)
   ============================================================ */

const STAGES = [
  {
    id: "s0",
    no: "00",
    name: "AI 리터러시",
    weeks: "0주차",
    color: "#8b5cf6",
    goal: "수학·코딩 없이 AI가 무엇이고 어디에 쓰이는지 큰 그림을 잡는다.",
    exit: "AI·머신러닝·딥러닝·생성형 AI의 차이를 남에게 설명할 수 있다."
  },
  {
    id: "s1",
    no: "01",
    name: "코딩 · 데이터 기초",
    weeks: "1~4주차",
    color: "#3b82f6",
    goal: "Python 문법과 데이터 다루기(Pandas·시각화·SQL)를 손으로 익힌다.",
    exit: "CSV를 읽어 정제하고, 그래프를 그려 인사이트를 말할 수 있다."
  },
  {
    id: "s2",
    no: "02",
    name: "머신러닝 기초",
    weeks: "5~7주차",
    color: "#06b6d4",
    goal: "모델 학습·검증·과적합 개념과 신경망의 직관을 이해한다.",
    exit: "Kaggle 데이터로 첫 예측 모델을 만들고 성능을 검증할 수 있다."
  },
  {
    id: "s3",
    no: "03",
    name: "딥러닝",
    weeks: "8~11주차",
    color: "#14b8a6",
    goal: "신경망을 코드로 구현하고 학습시킨다. 배포까지 경험한다.",
    exit: "Keras/PyTorch로 CNN·전이학습 모델을 학습·배포할 수 있다."
  },
  {
    id: "s4",
    no: "04",
    name: "LLM · 생성형 AI · 에이전트",
    weeks: "12~16주차",
    color: "#f59e0b",
    goal: "Transformer를 이해하고 프롬프트·RAG·에이전트를 직접 만든다.",
    exit: "LLM API로 대화형 서비스와 도구를 쓰는 에이전트를 구현할 수 있다."
  },
  {
    id: "s5",
    no: "05",
    name: "특화 트랙 (선택)",
    weeks: "17~20주차",
    color: "#fb7185",
    goal: "NLP·비전·강화학습·RAG·파인튜닝·AI 안전성 중 1~2개를 깊게 판다.",
    exit: "선택 트랙의 실전 프로젝트 1개를 완성한다."
  },
  {
    id: "s6",
    no: "06",
    name: "MLOps · 실전 · 배포",
    weeks: "21~23주차",
    color: "#a3e635",
    goal: "실험을 재현 가능하게 관리하고, 만든 AI를 실제 서비스로 내보낸다.",
    exit: "실험 추적 → 모델 레지스트리 → API 배포 파이프라인을 운영할 수 있다."
  },
  {
    id: "s7",
    no: "07",
    name: "심화 이론 · 클라우드",
    weeks: "24주차~",
    color: "#e879f9",
    goal: "수학적 원리를 파고들고, 클라우드 AI 서비스·자격증으로 확장한다.",
    exit: "논문 수준의 원리를 읽고 클라우드에 AI 워크로드를 설계할 수 있다."
  }
];

const RESOURCES = [
  {
    id: 1, key: "AI 기초", stage: "s0", level: "입문",
    title: "Elements of AI",
    provider: "MinnaLearn × 헬싱키대",
    url: "https://www.elementsofai.com/",
    hours: "Part 1 자기주도 / Part 2 약 50시간",
    lang: "영어 외 30여 개 언어 (한국어 없음)",
    cost: "무료 (전자 수료증 유료)", cert: "Part 2 유료 수료증",
    status: "ok",
    modules: ["Part 1 · Ch1 What is AI?", "Ch2 AI problem solving", "Ch3 Real world AI", "Ch4 Machine learning", "Ch5 Neural networks", "Ch6 Implications", "Part 2 · 최적화·확률·선형회귀", "신경망과 딥러닝", "나만의 AI 아이디어"],
    note: "비전공자가 'AI란 무엇인가'를 사회적 영향까지 폭넓게 잡는 최고의 출발점. Part 2는 기본 Python 실력이 필요하다."
  },
  {
    id: 2, key: "AI를 위한 파이썬", stage: "s1", level: "초급",
    title: "Kaggle Learn — Python",
    provider: "Kaggle (Colin Morris)",
    url: "https://www.kaggle.com/learn/python",
    hours: "약 5시간",
    lang: "영어",
    cost: "무료", cert: "수료증 발급",
    status: "ok",
    modules: ["Hello, Python (문법·변수)", "Functions and Getting Help", "Booleans and Conditionals", "Lists (인덱싱·슬라이싱)", "Loops and List Comprehensions", "Strings and Dictionaries", "Working with External Libraries"],
    note: "브라우저에서 바로 실습하는 가장 빠른 Python 입구. Kaggle 트랙의 필수 첫 단계."
  },
  {
    id: 3, key: "데이터 사이언스", stage: "s1", level: "입문~중급",
    title: "Kaggle Learn (전체 허브)",
    provider: "Kaggle",
    url: "https://www.kaggle.com/learn",
    hours: "코스당 1~7시간 (전체 수십 시간)",
    lang: "영어",
    cost: "무료", cert: "코스별 수료증",
    status: "ok",
    modules: ["Intro to Programming", "Pandas", "Data Visualization", "Intro to SQL / Advanced SQL", "Feature Engineering", "Data Cleaning", "Time Series", "Intro to AI Ethics"],
    note: "'어떤 주제를 어떤 순서로' 배울지 로드맵을 잡는 허브. 짧고 실습 중심이라 몇 시간 단위로 스킬이 쌓인다."
  },
  {
    id: 4, key: "머신러닝", stage: "s2", level: "초급",
    title: "Kaggle Learn — Intro to Machine Learning",
    provider: "Kaggle (Dan Becker)",
    url: "https://www.kaggle.com/learn/intro-to-machine-learning",
    hours: "약 3시간",
    lang: "영어",
    cost: "무료", cert: "수료증 발급",
    status: "moved",
    modules: ["How Models Work", "Basic Data Exploration", "Your First Machine Learning Model", "Model Validation", "Underfitting and Overfitting", "Random Forests", "Machine Learning Competitions"],
    note: "이미지의 원본 주소(/intro-to-ml)는 404입니다. 실제 주소는 /intro-to-machine-learning. 결정트리·검증·랜덤포레스트를 3시간에 감 잡는다."
  },
  {
    id: 5, key: "딥러닝", stage: "s3", level: "초급~중급",
    title: "Kaggle Learn — Intro to Deep Learning",
    provider: "Kaggle (Ryan Holbrook)",
    url: "https://www.kaggle.com/learn/intro-to-deep-learning",
    hours: "약 4시간",
    lang: "영어",
    cost: "무료", cert: "수료증 발급",
    status: "ok",
    modules: ["A Single Neuron", "Deep Neural Networks", "Stochastic Gradient Descent", "Overfitting and Underfitting", "Dropout and Batch Normalization", "Binary Classification", "보너스 레슨"],
    note: "TensorFlow/Keras로 뉴런 하나부터 과적합·정규화까지 직접 구현. 딥러닝을 코드로 처음 만질 때 가장 부담이 적다."
  },
  {
    id: 6, key: "생성형 AI", stage: "s4", level: "중급",
    title: "Kaggle 5-Day Intensive Generative AI Course",
    provider: "Kaggle × Google",
    url: "https://www.kaggle.com/learn-guide/5-day-genai",
    hours: "5일 집중 (+자기 페이스 복습)",
    lang: "영어",
    cost: "무료", cert: "캡스톤/리더보드 방식",
    status: "moved",
    modules: ["Day1 Foundational LLMs & Prompt Engineering", "Day2 Embeddings / RAG (Chroma·Gemini API)", "Day3 Generative AI Agents (함수 호출·LangGraph)", "Day4 Domain-Specific LLMs (SecLM·MedLM)", "Day5 MLOps for Generative AI (Vertex AI)", "Capstone Project"],
    note: "이미지의 원본 주소(/learn/generative-ai)는 404입니다. 실제 과정은 '5-Day Intensive Generative AI'. 프롬프트·RAG·에이전트·MLOps를 코드랩으로 압축한다."
  },
  {
    id: 7, key: "대규모 언어 모델(LLM)", stage: "s4", level: "중급~고급",
    title: "Hugging Face LLM Course",
    provider: "Hugging Face",
    url: "https://huggingface.co/learn/llm-course",
    hours: "12챕터 · 주당 6~8시간 (약 12주)",
    lang: "영어 (한국어 번역 WIP)",
    cost: "무료", cert: "없음 (인증 준비 중)",
    status: "ok",
    modules: ["Ch1 Transformer models", "Ch2 Using 🤗 Transformers", "Ch3 Fine-tuning a pretrained model", "Ch5 🤗 Datasets", "Ch6 🤗 Tokenizers", "Ch7 Classical NLP tasks", "Ch9 Building and sharing demos", "Ch10 Curate high-quality datasets", "Ch11 Fine-tune LLMs", "Ch12 Build Reasoning Models"],
    note: "Transformer 내부 구조부터 파인튜닝·데이터 큐레이션·추론 모델 구축까지 HF 생태계 전체를 다루는 LLM 실전 표준. Python 숙련이 필수."
  },
  {
    id: 8, key: "AI 에이전트", stage: "s4", level: "입문~중급",
    title: "Hugging Face AI Agents Course",
    provider: "Hugging Face",
    url: "https://huggingface.co/learn/agents-course",
    hours: "4챕터 · 주당 3~4시간 (약 4주)",
    lang: "영어 (중국어·프랑스어 번역)",
    cost: "무료", cert: "무료 2종 (Fundamentals / Completion)",
    status: "ok",
    modules: ["Unit1 Onboarding", "Unit2 Agent Fundamentals (Tools·Thoughts·Actions·Observations)", "Unit3 Frameworks (smolagents·LangGraph·LlamaIndex)", "Unit4 Use Cases", "Final Assignment (리더보드)", "Bonus: 함수호출 파인튜닝", "Bonus: 관측성과 평가", "Bonus: 게임 속 에이전트"],
    note: "'이론 → 프레임워크 → 실전 과제'로 이어지는 최고 밀도의 무료 에이전트 과정. 기본 Python과 LLM 지식만 있으면 된다."
  },
  {
    id: 9, key: "자연어 처리(NLP)", stage: "s5", level: "중급",
    title: "Hugging Face Learn (NLP → LLM Course)",
    provider: "Hugging Face",
    url: "https://huggingface.co/learn",
    hours: "챕터당 1주 (주 6~8시간)",
    lang: "영어 (한국어 WIP)",
    cost: "무료", cert: "없음",
    status: "moved",
    modules: ["pipeline() 사용과 Transformer 아키텍처", "encoder / decoder / encoder-decoder 구분", "데이터셋으로 파인튜닝", "모델·토크나이저 Hub 공유", "고전 NLP 태스크", "Gradio 데모 빌드", "Reasoning 모델 구축"],
    note: "원래의 NLP Course가 LLM Course로 통합되었습니다. GPT·Llama 계열을 직접 파인튜닝·배포하려는 개발자의 기초 체력."
  },
  {
    id: 10, key: "컴퓨터 비전", stage: "s5", level: "초급~중급",
    title: "Kaggle Learn — Computer Vision",
    provider: "Kaggle (Ryan Holbrook)",
    url: "https://www.kaggle.com/learn/computer-vision",
    hours: "약 4시간",
    lang: "영어",
    cost: "무료", cert: "수료증 발급",
    status: "ok",
    modules: ["The Convolutional Classifier", "Convolution and ReLU", "Maximum Pooling", "The Sliding Window (stride·padding)", "Custom Convnets", "Data Augmentation", "실전 대회 제출 (TPU·이미지 분류)"],
    note: "CNN을 수식 없이 코드로 빠르게 감 잡는 입문. Intro to Deep Learning 다음에 이어서 들으면 좋다."
  },
  {
    id: 11, key: "프롬프트 엔지니어링", stage: "s4", level: "입문~고급",
    title: "Learn Prompting — Prompt Engineering Guide",
    provider: "Learn Prompting (Sander Schulhoff)",
    url: "https://learnprompting.org/",
    hours: "자기주도 (아티클별 읽기 시간 표기)",
    lang: "한국어 지원",
    cost: "가이드 무료 (자격증 유료)", cert: "유료 자격 과정",
    status: "ok",
    modules: ["Basics (지시·역할·few-shot·priming)", "Applications", "Intermediate", "Reliability", "Image Prompting", "Prompt Hacking (인젝션)", "Prompt Tuning", "RAG", "Agents"],
    note: "'프롬프트 잘 쓰기'부터 프롬프트 해킹·LLM 보안까지 한 곳에서. 개발자가 아니어도 시작할 수 있다."
  },
  {
    id: 12, key: "OpenAI", stage: "s4", level: "초급~고급",
    title: "OpenAI API Documentation",
    provider: "OpenAI (developers.openai.com)",
    url: "https://platform.openai.com/docs",
    hours: "레퍼런스형 (Quickstart 30분~)",
    lang: "영어",
    cost: "문서 무료 (API 사용은 과금)", cert: "없음",
    status: "moved",
    modules: ["Developer Quickstart", "Text generation / Prompt engineering", "Structured Outputs (JSON Schema)", "Tools (web search·file search·code interpreter)", "Retrieval & Embeddings", "Realtime API / Voice", "Agents SDK · Agent Builder", "Fine-tuning (SFT·RFT·DPO)", "Batch API · Prompt caching"],
    note: "학습 코스가 아니라 제품 스펙 레퍼런스. GPT 계열 API로 개발할 때 최신 기능을 확인하는 1차 출처. developers.openai.com으로 리디렉션된다."
  },
  {
    id: 13, key: "Hugging Face", stage: "s6", level: "중급~고급",
    title: "Hugging Face Documentation",
    provider: "Hugging Face",
    url: "https://huggingface.co/docs",
    hours: "레퍼런스형 (라이브러리당 1~2시간 훅투어)",
    lang: "영어 중심",
    cost: "무료", cert: "없음",
    status: "ok",
    modules: ["Transformers · Diffusers · Datasets", "Tokenizers · Evaluate · timm", "PEFT · TRL · Accelerate · Optimum", "Inference Endpoints · TGI · TEI", "smolagents · Gradio · LeRobot", "Hub · AutoTrain · Leaderboards"],
    note: "HF Learn이 '강의'라면 이쪽은 '매뉴얼'. 실무에서 라이브러리 API를 찾을 때 쓴다."
  },
  {
    id: 14, key: "LangChain", stage: "s4", level: "중급~고급",
    title: "LangChain / LangGraph Docs",
    provider: "LangChain (docs.langchain.com)",
    url: "https://python.langchain.com/docs",
    hours: "레퍼런스형 (Quickstart 반나절~)",
    lang: "영어",
    cost: "오픈소스 무료 (LangSmith 유료)", cert: "없음",
    status: "moved",
    modules: ["Build — Models · Tools · create_agent", "Structured output · Streaming", "AgentState (단기 메모리) · Middleware", "Retrieval / RAG", "Deploy (LangSmith Deployment)", "Monitor (트레이스·평가)", "LangGraph (durable execution·human-in-the-loop)"],
    note: "단순 LLM 체이닝을 넘어 '에이전트 하네스 + 오케스트레이션 + 관측'이 필요해질 때. RAG/에이전트 제품화 팀의 사실상 표준 스택."
  },
  {
    id: 15, key: "벡터 데이터베이스", stage: "s5", level: "입문~중급",
    title: "Zilliz Learn — Learning Series",
    provider: "Zilliz / Milvus",
    url: "https://zilliz.com/learn",
    hours: "시리즈별 28분~약 4시간",
    lang: "한국어 지원",
    cost: "무료", cert: "없음",
    status: "ok",
    modules: ["Understand vector databases (8편·86분)", "Vector Database 101 (27편·228분)", "Getting Started with Milvus (8편·77분)", "Build a RAG App (5편·70분)", "RAG 101 (12편·101분)", "Embedding 101 · Information Retrieval 101", "From POC to Production (7편·53분)"],
    note: "벡터 DB 선택·임베딩·검색 품질 튜닝을 '무엇을 왜 쓰는지'부터 설명하는 실무형 시리즈. RAG 성능 최적화 단계에서 특히 유용."
  },
  {
    id: 16, key: "RAG (검색 증강 생성)", stage: "s5", level: "중급~고급",
    title: "Microsoft Foundry (구 Azure AI Services)",
    provider: "Microsoft Learn",
    url: "https://learn.microsoft.com/azure/ai-services",
    hours: "퀵스타트 1~2시간 / 에이전트·RAG 반나절~수일",
    lang: "한국어 지원",
    cost: "문서 무료 (서비스 종량 과금, 무료 티어)", cert: "없음 (학습경로·인증 연계)",
    status: "moved",
    modules: ["Foundry Models (모델 카탈로그·파인튜닝)", "Foundry Agent Service (에이전트 호스팅)", "Foundry IQ (지식베이스 → 에이전트 연결)", "Foundry Tools (Speech·Vision·Language·AI Search)", "Observability & Evaluation (트레이스·Red Teaming)", "Foundry Local (디바이스에서 LLM 실행)", "Azure Machine Learning"],
    note: "Azure AI Services가 'Microsoft Foundry'로 개편되었습니다. 엔터프라이즈 RAG를 만들 때의 서비스 지도로 적합."
  },
  {
    id: 17, key: "파인튜닝", stage: "s5", level: "중급",
    title: "Hugging Face Transformers — Fine-tuning",
    provider: "Hugging Face",
    url: "https://huggingface.co/docs/transformers",
    hours: "레퍼런스형 (연계 LLM Course는 주 단위)",
    lang: "영어",
    cost: "무료", cert: "없음",
    status: "ok",
    modules: ["Pipeline (추론 클래스)", "Trainer (mixed precision·torch.compile)", "generate (디코딩 전략·streaming)", "Tokenization → 모델 로딩", "TrainingArguments 설정", "Trainer.train() → push_to_hub()", "PEFT · Callbacks · HF Jobs(GPU)"],
    note: "이미 학습된 모델을 내 데이터로 파인튜닝하는 실무 워크플로를 코드 그대로 따라 하며 익힌다."
  },
  {
    id: 18, key: "MLOps", stage: "s6", level: "중급",
    title: "MLflow Documentation",
    provider: "MLflow (Linux Foundation)",
    url: "https://mlflow.org/docs/latest",
    hours: "핵심 10~20시간 / LLM 트랙 포함 수 주",
    lang: "영어",
    cost: "무료 (오픈소스)", cert: "없음",
    status: "ok",
    modules: ["Set Up MLflow Server", "Tracing (Observability)", "Evaluation & Monitoring (LLM-as-a-judge)", "Prompt Management & Optimization", "AI Gateway (비용·접근 관리)", "Tracking (실험·파라미터·메트릭)", "Model Registry · Deployment", "Self-Hosting · Team Collaboration"],
    note: "실험·모델·프롬프트를 '재현 가능하게' 관리하고 싶어질 때, 즉 개인 스크립트를 팀 파이프라인으로 키울 시점에 배운다."
  },
  {
    id: 19, key: "신경망", stage: "s2", level: "입문~초급",
    title: "3Blue1Brown — Neural Networks",
    provider: "3Blue1Brown (Grant Sanderson)",
    url: "https://www.3blue1brown.com/topics/neural-networks",
    hours: "영상 총 약 1~2시간",
    lang: "한국어 자막 지원",
    cost: "무료", cert: "없음",
    status: "ok",
    modules: ["Ch1 But what is a Neural Network?", "Ch2 Gradient descent, how neural networks learn", "Ch3 What is backpropagation really doing?", "Ch4-5 Backpropagation calculus (연쇄법칙)", "Ch6 어텐션·트랜스포머", "Ch7 MLP는 지식을 어떻게 저장하는가"],
    note: "수식 없이 '왜 이렇게 동작하는가'를 시각적으로 먼저 잡는다. 딥러닝 입문 첫 주에 보면 이후 학습 속도가 달라진다."
  },
  {
    id: 20, key: "강화학습", stage: "s5", level: "중급",
    title: "Hugging Face Deep RL Course",
    provider: "Hugging Face (Thomas Simonini)",
    url: "https://huggingface.co/learn/deep-rl-course",
    hours: "8유닛 · 주당 3~4시간 (약 8~12주)",
    lang: "영어",
    cost: "무료", cert: "수료증 (과제 80% 완료)",
    status: "ok",
    modules: ["Unit1 Intro to Deep RL (LunarLander)", "Unit2 Q-Learning (FrozenLake·Taxi)", "Unit3 Deep Q-Learning (Space Invaders)", "Unit4 Reinforce (Policy Gradient 직접 구현)", "Unit5 Unity ML-Agents", "Unit6 Actor-Critic", "Unit8 PPO", "Bonus: Offline RL · Decision Transformer · Multi-Agent"],
    note: "강화학습을 '직접 에이전트를 학습시켜 게임을 깨는' 방식으로 배운다. Colab으로 환경 세팅 부담 없이 시작."
  },
  {
    id: 21, key: "AI 안전성", stage: "s5", level: "고급",
    title: "AI Alignment Forum",
    provider: "AI Alignment Forum (LessWrong)",
    url: "https://alignmentforum.org/",
    hours: "포럼형 (주제별 정독 시 수 주)",
    lang: "영어",
    cost: "무료", cert: "없음",
    status: "ok",
    modules: ["Scalable Oversight", "Debate", "Agent Foundations", "Value Drift", "AI Development Pause / Slowing Down AI", "Coordination & Cooperation", "최신 큐레이션 글 (/api/curated)"],
    note: "모델 성능이 아니라 '정렬·감독·오용 위험'을 연구하는 최전선 커뮤니티. 강의가 아니라 논문·글·토론 피드."
  },
  {
    id: 22, key: "AI 프로젝트", stage: "s6", level: "입문~고급",
    title: "freeCodeCamp — 프로젝트 기반 자격증",
    provider: "freeCodeCamp.org (비영리)",
    url: "https://www.freecodecamp.org/",
    hours: "자격증당 약 300시간",
    lang: "영어",
    cost: "완전 무료", cert: "자격증 발급",
    status: "ok",
    modules: ["Scientific Computing with Python", "Data Analysis with Python (NumPy·Pandas)", "Relational Database", "Data Visualization", "Machine Learning with Python (TensorFlow·NLP·RL)", "Back End Development and APIs", "필수 프로젝트 5개"],
    note: "AI로 넘어가기 전 코딩·데이터 기초를 '산출물'로 탄탄히 다지는 무료 기반 트랙. 자격증당 300시간 규모."
  },
  {
    id: 23, key: "Fast.ai", stage: "s3", level: "중급",
    title: "Practical Deep Learning for Coders",
    provider: "fast.ai (Jeremy Howard)",
    url: "https://course.fast.ai/",
    hours: "Part 1 13~15시간 / Part 2 30시간+",
    lang: "영어 (영상 자막)",
    cost: "무료", cert: "없음",
    status: "ok",
    modules: ["L1 Getting started", "L2 Deployment", "L3 Neural net foundations", "L4 Natural Language (NLP)", "L5 From-scratch model", "L6 Random forests", "L8 Convolutions (CNN)", "Part2: Stable Diffusion · Backpropagation · Transformers"],
    note: "'실습 먼저, 이론은 나중에' 방식. 두 번째 레슨에서 곧바로 배포까지 해본다. 1년 정도 코딩 경험자에게 진입장벽이 가장 낮다."
  },
  {
    id: 24, key: "스탠퍼드 머신러닝", stage: "s7", level: "고급",
    title: "Stanford CS229: Machine Learning",
    provider: "Stanford University",
    url: "https://cs229.stanford.edu/",
    hours: "학기 과정 (사실상 수백 시간)",
    lang: "영어",
    cost: "강의자료 공개 (일반인 정식 수강 불가)", cert: "없음 (등록생만)",
    status: "ok",
    modules: ["Supervised learning (생성적·파라메트릭 학습·신경망)", "Unsupervised learning (clustering·차원축소)", "Learning theory (bias/variance)", "Reinforcement learning & adaptive control", "로봇 제어·자율주행·바이오인포 등 응용"],
    note: "ML의 수학적 원리를 수식 수준에서 파고든다. 확률·선형대수·미적분 기반을 갖춘 뒤 도전할 때 가장 값진 코스."
  },
  {
    id: 25, key: "하버드 CS50 AI", stage: "s3", level: "중급~고급",
    title: "CS50's Introduction to AI with Python",
    provider: "Harvard University",
    url: "https://cs50.harvard.edu/ai/",
    hours: "7주 (주당 강의 1회 + 프로젝트 1개)",
    lang: "영어",
    cost: "OpenCourseWare 무료 (피드백은 edX)", cert: "edX 유료 수료증",
    status: "ok",
    modules: ["Week0 Search", "Week1 Knowledge", "Week2 Uncertainty", "Week3 Optimization", "Week4 Learning", "Week5 Neural Networks", "Week6 Language"],
    note: "AI의 알고리즘 원리를 파이썬 코드로 직접 구현한다. CS50x 또는 1년 이상 Python 경험이 필요."
  },
  {
    id: 26, key: "구글 AI", stage: "s2", level: "입문~중급",
    title: "Google for Developers — Machine Learning",
    provider: "Google",
    url: "https://developers.google.com/machine-learning",
    hours: "코스별 자기주도 (Crash Course 중심 수 주)",
    lang: "한국어 포함 다국어 UI",
    cost: "무료", cert: "미표기",
    status: "ok",
    modules: ["Introduction to Machine Learning", "ML Crash Course", "Problem Framing", "Managing ML Projects", "Decision Forests", "Recommendation Systems · Clustering", "Rules of ML · Responsible AI 가이드"],
    note: "특정 툴보다 'ML 기초 개념 + 구글의 실무 베스트 프랙티스'를 텍스트로 빠르게 훑을 때 최적."
  },
  {
    id: 27, key: "AWS 머신러닝", stage: "s7", level: "입문~중급",
    title: "AWS Training — Learn about AI/ML",
    provider: "Amazon Web Services",
    url: "https://aws.amazon.com/training/learn-about/machine-learning/",
    hours: "코스·러닝플랜 단위 (총 시간 미표기)",
    lang: "영어 (일부 한국어 자막)",
    cost: "상당수 무료 (Skill Builder Pro 유료)", cert: "AWS 자격증 경로",
    status: "ok",
    modules: ["Introduction to Generative AI – Art of the Possible", "ML Essentials for Decision Makers", "Generative AI Learning Plan for Developers", "Building GenAI Applications Using Amazon Bedrock", "Amazon SageMaker Unified Studio Foundations", "Amazon Bedrock AgentCore (Agentic AI)"],
    note: "AWS 생태계(Bedrock·SageMaker)에서 AI/ML을 실무 서비스 중심으로 배우고 자격증까지 연결한다."
  },
  {
    id: 28, key: "마이크로소프트 Azure AI", stage: "s7", level: "초급",
    title: "Get started with AI applications and agents on Azure",
    provider: "Microsoft Learn",
    url: "https://learn.microsoft.com/en-us/training/paths/get-started-with-artificial-intelligence-on-azure/",
    hours: "7개 모듈 (자기주도)",
    lang: "한국어 지원",
    cost: "무료 (계정만 필요)", cert: "배지·트로피 (achievement code)",
    status: "moved",
    modules: ["Get started with AI in Azure", "Generative AI and agents in Azure", "Text analysis in Azure", "Speech in Azure", "Computer vision in Azure", "AI-powered information extraction", "Microsoft Foundry IQ"],
    note: "학습경로 제목이 'Get started with AI applications and agents on Azure'로 갱신되었습니다. 기본 Python 이해가 필요."
  },
  {
    id: 29, key: "구글 클라우드 AI", stage: "s7", level: "입문~고급",
    title: "Google Cloud Skills Boost — AI Learning Paths",
    provider: "Google Cloud (Google Skills)",
    url: "https://www.cloudskillsboost.google/paths/ai",
    hours: "코스별 상이 (예: Intro to GenAI 45분)",
    lang: "영어 (일부 한국어 자막)",
    cost: "다수 무료 + 무료 스킬 배지 (유료 랩 별도)", cert: "스킬 배지 / 자격증 시험",
    status: "ok",
    modules: ["Beginner: Introduction to Generative AI", "Intermediate: Deploy and Manage GenAI Models", "Advanced: Generative AI for Developers", "Professional ML Engineer Certification", "TensorFlow on Google Cloud", "MLOps for Generative AI", "Build and Deploy ML Solutions on Vertex AI"],
    note: "학습 패스 목록은 로그인이 필요합니다. BigQuery/Vertex AI/TensorFlow 기반 실습 랩과 스킬 배지·자격증 준비에 적합."
  },
  {
    id: 30, key: "Kaggle 튜토리얼", stage: "s1", level: "입문~중급",
    title: "Kaggle Learn — Micro-courses",
    provider: "Kaggle",
    url: "https://www.kaggle.com/learn",
    hours: "코스당 수 시간",
    lang: "영어",
    cost: "무료", cert: "코스 완료 수료증",
    status: "ok",
    modules: ["Intro to Programming", "Python · Pandas · Data Visualization", "Intro to SQL · Advanced SQL", "Intro to ML · Intermediate ML", "Feature Engineering", "Intro to Deep Learning · Computer Vision", "Time Series · Data Cleaning · AI Ethics"],
    note: "노트북에서 바로 코드를 치며 데이터/ML 기초를 몇 시간 단위로 채우는 최고의 무료 입문 루트. 데이터 사이언스(#3)와 같은 허브."
  },
  {
    id: 31, key: "AI로 만들기 (빌드)", stage: "s6", level: "입문",
    title: "Build with AI (Google 공식 프로그램)",
    provider: "Google for Developers (대체)",
    url: "https://developers.google.com/community/build-with-ai",
    hours: "워크숍·커뮤니티 이벤트 (정형 시간 없음)",
    lang: "영어",
    cost: "무료 커뮤니티 프로그램", cert: "미표기",
    status: "dead",
    modules: ["Practical Workshops (첫 API 호출 → 배포)", "Modern AI Tech Stack (Gemma · Gemini · AI Studio)", "Gemini Enterprise Agent Platform (프로덕션 에이전트)", "Peer-to-Peer Guidance (GDE)", "390,000+ 개발자·5,400+ 이벤트"],
    note: "이미지의 원본 주소 buildwithai.com은 현재 404(도메인 사망)입니다. 대안으로 Google 공식 'Build with AI' 커뮤니티 프로그램을 연결했습니다."
  },
  {
    id: 32, key: "모두를 위한 AI", stage: "s0", level: "입문",
    title: "AI For Everyone",
    provider: "DeepLearning.AI (Andrew Ng) — Coursera",
    url: "https://www.coursera.org/learn/ai-for-everyone",
    hours: "총 약 7시간",
    lang: "영어 음성 · 27개 언어 자막(한국어 포함)",
    cost: "무료 청강 가능 (수료증 유료)", cert: "유료 공유 수료증",
    status: "ok",
    modules: ["Week1 What is AI?", "Week2 Building AI Projects", "Week3 Building AI In Your Company", "Week4 AI and Society"],
    note: "비전공 임원·기획자·PM이 AI를 '조직 전략과 기회' 관점에서 7시간 만에 이해하는 가장 정석적인 입문. 수강생 260만+."
  }
];

/* 24주 학습 일정 */
const SCHEDULE = [
  { week: "0", stage: "s0", title: "AI 리터러시 · 방향 잡기", hours: "6~8h", tasks: ["#32 모두를 위한 AI (Coursera, 7h) 청강", "#1 Elements of AI Part 1 (6챕터)", "학습 목표·트랙(개발/기획) 정하기"] },
  { week: "1", stage: "s1", title: "Python 첫걸음", hours: "8h", tasks: ["#2 Kaggle Python (5h) 완주", "환경 세팅: Python + Jupyter/Colab", "매일 30분 코드 타이핑"] },
  { week: "2", stage: "s1", title: "데이터 다루기 — Pandas", hours: "8h", tasks: ["#3 Kaggle Pandas 코스", "CSV 읽기·정제·그룹핑 실습"] },
  { week: "3", stage: "s1", title: "데이터 시각화", hours: "8h", tasks: ["#3 Kaggle Data Visualization", "Matplotlib·Seaborn으로 차트 3종 만들기"] },
  { week: "4", stage: "s1", title: "SQL · 기초 다지기", hours: "8h", tasks: ["#3 Kaggle Intro to SQL", "#22 freeCodeCamp Scientific Computing with Python 착수", "미니 분석 프로젝트 1개"] },
  { week: "5", stage: "s2", title: "머신러닝 입문", hours: "8h", tasks: ["#4 Kaggle Intro to ML (3h)", "첫 예측 모델 제출"] },
  { week: "6", stage: "s2", title: "신경망의 직관", hours: "8h", tasks: ["#19 3Blue1Brown 신경망 (한국어 자막)", "#26 Google ML Crash Course", "경사하강법·역전파 손으로 설명해보기"] },
  { week: "7", stage: "s2", title: "검증과 실전 대회", hours: "8h", tasks: ["#4 Model Validation·Random Forests 복습", "Kaggle Playground 대회 참가", "#26 Problem Framing"] },
  { week: "8", stage: "s3", title: "딥러닝 첫 코드", hours: "9h", tasks: ["#5 Kaggle Intro to Deep Learning (4h)", "Keras로 뉴런 1개 → 다층 신경망"] },
  { week: "9", stage: "s3", title: "전이학습과 배포", hours: "9h", tasks: ["#23 fast.ai Part1 L1~L2", "이미지 분류 모델 학습 → Gradio/웹 배포"] },
  { week: "10", stage: "s3", title: "모델 내부 뜯어보기", hours: "9h", tasks: ["#23 fast.ai L3~L5", "from-scratch 모델 구현"] },
  { week: "11", stage: "s3", title: "AI 알고리즘 구현", hours: "9h", tasks: ["#25 CS50 AI Week0~2 (Search·Knowledge·Uncertainty)", "탐색 알고리즘 파이썬 직접 구현"] },
  { week: "12", stage: "s4", title: "Transformer 이해", hours: "10h", tasks: ["#7 HF LLM Course Ch1~2", "pipeline()로 텍스트 생성·분류"] },
  { week: "13", stage: "s4", title: "프롬프트 마스터", hours: "10h", tasks: ["#11 Learn Prompting Basics~Intermediate (한국어)", "#12 OpenAI Quickstart", "프롬프트 10종 실험 노트 작성"] },
  { week: "14", stage: "s4", title: "RAG 만들기", hours: "10h", tasks: ["#6 Kaggle GenAI Day1~2 (Embeddings·RAG)", "#15 Zilliz 'Build a RAG App' (한국어)", "내 문서 Q&A 챗봇 1차 버전"] },
  { week: "15", stage: "s4", title: "에이전트 입문", hours: "10h", tasks: ["#8 HF Agents Course Unit1~2", "#6 Kaggle GenAI Day3 (Agents·LangGraph)", "도구를 쓰는 에이전트 1개"] },
  { week: "16", stage: "s4", title: "에이전트 프레임워크", hours: "10h", tasks: ["#8 HF Agents Course Unit3~4", "#14 LangChain / LangGraph 훅투어", "에이전트 완성 + 데모 배포"] },
  { week: "17", stage: "s5", title: "특화 ① (선택 트랙)", hours: "10h", tasks: ["#9 NLP 또는 #10 컴퓨터 비전", "#20 강화학습 또는 #17 파인튜닝 택1", "트랙 확정"] },
  { week: "18", stage: "s5", title: "특화 ②", hours: "10h", tasks: ["선택 트랙 심화 학습", "#15 임베딩·인덱스 최적화"] },
  { week: "19", stage: "s5", title: "특화 ③", hours: "10h", tasks: ["선택 트랙 프로젝트 착수", "#16 Microsoft Foundry (한국어) 또는 #21 AI 안전성"] },
  { week: "20", stage: "s5", title: "특화 ④ — 프로젝트 완성", hours: "10h", tasks: ["트랙 프로젝트 1개 완성", "README·데모·블로그 정리"] },
  { week: "21", stage: "s6", title: "MLOps 기초", hours: "10h", tasks: ["#18 MLflow Tracking·Model Registry", "학습 실험 로깅 자동화"] },
  { week: "22", stage: "s6", title: "LLM 관측과 평가", hours: "10h", tasks: ["#18 MLflow Tracing·Evaluation", "#13 HF Docs (PEFT·TRL)", "#31 Google Build with AI 워크숍 참여"] },
  { week: "23", stage: "s6", title: "포트폴리오 정리", hours: "10h", tasks: ["#22 freeCodeCamp 프로젝트 요건 충족", "프로젝트 3종 GitHub 정리", "이력서·포트폴리오 문서화"] },
  { week: "24+", stage: "s7", title: "심화 · 클라우드 · 자격증", hours: "주 8~10h", tasks: ["#24 Stanford CS229 (선형대수·확률 선행)", "#28 Azure AI / #27 AWS ML / #29 Google Cloud AI 중 택1", "#26 구글 ML 심화 코스"] }
];

const LEVELS = ["전체", "입문", "초급", "중급", "고급"];
const STATUS_LABEL = {
  ok: { text: "정상", cls: "ok" },
  moved: { text: "주소 변경", cls: "moved" },
  dead: { text: "링크 사망", cls: "dead" }
};
