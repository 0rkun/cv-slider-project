"use client";
import React, { useState } from "react";
import { ThemeToggle } from "./ThemeToggle";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center justify-around text-xl bg-amber-300 h-16">
      <p>
        <Link href="/">
          Create<strong>CV</strong>
        </Link>
      </p>
      <div>
        <div className="hidden sm:flex items-center justify-center gap-6 ">
          <p>
            <Link href="/create-cv">Create Free CV</Link>
          </p>
          <p>
            <Link href="#">Contact</Link>
          </p>
          <ThemeToggle />
        </div>
        {/* mobile menu */}

        <div className="flex sm:hidden">
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <GiHamburgerMenu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="flex flex-col items-center gap-16 ">
                <SheetTitle className="text-3xl">
                  <Link href="/" onClick={() => setOpen(false)}>
                    Create<strong>CV</strong>
                  </Link>
                </SheetTitle>
                <div className="flex flex-col justify-center items-center gap-4 ">
                  <p>
                    <Link href="/create-cv" onClick={() => setOpen(false)}>
                      Create Free CV
                    </Link>
                  </p>
                  <p>
                    <Link href="#">Contact</Link>
                  </p>
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
