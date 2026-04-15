import { siteUrl } from "@/lib/site";

/** Shared with `metadata.description` on `/reserve`. */
export const RESERVE_PAGE_DESCRIPTION =
  "Waterberg dates. Solo or squad. First stalk or fiftieth. Plains and DG where the plan allows. Tell us who travels and what species owns your sleep.";

const reservePageUrl = siteUrl("/reserve");
const bookHuntUrl = siteUrl("/reserve#book-hunt");

/**
 * WebPage + ReserveAction so the action is attached to a URL Google can crawl,
 * not a floating ReserveAction root (clearer @graph semantics).
 */
export function buildReservePageJsonLd() {
  const webPageId = `${reservePageUrl}#webpage`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": webPageId,
        url: reservePageUrl,
        name: "Book Your Hunt | Vaalpenskraal Game Reserve",
        description: RESERVE_PAGE_DESCRIPTION,
        potentialAction: {
          "@type": "ReserveAction",
          name: "Enquire to book a hunt at Vaalpenskraal Game Reserve",
          description:
            "Submit a hunt enquiry with preferred dates, party size, and species focus. Vaalpenskraal replies with quota, next steps, and realistic planning for the Waterberg estate.",
          target: {
            "@type": "EntryPoint",
            url: bookHuntUrl,
          },
        },
      },
    ],
  };
}
