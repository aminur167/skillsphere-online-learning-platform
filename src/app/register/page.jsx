"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { signInWithGoogle } from "@/lib/auth";
import { useAuth } from "@/lib/auth-context";

export default function RegisterPage() {
  const router = useRouter();
  const { register } = useAuth();
  const [form, setForm] = useState({ name: "", email: "", photoURL: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const fileInputRef = useRef(null);

  function handlePhotoSelect(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setForm((currentForm) => ({ ...currentForm, photoURL: reader.result }));
    };
    reader.readAsDataURL(file);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (register(form)) router.push("/login");
  }

  async function handleGoogleRegister() {
    try {
      await signInWithGoogle("/");
    } catch {
      toast.error("Google login is not configured yet");
    }
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
            {form.photoURL && (
              <div className="mb-3 flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3">
                <img src={form.photoURL} alt="Selected profile" className="h-14 w-14 rounded-full object-cover ring-2 ring-primary ring-offset-2" />
                <span className="text-sm font-semibold text-slate-600">Photo ready for your profile</span>
              </div>
            )}
            <input
              className="input input-bordered cursor-pointer bg-white"
              value={form.photoURL ? "Photo selected successfully" : ""}
              onClick={() => fileInputRef.current?.click()}
              placeholder="Click to choose a profile photo"
              readOnly
              required
            />
            <input ref={fileInputRef} className="hidden" type="file" accept="image/*" onChange={handlePhotoSelect} />
          </label>
          <label className="form-control">
            <span className="label-text font-semibold">Password</span>
            <div className="input input-bordered flex items-center gap-2 bg-white">
              <input
                className="grow bg-transparent outline-none"
                type={showPassword ? "text" : "password"}
                minLength={6}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                required
              />
              <button
                type="button"
                className="btn btn-ghost btn-xs"
                onClick={() => setShowPassword((current) => !current)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </div>
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
