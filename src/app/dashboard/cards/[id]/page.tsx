"use client";
import React from "react";
import { QUESTIONS } from "@/config/constant";
import SyntaxHighlighter from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { MdContentCopy } from "react-icons/md";
import { useToast } from "@/components/ui/use-toast";

interface IProps {
  params: {
    id: string;
  };
}

const CardID = ({ params }: IProps) => {
  const data = QUESTIONS.find((question) => question.id === Number(params.id));
  const { toast } = useToast();
  if (!data) {
    return <div>Question not found</div>;
  }

  const copyCode = () => {
    navigator.clipboard
      .writeText(data?.code)
      .then(() =>
        toast({
          description: "Code copied!",
          variant: "default",
        })
      )
      .catch(() =>
        toast({
          description: "URL failed to copy",
          variant: "destructive",
        })
      );
  };

  return (
    <div className="flex-col flex-1 h-screen p-4 md:px-8 space-y-8 bg-gray-50">
      <div className="flex items-baseline justify-between space-y-2">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
          LeetJS Solutions!
          </h2>
          <p className="text-muted-foreground">Manage Solutions</p>
          <hr />
        </div>
      </div>
      <div className="max-w-2xl">
        <h2 className="text-3xl mb-4 font-bold text-transparent rounded-lg bg-clip-text bg-gradient-to-b from-primary to-muted-foreground">
          Q: {data?.title}
        </h2>
        {data?.tags.map((tag: string) => (
          <span
            key={tag}
            className="px-2.5 py-1 mr-2 text-sm font-medium text-gray-500 bg-gray-200 rounded-full"
          >
            {tag}
          </span>
        ))}
        <p className="pt-4 md:pt-5 text-sm text-gray-600">
          {data?.description}
        </p>
        <div className="mt-6">
          <h2 className="text-xl mb-1 font-bold text-transparent rounded-lg bg-clip-text bg-gradient-to-b from-primary to-muted-foreground">
            Solution:
          </h2>
          <div className="relative">
            <MdContentCopy
              className="cursor-pointer text-white absolute top-4 right-4"
              onClick={copyCode}
            />
            <SyntaxHighlighter
              language="javascript"
              style={dracula}
              showLineNumbers={true}
              lineNumberStyle={{ color: "white", fontSize: "0.9rem" }}
              customStyle={{ paddingTop: "12px", paddingBottom: "12px" }}
            >
              {data?.code}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardID;
