"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useState } from "react";
import { useAuth } from "@/lib/auth-context";

export default function LoginPage() {
  return (
    <Suspense fallback={<div className="section-shell py-20 text-center"><span className="loading loading-spinner loading-lg text-primary" /></div>}>
      <LoginForm />
    </Suspense>
  );
}

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirect = searchParams.get("redirect") || "/";
  const { login, googleLogin } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (login(email, password)) router.push(redirect);
  }

  function handleGoogleLogin() {
    googleLogin();
    router.push(redirect);
  }

  return (
    <section className="section-shell flex min-h-[70vh] items-center justify-center py-12">
      <div className="glass-panel w-full max-w-md rounded-lg p-7 shadow-soft">
        <h1 className="text-center text-3xl font-black text-ink">Login</h1>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <label className="form-control">
            <span className="label-text font-semibold">Email</span>
            <input className="input input-bordered bg-white" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <label className="form-control">
            <span className="label-text font-semibold">Password</span>
            <input className="input input-bordered bg-white" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
          </label>
          <button className="btn btn-primary">Login</button>
        </form>
        <button onClick={handleGoogleLogin} className="btn btn-outline btn-secondary mt-3 w-full">Continue with Google</button>
        <p className="mt-5 text-center text-sm text-slate-600">
          New to SkillSphere? <Link className="font-bold text-primary" href="/register">Register</Link>
        </p>
      </div>
    </section>
  );
}
