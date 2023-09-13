"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function SolutionPage() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect: "/";
    },
    
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <h2>Dashboard `{session.data?.user?.email}`</h2>
      <Button className="mt-4" onClick={() => signOut()}>Logout</Button>
    </div>
  );
}

SolutionPage.requireAuth = true;