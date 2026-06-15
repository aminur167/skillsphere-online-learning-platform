import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";
import { AuthProvider } from "@/lib/auth-context";
import "./globals.css";

export const metadata: Metadata = {
  title: "SkillSphere - Online Learning Platform",
  description: "Explore, enroll, and track progress in modern skill-based courses."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-theme="skillsphere">
      <body>
        <AuthProvider>
          <Navbar />
          <main className="min-h-[calc(100vh-280px)]">{children}</main>
          <Footer />
          <Toaster position="top-center" toastOptions={{ duration: 2800 }} />
        </AuthProvider>
      </body>
    </html>
  );
}
