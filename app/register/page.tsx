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
import { createUser } from "@/lib/actions";

const Regsiter = () => {
  const id = useId();

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
            <CardTitle>Register Now</CardTitle>
            <CardDescription>
              Fill the form to register an account.
            </CardDescription>
          </CardHeader>

          <form className="w-full space-y-4" action={createUser}>
            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor={`${id}-name`}>Name</Label>
                <Input
                  id={`${id}-name`}
                  placeholder="Enter your username"
                  name="username"
                  type="text"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${id}-email`}>Email</Label>
                <Input
                  id={`${id}-email`}
                  placeholder="hi@yourcompany.com"
                  name="email"
                  type="email"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor={`${id}-password`}>Password</Label>
                <Input
                  id={`${id}-password`}
                  name="password"
                  placeholder="Enter your password"
                  type="password"
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

            {/* Sign In Button */}
            <Button type="submit" className="w-full">
              Sign up
            </Button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-3 w-full">
            <div className="h-px flex-1 bg-border"></div>
            <span className="text-xs text-muted-foreground">Or</span>
            <div className="h-px flex-1 bg-border"></div>
          </div>

          <Link passHref className="w-full" href="/login">
            <Button variant="outline" className="flex space-x-2 w-full">
              <UsersIcon className="w-4 h-4"></UsersIcon>
              <p>Login in an account</p>
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
};

export default Regsiter;
