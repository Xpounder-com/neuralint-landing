import ThemeToggle from "../components/ThemeToggle";

const programs = [
  {
    number: "01",
    title: "Executable environments",
    body: "Resettable, observable worlds for training and evaluating agents across repositories, terminals, and browser-based workflows.",
  },
  {
    number: "02",
    title: "Reward & verification",
    body: "Testable outcome contracts, partial-credit signals, and adversarial checks that distinguish task completion from reward hacking.",
  },
  {
    number: "03",
    title: "Curriculum & transfer",
    body: "Task generation and curricula that transfer skills from shell operations to software engineering and stateful web work.",
  },
  {
    number: "04",
    title: "Planning under constraints",
    body: "Reasoning, search, and recovery for long-horizon agents operating with limited context, time, permissions, and evidence.",
  },
  {
    number: "05",
    title: "Operational state",
    body: "Memory and state architectures that make long-running work resumable, auditable, and robust to interruption.",
  },
  {
    number: "06",
    title: "Industrial agent systems",
    body: "Applying reliable agent techniques to document operations, robotics, manufacturing, procurement, and finance.",
  },
];

const projects = [
  {
    code: "NIL–01",
    type: "Agent runtime",
    title: "Selva",
    hook: "Agents that can pick up where they left off.",
    description:
      "A stateful runtime for long-running agent work—keeping plans, tool actions, evidence, checkpoints, and recovery separate from the conversation window.",
    story:
      "The idea: an agent should survive interruption without losing the plot.",
    image: "/projects/selva.webp",
    alt: "A chartreuse signal finding a reliable path through a branching agent-state architecture.",
    status: "Prototype",
    href: null,
  },
  {
    code: "NIL–02",
    type: "Software engineering",
    title: "RepoFix",
    hook: "Find the fault. Make the smallest repair. Prove it.",
    description:
      "A repository-repair workflow that turns debugging into an evidence loop: reproduce one failure, isolate the layer, propose a focused patch, and run the decisive test.",
    story:
      "The idea: a useful coding agent returns a verified repair, not a plausible diff.",
    image: "/projects/repofix.webp",
    alt: "A fractured software graph passing through a diagnostic bridge and reconnecting as a verified repository.",
    status: "Prototype",
    href: null,
  },
  {
    code: "NIL–03",
    type: "Document operations",
    title: "Index",
    hook: "Documents in. Reconciled action out.",
    description:
      "An AI document-operations workspace for reviewing invoices and inbox documents, reconciling records, routing approvals, and syncing clean evidence into business systems.",
    story:
      "The idea: automation becomes trustworthy when every action carries its proof.",
    image: "/projects/index.webp",
    alt: "Messy invoices and records flowing through blue reconciliation gates into a verified system of record.",
    status: "Product",
    href: "#index-case",
  },
  {
    code: "NIL–04",
    type: "RL environments",
    title: "Executable Worlds",
    hook: "Give software agents a world they can learn from.",
    description:
      "A research build for resettable, verifiable training environments spanning terminal, repository, and browser tasks—with state, consequences, rewards, and recovery.",
    story:
      "The idea: environment quality sets the ceiling on what an agent can learn.",
    image: "/projects/executable-worlds.webp",
    alt: "One reinforcement-learning loop connecting terminal, repository, and web task environments.",
    status: "Research build",
    href: null,
  },
  {
    code: "NIL–05",
    type: "Personal productivity",
    title: "Deep Focus",
    hook: "Protect attention long enough to do work that matters.",
    description:
      "A calm focus app in development for turning intention into a protected work session—reducing the pull of fragmented attention and making sustained progress visible.",
    story:
      "The idea: focus should feel like a space you enter, not a punishment you endure.",
    image: "/projects/deep-focus.webp",
    alt: "Distraction signals passing through a blue filter into a quiet, protected focus chamber.",
    status: "In development",
    href: null,
  },
  {
    code: "NIL–06",
    type: "AI fashion commerce",
    title: "LinkedFull",
    hook: "Turn a look you love into something you can actually find.",
    description:
      "A prompt-to-style shopping app that uses text or visual inspiration to discover fashion across multiple stores, personalize recommendations, and preview choices with virtual try-on.",
    story:
      "The idea: shopping should begin with your taste—not a retailer’s endless feed.",
    image: "/projects/linkedfull.webp",
    alt: "Fashion inspiration moving through visual search and multi-store matching into a coordinated virtual outfit.",
    status: "Available on iOS",
    href: "https://apps.apple.com/us/app/linkedfull/id6737245343",
  },
];

const indexWorkflows = [
  {
    title: "Invoice match",
    label: "PO · receipt · tax",
    body: "Tie every mismatch to its source document, proposed owner, and approval path.",
  },
  {
    title: "Inbox triage",
    label: "Assigned work queue",
    body: "Turn loose documents into tagged, assigned, reviewable work.",
  },
  {
    title: "Posting proof",
    label: "Audit before approval",
    body: "Show GL, cash, inventory, risk, and source evidence before anything syncs.",
  },
  {
    title: "Customer follow up",
    label: "Never stall silently",
    body: "Connect orders, invoices, payments, and notes to the missing next step.",
  },
  {
    title: "Inventory holds",
    label: "Stock exceptions",
    body: "Link counts, shortages, and reorder triggers to the documents behind them.",
  },
  {
    title: "Cash dashboard",
    label: "Late work visible",
    body: "Keep open AR, approvals, and blocked work visible in one cash queue.",
  },
];

const indexStages = [
  ["01", "Discover", "Map document sets, client systems, and exception rates."],
  [
    "02",
    "Configure",
    "Define blueprint fields, validators, queues, and evidence-backed review states.",
  ],
  [
    "03",
    "Validate",
    "Run partner-led acceptance with evidence attached to every extracted value.",
  ],
  [
    "04",
    "Launch",
    "Sync approved work into the ERP, TMS, CRM, or vertical system of record.",
  ],
];

const indexPartnerPaths = [
  {
    title: "Certified implementer",
    body: "For ERP and accounting consultants configuring Index inside client rollouts.",
    items: [
      "Blueprint catalog access",
      "Implementation playbooks",
      "Partner enablement",
      "Client handoff support",
    ],
  },
  {
    title: "Solution partner",
    body: "For firms building a repeatable document-operations practice with Index.",
    items: [
      "Partner-branded workspace",
      "Document operations playbook",
      "Named solutions lead",
      "Priority blueprint requests",
    ],
  },
  {
    title: "Embedded OEM",
    body: "For software platforms embedding Index workflows inside their own product.",
    items: [
      "Embedded review surfaces",
      "API and webhook guidance",
      "Security review support",
      "Roadmap alignment",
    ],
  },
];

function Header() {
  return (
    <header className="topbar">
      <a className="wordmark" href="/research" aria-label="Neural Intelligence Labs research home">
        <span className="mark" aria-hidden="true" />
        <span>Neural Intelligence Labs</span>
      </a>
      <nav className="nav" aria-label="Primary navigation">
        <a href="#programs">Research</a>
        <a href="#portfolio">Portfolio</a>
        <a href="/apps">Apps</a>
        <a href="/people/mehrdad">People</a>
        <a href="#index-case">Index</a>
        <ThemeToggle />
        <a className="nav-cta" href="#collaborate">
          Collaborate
        </a>
      </nav>
    </header>
  );
}

export default function ResearchPage() {
  return (
    <main className="site">
      <div className="shell">
        <Header />
        <section className="hero">
          <div>
            <p className="eyebrow">
              Independent AI research · San Francisco + Chicago
            </p>
            <h1>
              Environments for agents that <em>learn</em> by doing.
            </h1>
          </div>
          <div className="hero-copy">
            <p>
              We study reinforcement-learning environments, planning, and reliable
              agent systems for software, web, terminal, and operational work.
            </p>
            <div className="button-row">
              <a className="button primary" href="#focus">
                Current focus
              </a>
              <a className="button secondary" href="#portfolio">
                View portfolio
              </a>
            </div>
          </div>
          <div className="hero-orbit" aria-hidden="true" />
        </section>

        <section className="section" id="programs">
          <div className="section-head">
            <span className="section-index">01 / Research program</span>
            <div>
              <h2 className="section-title">
                The environment is part of the intelligence.
              </h2>
              <p className="lead">
                Better agents require more than better policies. They need worlds
                with legible state, meaningful consequences, trustworthy feedback,
                and enough variation to learn skills that transfer.
              </p>
            </div>
          </div>
          <div className="program-grid">
            {programs.map((program) => (
              <article className="program" key={program.number}>
                <span className="program-num">{program.number}</span>
                <h3>{program.title}</h3>
                <p>{program.body}</p>
              </article>
            ))}
          </div>
        </section>
      </div>

      <div className="focus-band" id="focus">
        <div className="shell">
          <section className="section">
            <div className="focus-grid">
              <div>
                <span className="report-status">First report in development</span>
                <h2 className="report-title">
                  Executable Worlds for Learning Software Agents
                </h2>
                <p className="report-summary">
                  A practical research framework for building RL environments
                  across software engineering, terminal, and web tasks—where every
                  episode can be reset, every outcome can be verified, and every
                  failure produces useful evidence.
                </p>
              </div>
              <aside className="report-spec" aria-label="Report scope">
                <div className="spec-row">
                  <span>Format</span>
                  <span>Technical report + reference environment</span>
                </div>
                <div className="spec-row">
                  <span>Scope</span>
                  <span>SWE · Terminal · Web</span>
                </div>
                <div className="spec-row">
                  <span>Thesis</span>
                  <span>Environment quality bounds agent learning</span>
                </div>
                <div className="spec-row">
                  <span>Target</span>
                  <span>Public draft · 3 weeks</span>
                </div>
              </aside>
            </div>
            <div className="method-flow" aria-label="Environment lifecycle">
              <div className="method-step">
                <code>STATE_01</code>
                <strong>Initialize</strong>
                <span>Materialize a controlled, inspectable task state.</span>
              </div>
              <div className="method-step">
                <code>ACT_02</code>
                <strong>Interact</strong>
                <span>Expose consequential actions through real tools.</span>
              </div>
              <div className="method-step">
                <code>VERIFY_03</code>
                <strong>Evaluate</strong>
                <span>Check outcomes against independent reward contracts.</span>
              </div>
              <div className="method-step">
                <code>RESET_04</code>
                <strong>Recover</strong>
                <span>Capture evidence, reset cheaply, and vary the next episode.</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="shell">
        <section className="section portfolio-section" id="portfolio">
          <div className="section-head">
            <span className="section-index">02 / Maker&apos;s portfolio</span>
            <div>
              <h2 className="section-title">
                Things I built to make agents useful.
              </h2>
              <p className="lead">
                Products, prototypes, and research systems from Neural Intelligence
                Labs. Each one starts with the same question: what would make an
                intelligent system more capable, legible, and trustworthy?
              </p>
            </div>
          </div>
          <div className="portfolio-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card ${index === 0 || index === 3 ? "project-card-wide" : ""}`}
                key={project.title}
              >
                <figure className="project-visual">
                  <img
                    src={project.image}
                    alt={project.alt}
                    width="1536"
                    height="1024"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  <figcaption className="project-stamp">
                    <span>{project.code}</span>
                    <span>MZ / NIL</span>
                  </figcaption>
                </figure>
                <div className="project-copy">
                  <div className="project-meta">
                    <span>{project.type}</span>
                    <span>{project.status}</span>
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-hook">{project.hook}</p>
                  <p className="project-description">{project.description}</p>
                  <div className="project-foot">
                    <p>{project.story}</p>
                    {project.href ? (
                      <a className="project-link" href={project.href}>
                        Explore product
                      </a>
                    ) : (
                      <span className="project-progress">
                        Case study in progress
                      </span>
                    )}
                  </div>
                </div>
              </article>
            ))}
            <aside className="studio-forward">
              <div className="studio-forward-index">
                <span>Next</span>
                <strong>06 → ∞</strong>
              </div>
              <div>
                <p className="eyebrow">In the workshop</p>
                <h3>More apps are on the way.</h3>
                <p>
                  This is a living maker&apos;s portfolio. New products will join
                  the same visual system as they move from experiment to prototype
                  to something people can use.
                </p>
              </div>
              <span className="portfolio-note-mark" aria-hidden="true" />
            </aside>
          </div>
          <article className="index-case" id="index-case">
            <div className="index-case-intro">
              <div>
                <span className="section-index">NIL–03 / Index</span>
                <h3>
                  AI document operations for finance and operations teams.
                </h3>
              </div>
              <div>
                <p>
                  Index turns invoices, inbox documents, approvals, and posting
                  evidence into one review-to-sync workspace. It is the document
                  layer between messy operational work and the systems clients
                  already run.
                </p>
                <a
                  className="button index-button"
                  href="mailto:mehrdadz@neuralint.io?subject=Index%20partner%20or%20demo"
                >
                  Discuss Index
                </a>
              </div>
            </div>

            <div className="index-case-block">
              <div className="index-case-label">
                <span>01</span>
                <strong>Workflow blueprints</strong>
              </div>
              <div className="index-workflow-grid">
                {indexWorkflows.map((workflow) => (
                  <div className="index-workflow" key={workflow.title}>
                    <span>{workflow.label}</span>
                    <h4>{workflow.title}</h4>
                    <p>{workflow.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="index-case-block">
              <div className="index-case-label">
                <span>02</span>
                <strong>Implementation model</strong>
              </div>
              <div className="index-stage-grid">
                {indexStages.map(([number, title, body]) => (
                  <div className="index-stage" key={number}>
                    <span>{number}</span>
                    <h4>{title}</h4>
                    <p>{body}</p>
                  </div>
                ))}
              </div>
              <p className="index-connectors">
                Connects with Salesforce, QuickBooks, HubSpot, Stripe, NetSuite,
                Anrok, DocuSign, Gmail, Mercury, Plaid, Slack, and the vertical
                systems clients already depend on.
              </p>
            </div>

            <div className="index-case-block">
              <div className="index-case-label">
                <span>03</span>
                <strong>Partner paths</strong>
              </div>
              <div className="index-partner-grid">
                {indexPartnerPaths.map((path) => (
                  <div className="index-partner" key={path.title}>
                    <h4>{path.title}</h4>
                    <p>{path.body}</p>
                    <ul>
                      {path.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="index-case-outro">
              <p className="eyebrow">Start with one workflow</p>
              <h3>Blueprint. Proof path. Launch kit.</h3>
              <p>
                Begin with invoice match, customer follow up, posting proof, or
                the cash dashboard—then expand after the operating path is
                working.
              </p>
            </div>
          </article>
          <div className="portfolio-note">
            <span className="portfolio-note-mark" aria-hidden="true" />
            <p>
              One visual language, many systems. The registration mark and
              chartreuse signal identify work made inside Neural Intelligence
              Labs—before you read the name.
            </p>
          </div>
        </section>

        <section className="section" id="people">
          <div className="profile-card">
            <img
              className="profile-portrait"
              src="/mehrdad-zaker-headshot.jpeg"
              alt="Mehrdad Zaker"
              loading="lazy"
              decoding="async"
            />
            <div className="profile-copy">
              <p className="eyebrow">Founder & researcher</p>
              <h2>Mehrdad Zaker, Ph.D.</h2>
              <p className="profile-role">
                Reinforcement learning · Planning · Agent systems
              </p>
              <p className="profile-bio">
                Mehrdad is a computer scientist and founder of Neural Intelligence
                Labs. His work connects reinforcement learning, planning, and
                human-centered agent systems with the systems problems that make
                long-running AI work reliable in practice.
              </p>
              <div className="profile-links">
                <a href="/people/mehrdad">Lab profile</a>
                <a href="https://www.mehrdadzaker.com">Personal site & writing</a>
                <a href="https://www.linkedin.com/in/mehrdadzaker">LinkedIn</a>
                <a href="https://huggingface.co/mzakersh">Hugging Face</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="collaborate">
          <div className="collab">
            <h2>Build a better world for agents to learn in.</h2>
            <div>
              <p>
                Open to research collaborations, benchmark partnerships, visiting
                talks, and working sessions in San Francisco + Chicago around agent
                environments and reliable AI systems.
              </p>
              <a
                className="button primary"
                href="https://www.linkedin.com/in/mehrdadzaker"
              >
                Start a conversation
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>© 2026 Neural Intelligence Labs</span>
          <span>San Francisco + Chicago</span>
          <a href="/apps">Apps & policies</a>
          <a href="#index-case">Explore Index ↑</a>
        </footer>
      </div>
    </main>
  );
}
