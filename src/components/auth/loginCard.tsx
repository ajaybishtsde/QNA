"use client";

import { useState } from "react";

import PhoneForm from "./phoneForm";
import OtpForm from "./otpForm";

export default function LoginCard() {
  const [phone, setPhone] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");

  return (
    <div className="w-full max-w-md rounded-xl border bg-card p-6 shadow-sm">
      {step === "phone" ? (
        <PhoneForm
          onSuccess={(number) => {
            setPhone(number);
            setStep("otp");
          }}
        />
      ) : (
        <OtpForm phone={phone} onBack={() => setStep("phone")} />
      )}
    </div>
  );
}
