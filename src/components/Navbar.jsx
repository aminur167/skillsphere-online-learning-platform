"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/my-profile", label: "My Profile" }
];

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export function Navbar() {
  const pathname = usePathname();
  const { user, logout, loading } = useAuth();

  return (
    <div className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
      <nav className="section-shell navbar px-0">
        <div className="navbar-start">
          <div className="dropdown">
            <button className="btn btn-ghost lg:hidden" aria-label="Open menu">
              <span className="text-xl">=</span>
            </button>
            <ul className="menu dropdown-content z-[1] mt-3 w-52 rounded-lg bg-white p-2 shadow-soft">
              {links.map((link) => (
                <li key={link.href}><Link href={link.href}>{link.label}</Link></li>
              ))}
            </ul>
          </div>
          <Link href="/" className="flex items-center gap-2 text-2xl font-black text-ink">
            <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-ink text-sm font-black text-white shadow-soft">
              SS
            </span>
            <span>SkillSphere</span>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-1 px-1">
            {links.map((link) => (
              <li key={link.href}>
                <Link className={pathname === link.href ? "font-bold text-primary" : ""} href={link.href}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end gap-2">
          {loading ? (
            <span className="loading loading-spinner loading-sm" />
          ) : user ? (
            <div className="flex items-center gap-3">
              <div className="hidden text-right sm:block">
                <p className="text-sm font-black leading-none text-ink">{user.name}</p>
                <p className="mt-1 text-xs font-semibold text-slate-500">Premium Learner</p>
              </div>
              <div className="h-11 w-11 overflow-hidden rounded-full bg-ink text-sm font-black text-white ring-2 ring-primary ring-offset-2">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.name} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center">{getInitials(user.name)}</div>
                )}
              </div>
              <button onClick={logout} className="btn btn-outline btn-primary">Logout</button>
            </div>
          ) : (
            <>
              <Link href="/login" className="btn btn-ghost">Login</Link>
              <Link href="/register" className="btn btn-primary">Register</Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}
