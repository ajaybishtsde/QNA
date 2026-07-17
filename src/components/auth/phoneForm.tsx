"use client";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const phoneSchema = z.object({
  phone: z.string().regex(/^[6-9]\d{9}$/, "Please enter a valid mobile number"),
});

type PhoneFormValues = z.infer<typeof phoneSchema>;

interface PhoneFormProps {
  onSuccess: (phone: string) => void;
}

export default function PhoneForm({ onSuccess }: PhoneFormProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<PhoneFormValues>({
    resolver: zodResolver(phoneSchema),
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit = async (values: PhoneFormValues) => {
    // await sendOtp(values.phone);

    onSuccess(values.phone);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">Welcome 👋</h1>

        <p className="text-muted-foreground">
          Enter your mobile number to continue
        </p>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium">Mobile Number</label>

        <div className="flex">
          <div className="flex items-center rounded-l-md border border-r-0 bg-muted px-4">
            +91
          </div>

          <Input
            {...register("phone")}
            type="tel"
            inputMode="numeric"
            maxLength={10}
            placeholder="9876543210"
            className="rounded-l-none"
          />
        </div>

        {errors.phone && (
          <p className="text-sm text-destructive">{errors.phone.message}</p>
        )}
      </div>

      <Button type="submit" className="w-full" disabled={isSubmitting}>
        Continue
      </Button>
    </form>
  );
}
