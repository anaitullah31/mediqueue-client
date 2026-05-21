"use client";

import Image from "next/image";
import Link from "next/link";
import { LogOut, User, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Avatar } from "@heroui/react";

const ProfileDropdown = ({ user, handleLogout }) => {
  const [openProfile, setOpenProfile] = useState(false);

  return (
    <div className="relative">
      {/* Profile Button */}
      <button className="flex items-center justify-center gap-2" onClick={() => setOpenProfile(!openProfile)}>
        <Avatar>
          <Avatar.Image
            alt="John Doe"
            className="object-cover"
            src={
              user?.image && user.image.startsWith("http")
                ? user.image
                : "User"
            }
          />
          <Avatar.Fallback>JD</Avatar.Fallback>
        </Avatar>
      </button>
      {/* Dropdown */}
      {openProfile && (
        <div className="absolute right-0 mt-3 w-52 rounded-2xl border border-border bg-background p-2 shadow-xl">
          {/* User Info */}
          <div className="border-b border-border px-3 py-3">
            <h3 className="font-semibold text-foreground">{user?.name}</h3>

            <p className="truncate text-sm text-muted-foreground">
              {user?.email}
            </p>
          </div>

          {/* Profile Link */}
          <Link
            href="/profile"
            className="mt-2 flex items-center gap-2 rounded-xl px-3 py-2 text-sm text-foreground transition hover:bg-muted"
          >
            <User size={18} />
            Profile
          </Link>

          {/* Logout */}
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-2 rounded-xl px-3 py-2 text-sm text-red-500 transition hover:bg-red-50 dark:hover:bg-red-500/10"
          >
            <LogOut size={18} />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
