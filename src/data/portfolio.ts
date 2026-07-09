export const PROFILE = {
  name: "Arkar Min",
  displayName: "Arkar Min (Kei)",
  role: "AI Engineer + Backend Engineer",
  email: "arkar.dev.kei@gmail.com",
  summary:
    "AI Engineer and Backend Software Engineer with 3+ years of experience building scalable backend platforms, production REST APIs, distributed systems, and LLM-powered systems.",
  focus:
    "I design practical AI product architecture around RAG pipelines, embeddings, vector search, AI agents, secure API design, multi-tenant SaaS, payment platforms, and production deployment.",
} as const;

export const HIGHLIGHTS = [
  {
    value: "3+",
    label: "years shipping backend and AI systems",
  },
  {
    value: "RAG",
    label: "pipelines with embeddings and vector search",
  },
  {
    value: "SaaS",
    label: "multi-tenant platforms and production APIs",
  },
] as const;

export const TECHNICAL_SKILLS = [
  {
    title: "AI / LLM / RAG",
    items: [
      "RAG Pipelines",
      "Chunking",
      "Embeddings",
      "Vector Search",
      "pgvector",
      "Qdrant",
      "Semantic Search",
      "Prompt Engineering",
      "AI Agents",
      "Tool Calling",
      "Reranking",
    ],
  },
  {
    title: "LLM APIs & Frameworks",
    items: [
      "OpenAI API",
      "OpenRouter API",
      "Mastra",
      "LangChain",
      "LangGraph",
      "LlamaIndex",
      "AWS Rekognition",
    ],
  },
  {
    title: "Backend",
    items: [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "Alembic",
      "Pydantic",
      "TypeScript",
      "Node.js",
      "NestJS",
      "ExpressJS",
      "TypeORM",
    ],
  },
  {
    title: "Data / Cloud / DevOps",
    items: [
      "PostgreSQL",
      "MySQL",
      "MongoDB",
      "Redis",
      "Docker",
      "GitHub Actions",
      "AWS S3",
      "BullMQ",
      "Socket.IO",
    ],
  },
] as const;

export const EXPERIENCE = [
  {
    company: "Origin Business Solutions",
    role: "Software Engineer (Backend, AI)",
    location: "On-site / Myanmar",
    period: "March 2025 - Present",
    highlights: [
      "Design secure, scalable, multi-tenant backend services and REST APIs for production business systems.",
      "Build RAG pipelines, LLM-powered features, AI agents, CI/CD pipelines, and Linux/AWS deployment workflows.",
    ],
  },
  {
    company: "AlphaX",
    role: "Full-stack Developer",
    location: "On-site / Myanmar",
    period: "July 2024 - March 2025",
    highlights: [
      "Led full-stack web applications, CMS dashboards, and e-commerce platforms with secure backend APIs.",
      "Built modular TypeScript and Node.js services while collaborating with product and UI/UX teams.",
    ],
  },
] as const;

export const EDUCATION = {
  school: "University of Greenwich",
  degree: "Bachelor of Science in Computing",
  period: "2022 - 2025",
} as const;

export const PROJECTS = [
  {
    title: "Biz24 AI E-commerce SaaS Platform",
    domain: "Multi-tenant AI customer support",
    summary:
      "Production-ready SaaS platform that lets each shop run a customizable LLM-powered support agent with RAG, persistent memory, multilingual responses, and real-time chat.",
    capabilities: [
      "Shop-scoped PDF/text ingestion, chunking, OpenAI-compatible embeddings, and Qdrant vector retrieval.",
      "Hybrid product search with PostgreSQL full-text search and Reciprocal Rank Fusion.",
      "Agent tools for product questions, orders, carts, checkout, cancellations, support escalation, Telegram, Facebook Messenger, and web chat.",
    ],
    tags: [
      "Python",
      "FastAPI",
      "LangChain",
      "PostgreSQL",
      "Qdrant",
      "Redis",
      "BullMQ",
      "Socket.IO",
    ],
  },
  {
    title: "MKI AI Material & Asset Management System",
    domain: "AI image classification for construction assets",
    summary:
      "AI-powered backend for classifying construction materials and assets from images, combining LLM image reasoning with AWS Rekognition Custom Labels.",
    capabilities: [
      "Generated structured Japanese descriptions for shape, material, texture, pattern, color, and use case.",
      "Matched image reasoning output against internal PDF knowledge records.",
      "Built S3 image pipelines, presigned URLs, dataset cleanup, Rekognition model startup, and Ground Truth-compatible metadata workflows.",
    ],
    tags: [
      "FastAPI",
      "Python",
      "OpenAI",
      "AWS",
      "AWS Rekognition",
      "MySQL",
      "SQLAlchemy",
      "Alembic",
    ],
  },
  {
    title: "CRM & Sales Agentic System",
    domain: "Sales workflow automation",
    summary:
      "Modular CRM backend with an AI-assisted quotation and sales agent architecture built around historical CRM context and approved business data.",
    capabilities: [
      "Managed leads, customers, quotations, contracts, sales pipelines, bulk uploads, activity logs, analytics, user access, and document services.",
      "Designed RAG-powered quotation description generation using approved CRM history.",
      "Built Sales AI Agent workflows for lead analysis, quotation assistance, follow-up suggestions, and customer context retrieval.",
    ],
    tags: [
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "Python",
      "LangChain",
      "pgvector",
    ],
  },
  {
    title: "OBS Payment Gateway Backend",
    domain: "Payment platform integration",
    summary:
      "Production-grade payment gateway backend unifying major Myanmar payment providers and card networks behind a single secure REST API.",
    capabilities: [
      "Implemented checkout sessions, API-key authentication, JWT request signing, duplicate order prevention, redirects, callbacks, and transaction inquiry workflows.",
      "Built transaction lifecycle management, MDR/service-fee calculations, RBAC/CASL permissions, OTP login, audit logs, webhook trails, provider logs, and merchant analytics.",
      "Integrated KBZPay, AYA Pay, Wave Pay, MPU, MMQR, APlus Pay, Visa, Mastercard, and JCB.",
    ],
    tags: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "TypeORM"],
  },
  {
    title: "Fair Price Taxi - Ride Hailing System",
    domain: "Real-time dispatch and mobility backend",
    summary:
      "Production ride-hailing backend supporting passenger, driver, and admin workflows across booking, dispatch, transactions, notifications, and analytics.",
    capabilities: [
      "Implemented real-time driver dispatch with Socket.IO, Redis, and BullMQ.",
      "Handled location tracking, auto-reject timeouts, ride status updates, push notifications, and driver eligibility checks.",
      "Designed dynamic pricing for car grades, distance fares, peak-hour rules, special-location fees, add-ons, penalties, multi-destination fees, and fare rounding.",
    ],
    tags: [
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Socket.IO",
      "Firebase",
      "AWS S3",
    ],
  },
  {
    title: "University Student & Payment Backend System",
    domain: "Education platform and payment workflows",
    summary:
      "Centralized university backend for registration, admissions, academic structures, online examinations, payment workflows, financial transactions, and bulk processing.",
    capabilities: [
      "Built external student validation APIs, dynamic fee calculation, multi-gateway aggregation, asynchronous webhooks, JWT/RBAC security, 2FA, and Turnstile protection.",
      "Implemented activity logging and high-performance ExcelJS pipelines for bulk academic and financial data operations.",
    ],
    tags: ["Node.js", "NestJS", "TypeScript", "PostgreSQL", "ExcelJS"],
  },
] as const;
