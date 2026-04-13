"use client";

import { useSearchParams } from "next/navigation";
import ContactForm from "@/components/forms/ContactForm";

function topicFromIntent(intent: string | null): string {
  const map: Record<string, string> = {
    hunt: "hunt",
    lodge: "lodge",
    group: "group",
    family: "family",
    international: "international",
    media: "media",
  };
  if (!intent) return "hunt";
  return map[intent] ?? "hunt";
}

export default function ContactIntentForm() {
  const sp = useSearchParams();
  const defaultTopic = topicFromIntent(sp.get("intent"));
  return <ContactForm key={defaultTopic} defaultTopic={defaultTopic} />;
}
