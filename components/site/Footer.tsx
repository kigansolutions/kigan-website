export function Footer() {
  return (
    <footer className="bg-paper-2 border-t border-ink-4/30">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-6 flex flex-col items-center gap-3">
        <nav className="flex items-center gap-5 mono-label text-[11px] text-ink-3">
          <a href="https://github.com/kigansolutions" target="_blank" rel="noopener" className="hover:text-ink transition-colors">
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/cameron-weyers" target="_blank" rel="noopener" className="hover:text-ink transition-colors">
            LinkedIn
          </a>
        </nav>
        <p className="mono-label text-[11px] text-ink-3">© 2026 Kigan Agentic AI Solutions. All rights reserved.</p>
      </div>
    </footer>
  );
}
