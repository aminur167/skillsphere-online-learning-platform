"use client";

import Link from "next/link";
import { ProtectedRoute } from "@/components/ProtectedRoute";
import { useAuth } from "@/lib/auth-context";

function getInitials(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function MyProfilePage() {
  const { user } = useAuth();

  return (
    <ProtectedRoute>
      <section className="section-shell py-16">
        <div className="glass-panel mx-auto max-w-2xl rounded-lg p-8 text-center shadow-soft">
          {user && (
            <>
              <div className="relative mx-auto h-32 w-32 overflow-hidden rounded-full ring ring-primary ring-offset-4">
                {user.photoURL ? (
                  <img src={user.photoURL} alt={user.name} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center bg-ink text-3xl font-black text-white">
                    {getInitials(user.name)}
                  </div>
                )}
              </div>
              <h1 className="mt-6 text-4xl font-black text-ink">{user.name}</h1>
              <p className="mt-2 text-slate-600">{user.email}</p>
              <div className="mt-8 grid gap-4 rounded-lg bg-white p-5 text-left sm:grid-cols-3">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Status</p>
                  <p className="font-black text-success">Active</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Courses</p>
                  <p className="font-black text-ink">3 saved</p>
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-500">Progress</p>
                  <p className="font-black text-ink">68%</p>
                </div>
              </div>
              <Link href="/my-profile/update" className="btn btn-primary mt-8">Update Information</Link>
            </>
          )}
        </div>
      </section>
    </ProtectedRoute>
  );
}
