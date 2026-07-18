"use client";

import { useState } from "react";

import PhoneForm from "./phoneForm";
import OtpForm from "./otpForm";
import Link from "next/link";

export default function LoginCard() {
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");

  return (
    <div className="w-full max-w-md rounded-xl border bg-card p-6 shadow-sm">
      {step === "phone" ? (
        <>
          <PhoneForm
            onSuccess={(number) => {
              setPhone(number);
              setStep("otp");
            }}
          />
          <p className="text-center text-sm text-muted-foreground mt-2">
            Already have an account?{" "}
            <Link
              href="signup"
              className="font-semibold text-primary hover:underline"
            >
              Sign up
            </Link>
          </p>
        </>
      ) : (
        <OtpForm phone={phone} onBack={() => setStep("phone")} />
      )}
    </div>
  );
}
