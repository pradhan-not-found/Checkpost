<div align="center">
  <img src="./repo/banner.png" alt="Checkpost Banner" width="100%" />
  
  <br />
  <br />

  <h1><img src="./repo/checkpost-icon.png" height="40" align="absmiddle" /> Checkpost</h1>
  
  <p><strong>A modern, enterprise-grade AI security and monitoring dashboard.</strong></p>
</div>

**Checkpost** (repository: `vibeforge`) provides a comprehensive suite of tools for managing AI agents, testing Large Language Models (LLMs), and enforcing robust security policies—all wrapped in a stunning, highly responsive user interface.

---

## <img src="https://api.iconify.design/lucide/trophy.svg?color=white" width="24" height="24" align="absmiddle" /> Track

**03 — AI in Finance & E-commerce (FinTech)**

---

## <img src="https://api.iconify.design/lucide/target.svg?color=white" width="24" height="24" align="absmiddle" /> Problem Statement

As companies increasingly grant AI agents direct access to live databases, internal systems, and financial infrastructure — including corporate credit cards, payment gateways, and refund systems — a critical, largely unaddressed risk has emerged: **financial loss caused by autonomous AI agent behavior.**

Unlike traditional fraud (human-initiated, credit card theft, phishing), this new category of risk comes from the agents themselves. If an AI agent hallucinates a command, misinterprets an instruction, or enters an infinite retry loop, the consequences are immediate and severe:

- Unauthorized transactions
- Uncontrolled API / LLM spend
- Incorrect refund approvals
- Destructive database operations

All of this can happen in seconds, with **zero human oversight**.

Existing fintech fraud detection systems are built to catch human-driven fraud. **No equivalent control layer exists to govern financial and operational decisions made by autonomous AI agents.** As enterprises adopt agentic AI at scale, this gap represents a direct threat to financial security, budget integrity, and operational trust.

---

## <img src="https://api.iconify.design/lucide/lightbulb.svg?color=white" width="24" height="24" align="absmiddle" /> Our Solution

**Checkpost** is a Web Application Firewall built exclusively for autonomous AI agents. It acts as a **wire-level checkpoint** positioned entirely between the AI agent and every financial tool, API, or system it attempts to use.

Before any action executes, Checkpost:

1. **Intercepts** the request
2. **Evaluates** it against strict policy rules
3. **Allows, blocks, or pauses** it for human review

---

## <img src="https://api.iconify.design/lucide/layout-template.svg?color=white" width="24" height="24" align="absmiddle" /> Architecture — The Three Pillars

### 1️⃣ Deterministic Policy Engine *(The Rulebook)*
A sub-millisecond, rule-based engine — configured via a simple declarative **YAML** file — enforces:
- Deny-by-default rules
- Allow-lists for safe tools
- Exact parameter matching (blocks destructive commands / unauthorized transactions)

> No ML inference required for enforcement → near-zero latency (**<1ms**)

### 2️⃣ Cost Governance & Loop Protection *(The Hard Stop)*
- Real-time tracking of accumulated spend, tool calls, and retries
- Caps on loop counts to detect low-yield execution patterns
- When an agent hits its budget ceiling → **instant hard stop**, not a passive alert

### 3️⃣ Human-in-the-Loop (HITL) Interruption *(The Dashboard)*
- Sensitive actions (e.g. authorizing a refund, dropping a database table) trigger a **synchronous hold**
- Agent run is paused; a live dashboard shows the operator the intended action + reasoning
- Operator can **Approve** (resumes workflow) or **Reject** (blocks action, sends rejection back to the model)

Below is a high-level overview of the Checkpost architecture and user flow:

```mermaid
flowchart TD
    classDef default fill:#0f172a,stroke:#334155,stroke-width:1px,color:#e2e8f0
    classDef user fill:#0284c7,stroke:#bae6fd,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef agent fill:#8b5cf6,stroke:#ddd6fe,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef core fill:#1e293b,stroke:#6366f1,stroke-width:2px,color:#f8fafc,font-weight:bold
    classDef firewall fill:#7f1d1d,stroke:#fca5a5,stroke-width:2px,color:#ffffff,font-weight:bold
    classDef db fill:#020617,stroke:#38bdf8,stroke-width:2px,color:#e0f2fe
    classDef llm fill:#064e3b,stroke:#34d399,stroke-width:2px,color:#ecfdf5
    classDef alert fill:#b45309,stroke:#fcd34d,stroke-width:2px,color:#ffffff,font-weight:bold

    Admin(("Admin Operator")):::user
    Agent[["Autonomous AI Agent"]]:::agent

    Dash["Checkpost Dashboard<br/>(Next.js)"]:::core
    Proxy{"Proxy API Interceptor"}:::core
    
    WAF["Blast Radius Firewall<br/>(Spend Caps & Rules)"]:::firewall
    HITL{"Synchronous Hold<br/>(HITL Queue)"}:::alert
    
    DB[("Firebase Firestore<br/>(Policies & Traces)")]:::db
    LLMs[["Protected Resources<br/>(External LLMs)"]]:::llm

    Admin -->|Configures Policies| Dash
    Admin -.->|Approves/Rejects| HITL
    Dash <-->|Sync State| DB

    Agent ==>|1. Submits Payload| Proxy
    Proxy -->|2. Inspect Request| WAF
    WAF <-->|Fetch Rules| DB
    
    WAF -.->|3a. Policy Violated| HITL
    HITL -.->|Logs Held Action| DB
    
    WAF ==>|3b. Policy Passed| LLMs
    LLMs ==>|4. Model Output| Proxy
    Proxy ==>|5. Safe Response| Agent

    linkStyle default stroke:#64748b,stroke-width:2px,fill:none
```

## <img src="https://api.iconify.design/lucide/sparkles.svg?color=white" width="24" height="24" align="absmiddle" /> Features

| Feature | Description |
| :--- | :--- |
| **<img src="https://api.iconify.design/lucide/bar-chart.svg?color=white" width="20" height="20" align="absmiddle" /> Comprehensive Monitoring** | Keep track of system health with a real-time dashboard and detailed audit logs. |
| **<img src="https://api.iconify.design/lucide/bot.svg?color=white" width="20" height="20" align="absmiddle" /> Asset Management** | Seamlessly orchestrate your AI agents and perform isolated tests on various LLMs directly from the platform. |
| **<img src="https://api.iconify.design/lucide/shield-alert.svg?color=white" width="20" height="20" align="absmiddle" /> Advanced Security** | Define strict usage policies and monitor potential threats to ensure safe and compliant AI deployments. |
| **<img src="https://api.iconify.design/lucide/palette.svg?color=white" width="20" height="20" align="absmiddle" /> Premium UI/UX** | Built with Framer Motion, Tailwind CSS 4, and Lucide Icons for a beautiful, dynamic, and glassmorphism-inspired aesthetic. |
| **<img src="https://api.iconify.design/lucide/lock.svg?color=white" width="20" height="20" align="absmiddle" /> Secure Authentication** | Integrated with Firebase for secure, frictionless user authentication and session management. |

## <img src="https://api.iconify.design/lucide/layers.svg?color=white" width="24" height="24" align="absmiddle" /> Tech Stack

| Technology | Logo | Technology | Logo |
| :--- | :--- | :--- | :--- |
| **Next.js** | <img src="./repo/icons/nextjs.jpeg" width="32" style="border-radius:6px;" /> | **Framer Motion** | <img src="./repo/icons/framer.jpeg" width="32" style="border-radius:6px;" /> |
| **TypeScript** | <img src="./repo/icons/typescript.png" width="32" style="border-radius:6px;" /> | **Firebase** | <img src="./repo/icons/firebase.png" width="32" style="border-radius:6px;" /> |
| **React** | <img src="./repo/icons/react.png" width="32" style="border-radius:6px;" /> | **Supabase** | <img src="./repo/icons/supabase.jpeg" width="32" style="border-radius:6px;" /> |
| **Tailwind CSS** | <img src="./repo/icons/tailwindcss.jpeg" width="32" style="border-radius:6px;" /> | **Vercel** | <img src="./repo/icons/vercel.png" width="32" style="border-radius:6px;" /> |

## <img src="https://api.iconify.design/lucide/folder-git-2.svg?color=white" width="24" height="24" align="absmiddle" /> Project Structure

- `/src/app` - Next.js app router pages and layouts (Dashboard, Authentication, etc.)
- `/src/components` - Reusable React components (UI elements, Layouts)
- `/src/context` - React Context providers (AuthContext, DatabaseContext)
- `/src/lib` - Utility functions and third-party initializations (Firebase)

---

## <img src="https://api.iconify.design/lucide/bar-chart-3.svg?color=white" width="24" height="24" align="absmiddle" /> Impact

> **10,650+ AI agents** are currently secured by Checkpost.

Checkpost provides enterprises with a real-time financial control layer purpose-built for the agentic AI era — closing a gap that traditional fintech security tools were never designed to cover.

---

## <img src="https://api.iconify.design/lucide/users.svg?color=white" width="24" height="24" align="absmiddle" /> Team

| Photo | Name | Role |
| :---: | :--- | :--- |
| <img src="./public/teams/souradeeppradhan.png" width="60" style="border-radius: 50%; aspect-ratio: 1/1; object-fit: cover;" /> | **Souradeep Pradhan** | Full Stack Developer |
| <img src="./public/teams/anirudhhadas.png" width="60" style="border-radius: 50%; aspect-ratio: 1/1; object-fit: cover;" /> | **Aniruddha Das** | Full Stack Developer |
| <img src="./public/teams/sattwikdas.png" width="60" style="border-radius: 50%; aspect-ratio: 1/1; object-fit: cover;" /> | **Sattwik Das** | Full Stack Developer |
| <img src="./public/teams/sampurnachandra.png" width="60" style="border-radius: 50%; aspect-ratio: 1/1; object-fit: cover;" /> | **Sampurna Chandra** | Full Stack Developer |

---

## <img src="https://api.iconify.design/lucide/file-text.svg?color=white" width="24" height="24" align="absmiddle" /> License

This project is licensed under the terms found in the [LICENSE](./LICENSE) file (Apache-2.0).

---

<p align="center">Made with ❤️ for devs by devs — <b>Fantastic 4</b></p>
