"use client";

import Link from "next/link";

const topics = ["All", "JavaScript", "React", "Python", "Java", "Node.js"];

export default function TopicBar() {
  return (
    <div className="border-b bg-background">
      <div className="container mx-auto overflow-x-auto px-4">
        <div className="flex h-12 min-w-max items-center gap-6">
          {topics.map((topic) => (
            <Link
              key={topic}
              href="#"
              className="whitespace-nowrap text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {topic}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
