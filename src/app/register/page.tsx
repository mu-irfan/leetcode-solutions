import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import { SignupForm } from "@/components/register/form";
import { Metadata } from "next";

export const metadata:Metadata = {
    title: "Leetcode solution | Signup",
    description: "Signup to your account to manage leetcode solutions",
  }

export default function Signup() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900 px-3">
      {/* <Image
          src="/images/code.png"
          alt="header-logo"
          width={60}
          height={60}
          className="mb-4"
        /> */}
      <div className="w-full max-w-lg">
        <Card className="shadow-sm border border-gray-300 bg-white rounded-xl py-2">
          <CardHeader className="gap-y-0.5">
            <CardTitle className="text-2xl">Create Account</CardTitle>
            <CardDescription className="text-slate-500">
              Provide your details to create an account.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <SignupForm />
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-slate-500 text-sm py-2">
              Already have account?
              <Link href="/" className="text-blue-600 text-md font-medium pl-1">
                Login
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
}
