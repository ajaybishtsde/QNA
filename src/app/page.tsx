import Link from "next/link";
import { ArrowRight, Factory, FanIcon } from "lucide-react";
import { Button } from "../components/ui/button";

export default function HomePage() {
  return (
    <section className="flex min-h-[calc(100vh-8rem)] flex-col items-center justify-center px-4 text-center">
      <div className="max-w-2xl space-y-6">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
          Ask. Learn. Share.
        </h1>

        <p className="text-lg text-muted-foreground sm:text-xl">
          Join a community where developers and learners ask questions, share
          knowledge, and grow together.
        </p>

        <Link href="/login">
          <Button size="lg" className="gap-2">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>

      <div className="mt-16 flex items-center gap-6">
        <Link
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="ghost" size="icon">
            <Factory className="h-5 w-5" />
          </Button>
        </Link>

        <Link
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="ghost" size="icon">
            <FanIcon className="h-5 w-5" />
          </Button>
        </Link>
      </div>

      <p className="mt-6 text-sm text-muted-foreground">
        © {new Date().getFullYear()} Q&A App. All rights reserved.
      </p>
    </section>
  );
}
