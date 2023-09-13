import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoginForm } from "@/components/login/form";
import Link from "next/link";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";

export const metadata:Metadata = {
  title: "Leetcode solution | Login",
  description: "Login to your account to manage leetcode solutions",
}

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (session) {
    redirect("/dashboard")
  }
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 px-3">
      <div className="w-full max-w-sm">
        <Card className="shadow-sm border border-gray-300 bg-white rounded-xl py-2">
          <CardHeader className="gap-y-0.5">
            <CardTitle className="text-2xl">Login to your account</CardTitle>
            <CardDescription className="text-slate-500">
              Provide your credentials to access your account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <LoginForm />
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-slate-500 text-sm py-2">
              Don&apos;t have an account yet?{" "}
              <Link
                href="/register"
                className="text-blue-600 text-md font-medium"
              >
                Signup
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
