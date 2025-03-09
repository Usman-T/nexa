"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useId } from "react";
import Link from "next/link";
import { UsersIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { authenticate } from "@/lib/actions";
import { useActionState } from "react";

const Login = () => {
  const id = useId();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined
  );

  return (
    <div className="min-h-screen flex items-center justify-center">
      <Card className="w-full max-w-sm shadow-lg rounded-xl p-6">
        <CardContent className="flex flex-col items-center gap-4">
          <div
            className="flex size-14 shrink-0 items-center justify-center rounded-full border border-border"
            aria-hidden="true"
          >
            <svg
              className="stroke-zinc-800 dark:stroke-zinc-100"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32 32"
              aria-hidden="true"
            >
              <circle cx="16" cy="16" r="12" fill="none" strokeWidth="4" />
            </svg>
          </div>
          {/* Header */}
          <CardHeader className="text-center">
            <CardTitle>Welcome back</CardTitle>
            <CardDescription>Enter your credentials to login.</CardDescription>
          </CardHeader>
          {/* Login Form */}
          <form action={formAction} className="w-full space-y-4">
            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor={`${id}-name`}>Name</Label>
                <Input
                  placeholder="Enter your name"
                  name="name"
                  type="text"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${id}-password`}>Password</Label>
                <Input
                  placeholder="Enter your password"
                  type="password"
                  name="password"
                  required
                />
              </div>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm">
              <div className="flex items-center gap-2">
                <Checkbox id={`${id}-remember`} />
                <Label
                  htmlFor={`${id}-remember`}
                  className="text-muted-foreground"
                >
                  Remember me
                </Label>
              </div>
            </div>
            <input type="hidden" name="redirectTo" value={callbackUrl} />
            {/* Sign In Button */}
            <Button disabled={isPending} type="submit" className="w-full">
              Sign in
            </Button>
          </form>{" "}
          <div
            className="flex h-8 items-end space-x-1"
            aria-live="polite"
            aria-atomic="true"
          >
            {errorMessage && (
              <>
                <p className="text-sm text-red-500">{errorMessage}</p>
              </>
            )}
          </div>
          {/* Divider */}
          <div className="flex items-center gap-3 w-full">
            <div className="h-px flex-1 bg-border"></div>
            <span className="text-xs text-muted-foreground">Or</span>
            <div className="h-px flex-1 bg-border"></div>
          </div>
          <Link passHref className="w-full" href="/register">
            <Button variant="outline" className="flex space-x-2 w-full">
              <UsersIcon className="w-4 h-4"></UsersIcon>
              <p>Register an account</p>
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Login;
