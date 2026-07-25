import type { Metadata } from "next";
import ThemeToggle from "../../components/ThemeToggle";

export const metadata: Metadata = {
  title: "Mehrdad Zaker, Ph.D.",
  description:
    "Research profile of Mehrdad Zaker, founder of Neural Intelligence Labs.",
};

export default function MehrdadProfile() {
  return (
    <main className="profile-page">
      <div className="shell">
        <header className="topbar">
          <a
            className="wordmark"
            href="/research"
            aria-label="Neural Intelligence Labs research home"
          >
            <span className="mark" aria-hidden="true" />
            <span>Neural Intelligence Labs</span>
          </a>
          <nav className="nav" aria-label="Profile navigation">
            <a href="/research">Research</a>
            <a href="/research#index-case">Index</a>
            <ThemeToggle />
            <a className="nav-cta" href="https://www.linkedin.com/in/mehrdadzaker">
              Connect
            </a>
          </nav>
        </header>

        <div className="profile-page-main">
          <div className="profile-page-grid">
            <aside className="profile-page-aside">
              <div className="profile-monogram" aria-hidden="true">
                MZ
              </div>
            </aside>
            <article>
              <p className="eyebrow">Researcher profile</p>
              <h1>Mehrdad Zaker, Ph.D.</h1>
              <p className="profile-role">
                Founder, Neural Intelligence Labs · San Francisco + Chicago
              </p>
              <p className="profile-intro">
                I study how agents learn to act in consequential software
                environments—and how planning, state, rewards, and verification
                shape what they can reliably do.
              </p>

              <section className="profile-section">
                <h2>Focus</h2>
                <p>
                  Current work centers on reinforcement-learning environments for
                  software engineering, terminal, and web tasks; reliable
                  long-running agent systems; and planning under operational
                  constraints.
                </p>
              </section>
              <section className="profile-section">
                <h2>Background</h2>
                <p>
                  Mehrdad earned a Ph.D. in computer science from Arizona State
                  University. His research background spans planning,
                  reinforcement learning, human–robot collaboration, and
                  explainable intelligent systems. He founded Neural Intelligence
                  Labs to connect research with deployable agent infrastructure.
                </p>
              </section>
              <section className="profile-section">
                <h2>Now</h2>
                <ul>
                  <li>Executable RL environments for SWE, terminal, and web agents</li>
                  <li>Reward contracts and verifier robustness</li>
                  <li>Operational memory, state, evidence, and recovery</li>
                  <li>Open research collaboration in San Francisco + Chicago</li>
                </ul>
              </section>
              <section className="profile-section">
                <h2>Connect</h2>
                <div className="profile-links">
                  <a href="https://www.linkedin.com/in/mehrdadzaker">LinkedIn</a>
                  <a href="https://huggingface.co/mzakersh">Hugging Face</a>
                  <a href="https://www.neuralint.io/">Neural Intelligence Labs</a>
                </div>
              </section>
            </article>
          </div>
        </div>

        <footer className="footer">
          <span>© 2026 Neural Intelligence Labs</span>
          <span>San Francisco + Chicago</span>
          <a href="/research">Back to research</a>
        </footer>
      </div>
    </main>
  );
}
