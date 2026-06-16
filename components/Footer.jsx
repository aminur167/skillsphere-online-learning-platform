import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white/80">
      <div className="section-shell grid gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="text-2xl font-black text-ink">SkillSphere</Link>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
            SkillSphere helps learners discover practical programs, follow guided lessons, and build career-ready skills.
          </p>
          <p className="mt-4 text-sm text-slate-600">Email: support@skillsphere.dev</p>
          <p className="text-sm text-slate-600">Phone: +880 1700 000 000</p>
        </div>
        <div>
          <h3 className="font-bold text-ink">Social</h3>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://x.com" target="_blank" rel="noreferrer">X</a>
          </div>
        </div>
        <div>
          <h3 className="font-bold text-ink">Legal</h3>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <Link href="/terms">Terms & Conditions</Link>
            <Link href="/privacy">Privacy Policy</Link>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-sm text-slate-500">
        Copyright 2026 SkillSphere. All rights reserved.
      </div>
    </footer>
  );
}
