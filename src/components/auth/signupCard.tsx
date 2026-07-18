"use client";

import Link from "next/link";
import { toast } from "sonner";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/src/components/ui/button";
import { Card, CardContent, CardHeader } from "@/src/components/ui/card";
import { Input } from "@/src/components/ui/input";
import { Label } from "@/src/components/ui/label";
import { useRegister } from "@/src/hooks/mutations/useRegister";
import {
  RegisterFormValues,
  registerSchema,
} from "@/src/schema/register.schema";
import { useRouter } from "next/navigation";

export default function SignupCard() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
  });

  const { mutate, isPending } = useRegister();

  const onSubmit = (values: RegisterFormValues) => {
    mutate(values, {
      onSuccess: (data) => {
        console.log(data);
        toast.success("Account created!");
        router.push("/login");
      },

      onError: (error) => {
        console.log(error);
        toast.error(error.message);
      },
    });
  };

  return (
    <div className="min-h-screen bg-muted/30 flex items-center justify-center px-4 py-12 w-full">
      <Card className="w-full max-w-lg shadow-lg">
        <CardHeader className="space-y-2 pb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight">
            Create your account
          </h1>

          <p className="text-muted-foreground text-base">
            Join thousands of developers asking and answering questions.
          </p>
        </CardHeader>

        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="userName">Username</Label>
              <Input
                id="userName"
                className="h-11"
                placeholder="john_doe"
                {...register("userName")}
              />
              {errors.userName && (
                <p className="text-sm text-destructive">
                  {errors.userName.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                className="h-11"
                type="email"
                placeholder="john@example.com"
                {...register("email")}
              />
              {errors.email && (
                <p className="text-sm text-destructive">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                className="h-11"
                type="password"
                placeholder="••••••••"
                {...register("password")}
              />
              {errors.password && (
                <p className="text-sm text-destructive">
                  {errors.password.message}
                </p>
              )}
            </div>

            <Button type="submit" className="w-full h-11" disabled={isPending}>
              {isPending ? "Creating..." : "Create Account"}
            </Button>

            <p className="text-center text-sm text-muted-foreground">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-semibold text-primary hover:underline"
              >
                Sign in
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
