"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CircleUserRound } from "lucide-react";
import { navLinks } from "@/lib/constants";

const LeftSideBar = () => {
  const pathname = usePathname();
  const { user } = useUser();

  return (
    <div className="h-screen left-0 top-0 sticky p-10 flex flex-col gap-16 bg-blue-2 shadow-xl max-lg:hidden">
      <Image src="/logo.png" alt="logo" width={150} height={70} />

      <div className="flex flex-col gap-12">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 text-body-medium hover:text-blue-1 ${
              pathname === link.url ? "text-blue-1" : "text-grey-1"
            }`}
          >
            {link.icon} <p>{link.label}</p>
          </Link>
        ))}
      </div>
      <div className="flex gap-4 text-body-medium items-center">
          {user ? (
          <div className="flex gap-4 text-body-medium items-center">
          <UserButton afterSignOutUrl="/" />
          <p className="cursor-pointer">Profile</p>
          </div>
        ) : (
          <Link href="/sign-in"  className="flex gap-4 text-body-medium items-center">
            <CircleUserRound />
          <p className="cursor-pointer">Sign In</p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default LeftSideBar;
