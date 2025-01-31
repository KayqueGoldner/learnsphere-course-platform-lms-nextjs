import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { Suspense } from "react";

import { Button } from "@/components/ui/button";

const ConsumerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

const Navbar = () => {
  return (
    <header className="z-10 flex h-12 bg-background shadow">
      <nav className="container flex gap-4">
        <Link
          href="/"
          className="mr-auto flex items-center px-2 text-lg hover:underline"
        >
          LearnSphere
        </Link>

        <Suspense>
          <SignedIn>
            <Link
              href="/admin"
              className="flex items-center px-2 hover:bg-accent/10"
            >
              Admin
            </Link>
            <Link
              href="/courses"
              className="flex items-center px-2 hover:bg-accent/10"
            >
              My Courses
            </Link>
            <Link
              href="/purchases"
              className="flex items-center px-2 hover:bg-accent/10"
            >
              Purchase History
            </Link>

            <div className="size-8 self-center">
              <UserButton
                appearance={{
                  elements: {
                    userButtonAvatarBox: { width: "100%", height: "100%" },
                  },
                }}
              />
            </div>
          </SignedIn>
        </Suspense>
        <Suspense>
          <SignedOut>
            <Button className="self-center" asChild>
              <SignInButton>Sign In</SignInButton>
            </Button>
          </SignedOut>
        </Suspense>
      </nav>
    </header>
  );
};

export default ConsumerLayout;
