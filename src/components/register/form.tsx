"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { registerSchema } from "@/schemas/auth";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/config/firebase";
import { useRouter } from "next/navigation";
import { doc, setDoc } from "firebase/firestore";
import { HiOutlineEye, HiOutlineEyeSlash } from "react-icons/hi2";
import { useToast } from "@/components/ui/use-toast";

export const SignupForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = React.useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
    createUserWithEmailAndPassword(auth, values.email, values.password)
      .then((userCredentials) => {
        const userUID = userCredentials.user.uid;
        const userData = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          phone: values.phone,
        };

        const userDocRef = doc(db, "users", userUID);
        setDoc(userDocRef, userData)
          .then(() => {
            router.push("/");
          })
          .catch((error) => {
            console.error("Error saving user data: ", error);
          });
      })
      .catch((error) => {
        toast({
          variant: "destructive",
          title: `${error.code}`,
          description: "There was a problem with your request.",
        });
      });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="gap-x-3 gap-y-4 md:grid space-y-1 md:space-y-0 md:grid-cols-2"
      >
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your firstname"
                  type="text"
                  id="first-name"
                  className="p-5"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your lastname"
                  type="text"
                  id="last-name"
                  className="p-5"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your email"
                  type="email"
                  id="email"
                  className="p-5"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter your phone number"
                  type="number"
                  id="phone"
                  className="p-5"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="Enter your password"
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="p-5"
                    {...field}
                  />
                  {!showPassword ? (
                    <HiOutlineEye
                      size={17}
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  ) : (
                    <HiOutlineEyeSlash
                      size={17}
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem className="col-span-2">
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    placeholder="Enter your confirm password"
                    type={showConfirmPassword ? "text" : "password"}
                    id="confirm-password"
                    className="p-5"
                    {...field}
                  />
                  {!showConfirmPassword ? (
                    <HiOutlineEye
                      size={17}
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    />
                  ) : (
                    <HiOutlineEyeSlash
                      size={17}
                      className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-gray-600"
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                    />
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" className="w-full !mt-4 col-span-2">
          Create Account
        </Button>
      </form>
    </Form>
  );
};
