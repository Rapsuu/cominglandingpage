import { createRoot } from "react-dom/client";
import { Radar } from "lucide-react";

function App() {
  return (
    <div className="page">
      <header>
        <a className="brand" href="#home" aria-label="ToriSniper etusivu">
          <span className="brand-mark" aria-hidden="true">
            <Radar size={25} strokeWidth={1.8} />
          </span>
          <span className="brand-copy">
            <span className="wordmark"><strong>Tori</strong>Sniper</span>
            <span className="tagline">ADVANTAGE OVER CASUALS</span>
          </span>
        </a>
      </header>

      <main id="home">
        <div className="signal"><span className="signal-dot" aria-hidden="true" />Jotain on tekeillä</div>
        <h1><span>Tulossa pian...</span></h1>
        <p className="intro">ToriSniper auttaa löytämään käytettyjen markkinoiden alihinnoitellut tuotteet ja arvioi niiden jälleenmyyntipotentiaalin. Löydä parhaat ostokset nopeammin ja tee parempia päätöksiä datan avulla.</p>
        <nav className="socials" aria-label="Seuraa ToriSniperiä">
          <a className="social-link" href="https://www.instagram.com/torisniper.fi/" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <path d="M17.5 6.5h.01" />
            </svg>
            Instagram
          </a>
          <a className="social-link" href="https://discord.gg/Eqvh8Yepgu" target="_blank" rel="noopener noreferrer">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M8 7.5A12.3 12.3 0 0 1 12 7a12.3 12.3 0 0 1 4 .5" />
              <path d="M6.5 8.5c-1.2 1.8-1.8 3.8-2 6.2 1.5 1.7 3.4 2.7 5.4 3.1l1.1-1.5" />
              <path d="M17.5 8.5c1.2 1.8 1.8 3.8 2 6.2-1.5 1.7-3.4 2.7-5.4 3.1L13 16.3" />
              <path d="M8.5 15.5h.01M15.5 15.5h.01" />
            </svg>
            Discord
          </a>
        </nav>
      </main>

      <footer>Lisää pian. Pysy kuulolla.</footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
