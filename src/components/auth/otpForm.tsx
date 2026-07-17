"use client";

import { useState } from "react";
import { Button } from "../ui/button";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/src/components/ui/input-otp";
import { useRouter } from "next/navigation";

interface Props {
  phone: string;
  onBack: () => void;
}

export default function OtpForm({ phone, onBack }: Props) {
  const router = useRouter();
  const [otp, setOtp] = useState("");

  const verifyOtp = async () => {
    console.log(phone, otp);
    router.push("/questions");
    // await verifyOTP()
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-2xl font-bold">Verify OTP</h1>

        <p className="text-muted-foreground">We've sent a 6-digit code to</p>

        <p className="font-medium">+91 {phone}</p>
      </div>

      <div className="flex justify-center">
        <InputOTP maxLength={6} value={otp} onChange={setOtp}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
      </div>

      <Button
        className="w-full"
        disabled={otp.length !== 6}
        onClick={verifyOtp}
      >
        Verify OTP
      </Button>

      <div className="flex items-center justify-between text-sm">
        <Button variant="link" className="p-0" onClick={onBack}>
          Change Number
        </Button>

        <Button variant="link" className="p-0">
          Resend OTP
        </Button>
      </div>
    </div>
  );
}
