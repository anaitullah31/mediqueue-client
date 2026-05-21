"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const GoogleLogin = () => {
  const signIn = async () => {
    const data = await authClient.signIn.social({
      provider: "google",
    });
  };
  return (
    <button
      onClick={signIn}
      type="button"
      className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-xl border border-border px-6 py-3 text-sm font-semibold text-foreground transition hover:bg-muted"
    >
      <Image
        src="https://www.svgrepo.com/show/475656/google-color.svg"
        alt="Google"
        width={45}
        height={45}
        className="size-5"
      />
      Continue with Google
    </button>
  );
};

export default GoogleLogin;
