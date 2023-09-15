"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { QUESTIONS } from "@/config/constant";
import CardQuestion from "./cards/page";
export default function SolutionPage() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect: "/";
    },
  });

  return (
    <div className="flex-col flex-1 h-screen p-4 md:px-8 space-y-8 bg-gray-50">
      <div className="flex items-baseline justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            LeetJS Solutions!
          </h2>
          <p className="text-muted-foreground">Manage Solutions</p>
        </div>
        <div>
          <Button className="mt-4" onClick={() => signOut()}>
            Logout
          </Button>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 justify-center">
        {QUESTIONS.map((question) => (
          <CardQuestion question={question} key={question.id} />
        ))}
      </div>
    </div>
  );
}

SolutionPage.requireAuth = true;
