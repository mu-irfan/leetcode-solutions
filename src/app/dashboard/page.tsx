"use client";
import React from "react";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { QUESTIONS } from "@/config/constant";
import Link from "next/link";
import { LiaShareSolid } from "react-icons/lia";
import { HiOutlineEye } from "react-icons/hi2";
export default function SolutionPage() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect: "/";
    },
  });

  function truncateString(str: string, maxLength: number) {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.substring(0, maxLength) + "...";
    }
  }

  return (
    <div className="flex-col flex-1 h-screen p-4 md:px-8 space-y-8 bg-gray-50">
      <div className="flex items-baseline justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            LeetCode Solutions!
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
          <Card className="w-[340px] md:w-96" key={question.id}>
            <CardHeader>
              <CardTitle className="text-xl">{question.title}</CardTitle>
              <CardDescription>
                {truncateString(question.description, 90)}
              </CardDescription>
            </CardHeader>
            <CardContent>
              {question.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 mr-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </CardContent>
            <CardFooter className="flex items-center gap-3 ml-1">
              <Link href="/dashboard">
                <HiOutlineEye
                  size={20}
                  className="cursor-pointer text-blue-500"
                />
              </Link>
              <Link href="/dashboard" className="flex items-center">
                <LiaShareSolid size={20} className="text-blue-500" />
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

SolutionPage.requireAuth = true;
