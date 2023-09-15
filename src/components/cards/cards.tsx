import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LiaShareSolid } from "react-icons/lia";
import { HiOutlineEye } from "react-icons/hi2";
import Link from "next/link";

interface IProps {
  question: {
    id: number;
    title: string;
    description: string;
    tags: string[];
  };
}

export default function CardQuestion({ question }: IProps) {
  function truncateString(str: string, maxLength: number) {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.substring(0, maxLength) + "...";
    }
  }

  const TruncatedTitle = (str: string, maxLength: number) => {
    if (str.length <= maxLength) {
      return str;
    } else {
      return str.substring(0, maxLength) + "...";
    }
  };

  return (
    <Card className="w-[340px] md:w-96">
      <CardHeader>
        <CardTitle className="text-xl">
          {TruncatedTitle(question.title, 25)}
        </CardTitle>
        <CardDescription>
          {truncateString(question.description, 90)}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {question?.tags?.map((tag: string) => (
          <span
            key={tag}
            className="px-2.5 py-1 mr-2 text-sm font-medium text-gray-500 bg-gray-100 rounded-full"
          >
            {tag}
          </span>
        ))}
      </CardContent>
      <CardFooter className="flex items-center gap-3 ml-1">
        <Link href={`/dashboard/cards/${question.id}`}>
          <HiOutlineEye size={20} className="cursor-pointer text-blue-500" />
        </Link>
        <Link href="/dashboard" className="flex items-center">
          <LiaShareSolid size={20} className="text-blue-500" />
        </Link>
      </CardFooter>
    </Card>
  );
}
