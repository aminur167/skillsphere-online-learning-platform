"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useAuth } from "@/lib/auth-context";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/my-profile", label: "My Profile" }
];

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
          <Link href="/" className="text-2xl font-black text-ink">SkillSphere</Link>
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
            <>
              <div className="avatar">
                <div className="relative h-10 w-10 overflow-hidden rounded-full ring ring-primary ring-offset-2">
                  <Image src={user.photoURL} alt={user.name} fill className="object-cover" sizes="40px" />
                </div>
              </div>
              <button onClick={logout} className="btn btn-outline btn-primary">Logout</button>
            </>
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
