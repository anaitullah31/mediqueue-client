"use client";

import Link from "next/link";
import { Mail, Lock, Eye } from "lucide-react";
import GoogleLogin from "../components/GoogleLogin";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import { toast } from "react-toastify";


const LoginPageContent = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());
    await authClient.signIn.email(
      {
        email: user.email,
        password: user.password,
        callbackURL: "/",
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onSuccess: () => {
          setLoading(false);
        },
        onError: (ctx) => {
          setLoading(false);
          toast.error(ctx.error.message);
        },
      },
    );
  };

  return (
    <div className="mx-auto flex min-h-[calc(100vh-379px)] max-w-7xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md rounded-3xl border border-border bg-background p-6 shadow-xl md:p-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to continue to MediQueue
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Email
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
              <Mail className="size-5 text-muted-foreground" />
              <input
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Password
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
              <Lock className="size-5 text-muted-foreground" />
              <input
                type="password"
                name="password"
                placeholder="Enter your Password"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
              <button type="button">
                <Eye className="size-5 text-muted-foreground" />
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-foreground">
              <input type="checkbox" className="size-4 accent-primary" />
              Remember me
            </label>

            <Link href="/forgot-password" className="font-medium text-primary">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`w-full ${loading ? "" : "cursor-pointer"} rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>

        <p className="mt-7 text-center text-sm text-foreground">
          Don&apos;t have an account?{" "}
          <Link href="/register" className="font-medium text-primary">
            Sign Up
          </Link>
        </p>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm text-muted-foreground">Or With</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        <GoogleLogin />
      </div>
    </div>
  );
};

export default LoginPageContent;
