"use client";
import { trpc } from "@/utils/trpc";

export default function Home() {
  const hello = trpc.hello.useQuery({ text: "client" });

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-extrabold">Next.js + tRPC = 😎</h1>
      <section className="mt-10 text-xl text-[#bada55]">
        {!hello.data ? <p>Loading…</p> : <p>{hello.data.greeting}</p>}
      </section>
    </main>
  );
}
