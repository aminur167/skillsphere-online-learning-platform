"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useAuth } from "@/lib/auth-context";

export default function RegisterPage() {
  const router = useRouter();
  const { register, googleLogin } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", photoURL: "", password: "" });

  function handleSubmit(event) {
    event.preventDefault();
    if (register(form)) router.push("/login");
  }

  function handleGoogleRegister() {
    googleLogin();
    router.push("/");
  }

  return (
    <section className="section-shell flex min-h-[70vh] items-center justify-center py-12">
      <div className="glass-panel w-full max-w-lg rounded-lg p-7 shadow-soft">
        <h1 className="text-center text-3xl font-black text-ink">Registration</h1>
        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          <label className="form-control">
            <span className="label-text font-semibold">Name</span>
            <input className="input input-bordered bg-white" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} required />
          </label>
          <label className="form-control">
            <span className="label-text font-semibold">Email</span>
            <input className="input input-bordered bg-white" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} required />
          </label>
          <label className="form-control">
            <span className="label-text font-semibold">Photo URL</span>
            <input className="input input-bordered bg-white" type="url" value={form.photoURL} onChange={(e) => setForm({ ...form, photoURL: e.target.value })} required />
          </label>
          <label className="form-control">
            <span className="label-text font-semibold">Password</span>
            <input className="input input-bordered bg-white" type="password" minLength={6} value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} required />
          </label>
          <button className="btn btn-primary">Register</button>
        </form>
        <button onClick={handleGoogleRegister} className="btn btn-outline btn-secondary mt-3 w-full">Continue with Google</button>
        <p className="mt-5 text-center text-sm text-slate-600">
          Already have an account? <Link className="font-bold text-primary" href="/login">Login</Link>
        </p>
      </div>
    </section>
  );
}
