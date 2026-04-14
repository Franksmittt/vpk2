import { redirect } from "next/navigation";

/** Static alias: `/booking` resolves on the server to the hunt booking flow. */
export default function BookingAliasPage() {
  redirect("/reserve");
}
