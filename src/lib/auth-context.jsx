"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

const AuthContext = createContext(null);
const CURRENT_USER_KEY = "skillsphere.currentUser";
const USERS_KEY = "skillsphere.users";

function getStoredUsers() {
  if (typeof window === "undefined") return [];
  const raw = window.localStorage.getItem(USERS_KEY);
  return raw ? JSON.parse(raw) : [];
}

function saveUsers(users) {
  window.localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

function buildNameFromEmail(email) {
  return email
    .split("@")[0]
    .split(/[._-]/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ") || "SkillSphere Learner";
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const raw = window.localStorage.getItem(CURRENT_USER_KEY);
    if (raw) setUser(JSON.parse(raw));
    setLoading(false);
  }, []);

  const value = useMemo(() => ({
    user,
    loading,
    login(email, password) {
      const normalizedEmail = email.trim().toLowerCase();
      if (!isValidEmail(normalizedEmail) || password.length < 6) {
        toast.error("Use a valid email and at least 6 characters password");
        return false;
      }
      const users = getStoredUsers();
      const found = users.find((item) => item.email.toLowerCase() === normalizedEmail);
      const nextUser = found
        ? { name: found.name, email: found.email, photoURL: found.photoURL }
        : { name: buildNameFromEmail(normalizedEmail), email: normalizedEmail, photoURL: "" };
      if (!found) {
        saveUsers([...users, { ...nextUser, password }]);
      }
      setUser(nextUser);
      window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(nextUser));
      toast.success("Login successful");
      return true;
    },
    register(payload) {
      const users = getStoredUsers();
      if (users.some((item) => item.email === payload.email)) {
        toast.error("This email is already registered");
        return false;
      }
      saveUsers([...users, payload]);
      toast.success("Registration successful. Please login.");
      return true;
    },
    googleLogin() {
      const nextUser = {
        name: "Aminur Islam",
        email: "aminurhstu23@gmail.com",
        photoURL: ""
      };
      setUser(nextUser);
      window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(nextUser));
      toast.success("Google login successful");
    },
    logout() {
      setUser(null);
      window.localStorage.removeItem(CURRENT_USER_KEY);
      toast.success("Logged out");
    },
    updateUser(payload) {
      if (!user) return;
      const nextUser = { ...user, ...payload };
      setUser(nextUser);
      window.localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(nextUser));
      const users = getStoredUsers().map((item) => item.email === user.email ? { ...item, ...payload } : item);
      saveUsers(users);
      toast.success("Profile updated");
    }
  }), [loading, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used inside AuthProvider");
  return context;
}
