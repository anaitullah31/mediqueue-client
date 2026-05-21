"use client";

import Link from "next/link";
import { Mail, Lock, Eye, User, ImageIcon } from "lucide-react";
import GoogleLogin from "../components/GoogleLogin";
import { authClient } from "../../lib/auth-client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";


const RegisterPageContent = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const password = user.password;

    // Uppercase validation
    if (!/[A-Z]/.test(password)) {
      return setErrorMessage(
        "Password must contain at least one uppercase letter",
      );
    }

    // Lowercase validation
    if (!/[a-z]/.test(password)) {
      return setErrorMessage(
        "Password must contain at least one lowercase letter",
      );
    }

    // Minimum length validation
    if (password.length < 8) {
      return setErrorMessage("Password must be at least 8 characters long");
    }

    const { data, error } = await authClient.signUp.email(
      {
        email: user.email,
        password: user.password,
        name: user.name,
        image: user.image,
        callbackURL: "/",
      },
      {
        onRequest: () => {
          setLoading(true);
        },
        onSuccess: () => {
          setLoading(false);
          router.push("/login");
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
          <h1 className="text-3xl font-bold text-foreground">Create Account</h1>

          <p className="mt-2 text-sm text-muted-foreground">
            Join MediQueue and start learning today
          </p>
        </div>

        <form onSubmit={handleFormSubmit} className="space-y-5">
          {/* Name */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Full Name
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
              <User className="size-5 text-muted-foreground" />

              <input
                required
                type="text"
                name="name"
                placeholder="Enter your Full Name"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Image URL */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Image URL
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
              <ImageIcon className="size-5 text-muted-foreground" />

              <input
                required
                type="text"
                name="image"
                placeholder="Paste your image URL"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Email
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
              <Mail className="size-5 text-muted-foreground" />

              <input
                required
                type="email"
                name="email"
                placeholder="Enter your Email"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block text-sm font-semibold text-foreground">
              Password
            </label>

            <div className="flex items-center gap-3 rounded-xl border border-border bg-background px-4 py-3 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20">
              <Lock className="size-5 text-muted-foreground" />

              <input
                required
                type="password"
                name="password"
                placeholder="Create your Password"
                className="w-full bg-transparent text-sm text-foreground outline-none placeholder:text-muted-foreground"
              />

              <button type="button">
                <Eye className="size-5 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Terms */}
          <label className="flex items-center gap-2 text-sm text-foreground">
            <input type="checkbox" className="size-4 accent-primary" />I agree
            to the Terms & Conditions
          </label>
          {errorMessage && (
            <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-500">
              {errorMessage}
            </p>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full ${loading ? "" : "cursor-pointer"} rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90`}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        {/* Login */}
        <p className="mt-7 text-center text-sm text-foreground">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-primary">
            Sign In
          </Link>
        </p>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-border" />
          <span className="text-sm text-muted-foreground">Or With</span>
          <div className="h-px flex-1 bg-border" />
        </div>

        {/* Google Button */}
        <GoogleLogin />
      </div>
    </div>
  );
};

export default RegisterPageContent;
