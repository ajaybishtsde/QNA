import Navbar from "@/src/components/common/navbar";
import TopicBar from "@/src/components/common/topic-bar";
import type { ReactNode } from "react";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <TopicBar />
      <main className="container mx-auto min-h-[calc(100vh-4rem)] px-4 py-6">
        {children}
      </main>
    </>
  );
}
