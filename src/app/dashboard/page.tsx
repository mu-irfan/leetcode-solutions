"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { QUESTIONS } from "@/config/constant";
import CardQuestion from "@/components/cards/cards";

import MobileNav from "@/components/navbar/mobile-nav";
import MainNav from "@/components/navbar/mian-nav";

export default function SolutionPage() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect: "/";
    },
  });

  return (
    <div className="flex-col flex-1 h-screen p-4 md:px-8 space-y-8 bg-gray-50">
      <div className="flex items-center mt-6 md:mt-0 md:items-baseline justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            LeetJS Solutions!
          </h2>
          <p className="text-muted-foreground">Manage Solutions</p>
        </div>
        <div className="mr-2 md:mr-6">
          <MobileNav />
          <MainNav />
        </div>
      </div>
      <hr />
      <div className="flex flex-wrap gap-3 justify-center">
        {QUESTIONS.map((ques) => (
          <CardQuestion question={ques} key={ques.id} />
        ))}
      </div>
    </div>
  );
}

SolutionPage.requireAuth = true;
