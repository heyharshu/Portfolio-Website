import React, { useState, useEffect, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { motion } from 'framer-motion';
import './style.css';

const work = [
  {
    id: '01',
    title: 'Ask your data',
    type: 'AI APPLICATION / DATA ANALYTICS',
    year: '2026',
    description: 'A conversation with your ecommerce data. Ask a question in plain English and explore the SQL, results, and exports behind the answer.',
    tags: ['React', 'FastAPI', 'PostgreSQL', 'Ollama / Qwen'],
    url: 'https://github.com/heyharshu/text_to_sql',
    detail: '450 synthetic orders · 4 database tables · Read-only SQL validation',
    art: 'data'
  },
  {
    id: '02',
    title: 'MediWise',
    type: 'GENERATIVE AI / RAG',
    year: '2026',
    description: 'Turning medical PDFs into searchable conversations, with a streaming interface that supports English and Hindi.',
    tags: ['LangChain', 'Gemini', 'ChromaDB', 'React'],
    url: 'https://github.com/heyharshu/Medical-Report-Rag-Chatbot',
    detail: 'PDF extraction · Semantic retrieval · Bilingual responses',
    art: 'medical'
  },
  {
    id: '03',
    title: 'ManoSutra AI',
    type: 'MACHINE LEARNING / IoT',
    year: '2026',
    description: 'Exploring stress and focus by connecting EEG signals and facial-recognition data in one interactive application.',
    tags: ['Arduino', 'OpenCV', 'Flask', 'MySQL'],
    url: 'https://www.linkedin.com/posts/harsh-gupta-heytechie_ai-machinelearning-eeg-activity-7447501018176876544-k2gL',
    detail: '2 input streams · Connected hardware · Web interface',
    art: 'brain'
  }
];

const experience = [
  {
    date: 'MAY — AUG 2026',
    role: 'Data Analyst Intern',
    place: 'Worthwell Papers Pvt. Ltd.',
    text: 'Automated lead capture across WhatsApp and website enquiries. Connected n8n, Google Apps Script, and Sheets to clean records and support sales reporting.'
  },
  {
    date: 'JAN — APR 2026',
    role: 'Web Developer Intern',
    place: 'Lets Make Company',
    text: 'Built a tax calculator with PHP and JavaScript, and integrated enquiry forms with a custom CRM through REST APIs.'
  },
  {
    date: 'SEP 2025 — PRESENT',
    role: 'Founding Member & IoT Lead',
    place: 'Mentroid',
    text: 'Built websites and dashboards for approximately 8 clients, coordinating teams of around 4 across web development and IoT projects.'
  }
];

function Arrow({ className = '' }) {
  return <span aria-hidden="true" className={'arrow ' + className}>↗</span>;
}

function ProjectArt({ kind }) {
  return (
    <div className={'project-visual ' + kind} aria-label="Illustrative project concept">
      <span className="concept-label">PROJECT CONCEPT</span>
      {kind === 'data' ? (
        <div className="data-window">
          <div className="window-top">
            <span className="window-dots">● ● ●</span>
            <span>ask your data</span>
            <span>↗</span>
          </div>
          <div className="data-content">
            <div className="data-question">
              What can my data tell me? <span>↵</span>
            </div>
            <div className="chart">
              {[36, 62, 49, 88, 65, 104, 78, 122, 96].map((h, i) => (
                <i key={i} style={{ height: h }} />
              ))}
            </div>
            <div className="window-foot">
              <span>NATURAL LANGUAGE</span>
              <span>→</span>
              <span>SQL & INSIGHTS</span>
            </div>
          </div>
        </div>
      ) : kind === 'medical' ? (
        <>
          <div className="medical-disc">✳</div>
          <div className="medical-word">
            Medi<span>Wise</span>
            <small>MAKE ROOM FOR CLARITY.</small>
          </div>
          <span className="language-chip">EN ↔ हिन्दी</span>
        </>
      ) : (
        <>
          <svg className="signal" viewBox="0 0 600 260" fill="none" aria-hidden="true">
            <defs>
              <linearGradient id="signal" x1="0" x2="600" gradientUnits="userSpaceOnUse">
                <stop stopColor="#fba27d" />
                <stop offset="1" stopColor="#f1fbc2" />
              </linearGradient>
            </defs>
            {[0, 1, 2, 3, 4].map((v) => (
              <path
                key={v}
                d={`M0 ${125 + v * 5} C80 ${80 - v * 20} 100 ${170 + v * 20} 170 125 S240 ${
                  10 + v * 30
                } 285 125 S350 ${230 - v * 20} 400 125 S500 ${30 + v * 30} 600 125`}
                stroke="url(#signal)"
                strokeWidth="2"
                opacity={1 - v * 0.15}
              />
            ))}
          </svg>
          <span className="signal-caption">
            HUMAN SIGNALS.
            <br />
            MACHINE INSIGHTS.
          </span>
          <span className="signal-dot" />
        </>
      )}
    </div>
  );
}

function App() {
  const [menu, setMenu] = useState(false);
  const [selected, setSelected] = useState(null);
  const [mailStatus, setMailStatus] = useState('');
  const dialog = useRef(null);
  const menuButton = useRef(null);

  useEffect(() => {
    if (selected) dialog.current?.showModal();
  }, [selected]);

  useEffect(() => {
    if (!menu) return;
    const escape = (e) => {
      if (e.key === 'Escape') {
        setMenu(false);
        menuButton.current?.focus();
      }
    };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, [menu]);

  function email(e) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const name = String(f.get('name')).trim();
    const address = String(f.get('email')).trim();
    const message = String(f.get('message')).trim();
    if (!name || !address || !message) return;
    window.location.href = `mailto:harshjiji555@gmail.com?subject=${encodeURIComponent(
      'Portfolio enquiry from ' + name
    )}&body=${encodeURIComponent(message + '\n\nFrom: ' + name + '\nEmail: ' + address)}`;
    setMailStatus('Your email app will open with this draft. Send it there to get in touch.');
  }

  return (
    <>
      <header className="site-header">
        <a className="logo" href="#home" aria-label="Harsh Gupta home">
          harsh<span>✳</span>
        </a>
        <nav aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#work">Selected work</a>
          <a href="#journey">Journey</a>
          <a href="#contact">
            Let's talk <Arrow />
          </a>
        </nav>
        <button
          ref={menuButton}
          className={'menu-button ' + (menu ? 'is-open' : '')}
          onClick={() => setMenu(!menu)}
          aria-expanded={menu}
          aria-controls="menu-panel"
          aria-label={menu ? 'Close menu' : 'Open menu'}
        >
          <i />
          <i />
        </button>
      </header>

      {menu && (
        <div id="menu-panel" className="menu-panel">
          <div>
            {[
              ['About', '#about'],
              ['Selected work', '#work'],
              ['Journey', '#journey'],
              ['Contact', '#contact']
            ].map(([label, url], i) => (
              <a key={url} href={url} onClick={() => setMenu(false)}>
                <small>0{i + 1}</small>
                {label}
                <Arrow />
              </a>
            ))}
          </div>
          <aside>
            <span className="label">HAVE SOMETHING IN MIND?</span>
            <a href="mailto:harshjiji555@gmail.com">harshjiji555@gmail.com</a>
            <a href="https://github.com/heyharshu" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/harsh-gupta-heytechie" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
          </aside>
        </div>
      )}

      <main>
        <section className="hero" id="home">
          <div className="hero-top">
            <span className="label">
              GURUGRAM, INDIA
              <br />
              CREATING WITH CODE & CURIOSITY.
            </span>
            <span className="availability">
              <i /> OPEN TO OPPORTUNITIES
            </span>
          </div>
          <div className="hero-backdrop" aria-hidden="true">
            BUILD.
          </div>
          <div className="hero-art" aria-hidden="true">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="orbit orbit-three" />
            <div className="core">
              h<span>.</span>
            </div>
            <span className="cross c1">+</span>
            <span className="cross c2">+</span>
            <span className="art-coordinate">
              28.4595° N
              <br />
              77.0266° E
            </span>
          </div>
          <p className="hero-note">
            I build AI applications
            <br />
            and digital experiences
            <br />
            that make complexity useful.
          </p>
          <motion.div 
            className="hero-profile-circle"
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
          >
            <img src="/harsh-profile.png" alt="Harsh Gupta" />
          </motion.div>
          <a className="floating-project" href="#work">
            <span className="mini-art">↗</span>
            <span>
              <small>LATEST EXPLORATION</small>
              Ask your data
            </span>
            <Arrow />
          </a>
          <div className="hero-bottom">
            <div>
              <span className="label">AI / ML DEVELOPER · CLASS OF 2027</span>
              <h1>
                HARSH GUPTA<span>✳</span>
              </h1>
            </div>
            <a className="hero-scroll" href="#about" aria-label="Scroll to about">
              ↓
            </a>
          </div>
        </section>

        <div className="expertise-band">
          <span>
            AT THE INTERSECTION
            <br />
            OF IDEAS & EXECUTION
          </span>
          <b>AI & ML</b>
          <b>Full-stack</b>
          <b>Data analytics</b>
          <b>Automation</b>
          <b>IoT</b>
        </div>

        <section className="about section" id="about">
          <div className="section-kicker">
            <span className="asterisk">✳</span> A LITTLE ABOUT ME
          </div>
          <motion.div
            className="about-main"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
          >
            <h2>
              CURIOUS MIND.
              <br />
              HANDS-ON BUILDER.
              <br />
              <span>ALWAYS LEARNING.</span>
            </h2>
            <div className="about-columns">
              <p>
                I'm Harsh, a Computer Science student specializing in AI & ML at VIT Bhopal. I turn questions
                into experiments—and experiments into applications people can use.
              </p>
              <div>
                <p>
                  My work moves between language models, data pipelines, web interfaces, and connected hardware. I
                  enjoy figuring out how the pieces fit together.
                </p>
                <a className="text-link" href="/Harsh-Gupta-Resume.pdf" download>
                  Download my résumé <Arrow />
                </a>
              </div>
            </div>
            <div className="facts">
              <div>
                <strong>03</strong>
                <span>FEATURED PROJECTS</span>
              </div>
              <div>
                <strong>02</strong>
                <span>INDUSTRY INTERNSHIPS</span>
              </div>
              <div>
                <strong>2027</strong>
                <span>B.TECH GRADUATION</span>
              </div>
            </div>
          </motion.div>
        </section>

        <section id="work" className="work section">
          <div className="section-heading">
            <div>
              <div className="section-kicker">
                <span className="asterisk">✳</span> SELECTED WORK
              </div>
              <h2>
                LESS TALK.
                <br />
                <span>MORE BUILDING.</span>
              </h2>
            </div>
            <p>
              Ideas made tangible.
              <br />A few things I've been working on.
            </p>
          </div>
          <div className="work-grid">
            {work.map((p, i) => (
              <motion.article
                key={p.id}
                className={'work-card work-' + i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
              >
                <button className="art-button" onClick={() => setSelected(p)} aria-label={'Explore ' + p.title}>
                  <ProjectArt kind={p.art} />
                  <span className="project-open">
                    <Arrow />
                  </span>
                </button>
                <div className="work-title">
                  <div>
                    <span className="label">
                      {p.id} / {p.type}
                    </span>
                    <h3>{p.title}</h3>
                  </div>
                  <button onClick={() => setSelected(p)} aria-label={'Details for ' + p.title}>
                    <Arrow />
                  </button>
                </div>
                <p>{p.description}</p>
              </motion.article>
            ))}
            <motion.div
              className="work-aside"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            >
              <span className="asterisk big">✳</span>
              <h3>
                THE BEST WAY
                <br />
                TO LEARN?
                <br />
                <em>BUILD IT.</em>
              </h3>
              <a className="text-link" href="https://github.com/heyharshu" target="_blank" rel="noreferrer">
                More on GitHub <Arrow />
              </a>
            </motion.div>
          </div>
        </section>

        <section className="capabilities section" id="skills">
          <div className="section-kicker">
            <span className="asterisk">✳</span> WHAT I WORK WITH
          </div>
          <div className="capability-list">
            {[
              [
                '01',
                'INTELLIGENT APPLICATIONS',
                'From retrieval pipelines to model-backed experiences.',
                ['Python', 'LangChain', 'RAG', 'Ollama', 'Model fine-tuning']
              ],
              [
                '02',
                'WEB & PRODUCT DEVELOPMENT',
                'Connecting thoughtful interfaces to practical backends.',
                ['React', 'Next.js', 'FastAPI', 'Node.js', 'REST APIs']
              ],
              [
                '03',
                'DATA & AUTOMATION',
                'Making information cleaner, clearer, and more useful.',
                ['SQL', 'PostgreSQL', 'Power BI', 'n8n', 'Google Apps Script']
              ],
              [
                '04',
                'CONNECTED SYSTEMS',
                'Bringing software into the physical world.',
                ['Arduino', 'OpenCV', 'IoT', 'Flask', 'AWS']
              ]
            ].map(([n, title, desc, tags]) => (
              <motion.div
                className="capability"
                key={n}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: parseInt(n) * 0.1, ease: 'easeOut' }}
              >
                <span className="label">/{n}</span>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                  <div className="tags">
                    {tags.map((t) => (
                      <span key={t}>{t}</span>
                    ))}
                  </div>
                </div>
                <Arrow />
              </motion.div>
            ))}
          </div>
        </section>

        <section id="journey" className="journey">
          <div className="journey-top">
            <div className="section-kicker">
              <span className="asterisk">✳</span> EXPERIENCE, IN PROGRESS
            </div>
            <h2>
              REAL PROBLEMS.
              <br />
              <span>REAL LEARNING.</span>
            </h2>
          </div>
          <div className="experience-list">
            {experience.map((e, i) => (
              <motion.article
                key={e.role}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
              >
                <span className="label">
                  0{i + 1} / {e.date}
                </span>
                <div>
                  <h3>{e.role}</h3>
                  <span className="company">{e.place}</span>
                </div>
                <p>{e.text}</p>
              </motion.article>
            ))}
          </div>
          <motion.div
            className="achievement"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <span className="asterisk">✳</span>
            <strong>TOP 5%</strong>
            <p>
              NPTEL IoT certification
              <br />
              IIT Kharagpur · India
            </p>
            <span className="achievement-line" />
            <strong>AIR 183</strong>
            <p>
              Bharat Space Education Research Centre
              <br />
              Winter Internship selection exam
            </p>
          </motion.div>
        </section>

        <section className="play-section section">
          <div className="play-symbol" aria-hidden="true">
            ✚
          </div>
          <div>
            <div className="section-kicker">A SMALL DETOUR</div>
            <h2>
              ALL WORK?
              <br />
              <span>NOT QUITE.</span>
            </h2>
            <p>
              There's a playable side to this portfolio.
              <br />
              Collect coins. Explore projects. Take the scenic route.
            </p>
          </div>
          <a
            className="dark-button"
            href={
              window.location.hostname === '127.0.0.1' || window.location.hostname === 'localhost'
                ? 'http://127.0.0.1:5173/'
                : 'https://games.heyharshu.space'
            }
            target="_blank"
            rel="noreferrer"
          >
            ENTER HARSH WORLD <Arrow />
          </a>
        </section>

        <section id="contact" className="contact">
          <div className="contact-copy">
            <div className="section-kicker">
              <span className="asterisk">✳</span> THE NEXT GOOD IDEA STARTS HERE
            </div>
            <h2>
              LET'S BUILD
              <br />
              SOMETHING
              <br />
              <span>TOGETHER.</span>
            </h2>
            <a href="mailto:harshjiji555@gmail.com" className="contact-email">
              harshjiji555@gmail.com <Arrow />
            </a>
            <p>
              Internships, graduate opportunities,
              <br />
              collaborations, or a good conversation.
            </p>
          </div>
          <form onSubmit={email}>
            <span className="label">SAY HELLO</span>
            <h3>What are you thinking?</h3>
            <label>
              Your name
              <input required name="name" autoComplete="name" placeholder="Name" />
            </label>
            <label>
              Email address
              <input required type="email" name="email" autoComplete="email" placeholder="you@example.com" />
            </label>
            <label>
              Your idea
              <textarea required name="message" rows="3" placeholder="Tell me a little about it…" />
            </label>
            <button className="dark-button" type="submit">
              CREATE EMAIL <Arrow />
            </button>
            <p className="form-note" role="status">
              {mailStatus || 'Opens your email app with a draft. Nothing is sent automatically.'}
            </p>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-top">
          <a className="logo" href="#home">
            harsh<span>✳</span>
          </a>
          <p>
            Building useful things
            <br />
            with AI, code & curiosity.
          </p>
          <div>
            <a href="https://github.com/heyharshu" target="_blank" rel="noreferrer">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/harsh-gupta-heytechie" target="_blank" rel="noreferrer">
              LinkedIn ↗
            </a>
            <a href="/Harsh-Gupta-Resume.pdf" download>
              Résumé ↓
            </a>
          </div>
          <a href="#home" className="back-top">
            BACK TO TOP ↑
          </a>
        </div>
        <div className="footer-name" aria-hidden="true">
          HARSH GUPTA<span>✳</span>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} HARSH GUPTA</span>
          <span>MADE WITH INTENTION. BUILT WITH REACT.</span>
          <span>GURUGRAM, INDIA</span>
        </div>
      </footer>

      <dialog
        aria-label="Project details"
        ref={dialog}
        onClose={() => setSelected(null)}
        onClick={(e) => {
          if (e.target === e.currentTarget) dialog.current.close();
        }}
      >
        {selected && (
          <>
            <button className="dialog-close" onClick={() => dialog.current.close()} aria-label="Close project">
              ×
            </button>
            <ProjectArt kind={selected.art} />
            <div className="dialog-body">
              <span className="label">{selected.type}</span>
              <h2>{selected.title}</h2>
              <p>{selected.description}</p>
              <p>{selected.detail}</p>
              <div className="tags">
                {selected.tags.map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </div>
              <a className="dark-button" href={selected.url} target="_blank" rel="noreferrer">
                {selected.art === 'brain' ? 'VIEW PROJECT STORY' : 'EXPLORE THE CODE'} <Arrow />
              </a>
            </div>
          </>
        )}
      </dialog>
    </>
  );
}

createRoot(document.getElementById('root')).render(<App />);
