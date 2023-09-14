import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

export const metadata:Metadata = {
    title: "Leetcode solution | Dashboard",
    description: "Dashboard to manage leetcode solutions",
  }

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/");
  }

  return (
    <>
      <main className="pt-0">{children}</main>
    </>
  );
}
