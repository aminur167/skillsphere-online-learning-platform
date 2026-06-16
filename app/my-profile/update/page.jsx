"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useAuth } from "@/lib/auth-context";

export default function UpdateProfilePage() {
  const router = useRouter();
  const { user, updateUser } = useAuth();
  const [name, setName] = useState("");
  const [photoURL, setPhotoURL] = useState("");

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
              <input className="input input-bordered bg-white" type="url" value={photoURL} onChange={(e) => setPhotoURL(e.target.value)} required />
            </label>
            <button className="btn btn-primary">Update Information</button>
          </form>
        </div>
      </section>
    </ProtectedRoute>
  );
}
