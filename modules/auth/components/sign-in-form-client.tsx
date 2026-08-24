
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Chrome, Github } from "lucide-react";
import { signIn } from "@/auth";

const hasGoogle = !!process.env.AUTH_GOOGLE_ID && !!process.env.AUTH_GOOGLE_SECRET;
const hasGithub = !!process.env.AUTH_GITHUB_ID && !!process.env.AUTH_GITHUB_SECRET;

async function handleGoogleSignIn() {
  "use server";
  await signIn("google");
}

async function handleGithubSignIn() {
  "use server";
  await signIn("github");
}

const SignInFormClient = () => {
  return (
    <Card className="w-full max-w-md">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Sign In
        </CardTitle>
        <CardDescription className="text-center">
          {hasGoogle || hasGithub
            ? "Choose your preferred sign-in method"
            : "Add OAuth credentials to enable sign-in"}
        </CardDescription>
      </CardHeader>

      <CardContent className="grid gap-4">
        {hasGoogle && (
          <form action={handleGoogleSignIn}>
            <Button type="submit" variant={"outline"} className="w-full">
              <Chrome className="mr-2 h-4 w-4" />
              <span>Sign in with google</span>
            </Button>
          </form>
        )}

        {hasGithub && (
          <form action={handleGithubSignIn}>
            <Button type="submit" variant={"outline"} className="w-full">
              <Github className="mr-2 h-4 w-4" />
              <span>Sign in with github</span>
            </Button>
          </form>
        )}

        {!hasGoogle && !hasGithub && (
          <div className="rounded-md border border-dashed border-slate-300 bg-slate-50 p-4 text-sm text-slate-600 dark:border-slate-700 dark:bg-slate-900/40 dark:text-slate-300">
            OAuth credentials are not configured yet. Add your Google or GitHub client ID and secret in the environment file, then restart the app.
          </div>
        )}
      </CardContent>

      <CardFooter>
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 w-full">
          By signing in, you agree to our{" "}
          <a href="#" className="underline hover:text-primary">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-primary">
            Privacy Policy
          </a>
          .
        </p>
      </CardFooter>
    </Card>
  );
};

export default SignInFormClient;


