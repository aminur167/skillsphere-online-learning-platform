"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useAuth } from "@/lib/auth-context";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { user, updateUser } = useAuth();
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const fileInputRef = useRef(null);

  useEffect(() => {
    if (user) {
      setName(user.name);
      setPhotoURL(user.photoURL);
    }
  }, [user]);

  function handleSubmit(event) {
    event.preventDefault();
    updateUser({ name, photoURL });
    router.push("/my-profile");
  }

  function handlePhotoSelect(event) {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      setPhotoURL(reader.result);
      updateUser({ name, photoURL: reader.result });
    };
    reader.readAsDataURL(file);
  }

  return (
    <ProtectedRoute>
      <section className="section-shell flex min-h-[70vh] items-center justify-center py-12">
        <div className="glass-panel w-full max-w-lg rounded-lg p-7 shadow-soft">
          <h1 className="text-center text-3xl font-black text-ink">Update Information</h1>
          <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
            <label className="form-control">
              <span className="label-text font-semibold">Name</span>
              <input className="input input-bordered bg-white" value={name} onChange={(e) => setName(e.target.value)} required />
            </label>
            <label className="form-control">
              <span className="label-text font-semibold">Image URL</span>
              {photoURL && (
                <div className="mb-3 flex items-center gap-3 rounded-lg border border-slate-200 bg-white p-3">
                  <img src={photoURL} alt="Selected profile" className="h-14 w-14 rounded-full object-cover ring-2 ring-primary ring-offset-2" />
                  <span className="text-sm font-semibold text-slate-600">Photo updated on your profile</span>
                </div>
              )}
              <input
                className="input input-bordered cursor-pointer bg-white"
                value={photoURL ? "Photo selected successfully" : ""}
                onClick={() => fileInputRef.current?.click()}
                placeholder="Click to choose a profile photo"
                readOnly
                required
              />
              <input ref={fileInputRef} className="hidden" type="file" accept="image/*" onChange={handlePhotoSelect} />
            </label>
            <button className="btn btn-primary">Update Information</button>
          </form>
        </div>
      </section>
    </ProtectedRoute>
  );
}
