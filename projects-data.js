/**
 * HIMADEV SONTINENI — SYSTEMS & PROJECTS DATA STORE
 * Easily add new projects here whenever you are ready!
 */

const SYSTEMS_PROJECTS = [
  {
    id: "aletheia",
    title: "Aletheia — Scientific Synthesis & NLI Verifier",
    shortName: "Aletheia Engine",
    category: "Autonomous AI & Scientific Verification",
    tag: "FLAGSHIP ARCHITECTURE",
    description: "Autonomous multi-agent DAG that harvests 4 academic APIs concurrently, enforces Adversarial NLI citation auditing, and streams verified research dossiers in real time.",
    githubUrl: "https://github.com/chowdaryhimadev-cyber/aletheia-researcher",
    liveDemoUrl: "https://aletheia-researcher.onrender.com/",
    repoName: "chowdaryhimadev-cyber / aletheia-researcher",
    metrics: [
      { value: "93.4%", label: "Citation Support Rate" },
      { value: "100%", label: "Hallucination Detection" },
      { value: "4 APIs", label: "arXiv • PubMed • OpenAlex • PMC" },
      { value: "Async", label: "Instant Task Cancellation" }
    ],
    pipeline: [
      "1. Hypothesis Scoper",
      "2. Multi-API Harvest",
      "3. Isolated Vault",
      "4. Adversarial NLI Judge"
    ],
    highlights: [
      { icon: "layers", text: "Deterministic LangGraph DAGs" },
      { icon: "shield-check", text: "Zero Cross-Run Vault Contamination" },
      { icon: "cpu", text: "Docker Production Ready" }
    ],
    techStack: ["FastAPI", "LangGraph", "WebSockets", "Docker", "PyTest", "SQLite"]
  }
];

window.SYSTEMS_PROJECTS = SYSTEMS_PROJECTS;
