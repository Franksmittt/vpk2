"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

/** Static-export friendly alias: `/booking` → `/reserve`. */
export default function BookingAliasPage() {
  const router = useRouter();
  useEffect(() => {
    router.replace("/reserve");
  }, [router]);
  return (
    <div className="min-h-[50vh] bg-black px-5 pt-32 text-center text-white">
      <p className="font-sans text-sm text-white/50">Redirecting to booking…</p>
      <p className="mt-4 font-sans text-xs text-white/35">
        If nothing happens,{" "}
        <Link href="/reserve" className="text-burnished-copper/90 underline-offset-2 hover:underline">
          continue to The Hunt
        </Link>
        .
      </p>
    </div>
  );
}
