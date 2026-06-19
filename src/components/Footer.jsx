import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-200 bg-white/80">
      <div className="section-shell grid gap-8 py-10 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link href="/" className="inline-flex items-center gap-2 text-2xl font-black text-ink">
            <span className="flex h-11 w-11 items-center justify-center rounded-lg bg-ink text-sm font-black text-white shadow-soft">
              SS
            </span>
            <span>SkillSphere</span>
          </Link>
          <p className="mt-3 max-w-md text-sm leading-6 text-slate-600">
            SkillSphere helps learners discover practical programs, follow guided lessons, and build career-ready skills.
          </p>
          <p className="mt-4 text-sm text-slate-600">Email: aminurhstu23@gmail.com</p>
          <p className="text-sm text-slate-600">Phone: 01308825783</p>
          <p className="text-sm text-slate-600">WhatsApp: 01827752014</p>
        </div>
        <div>
          <h3 className="font-bold text-ink">Social</h3>
          <div className="mt-3 grid gap-2 text-sm text-slate-600">
            <a href="https://www.facebook.com/aminur.islam.668300" target="_blank" rel="noreferrer">Facebook</a>
            <a href="https://www.linkedin.com/in/aminur167/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://x.com/aminur_167" target="_blank" rel="noreferrer">X</a>
            <a href="https://www.instagram.com/aminur_167/" target="_blank" rel="noreferrer">Instagram</a>
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
