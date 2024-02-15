import { useState } from "react";
import "../../style.css";
const OTPGenerator = () => {
  const [otp, setOtp] = useState("");
  const generateOTP = () => {
    const digits = "0123456789";
    let otpNumber = "";
    for (let i = 0; i < 6; i++) {
      otpNumber += digits[Math.floor(Math.random() * digits.length)];
      if (i < 5) {
        otpNumber += "    ";
      }
    }
    setOtp(otpNumber);
  };
  return (
    <div className="otp-wrapper">
      <div className="otp-box">
        <h1 className="otp-title">OTP Generator</h1>
        <button className="otp-button" onClick={generateOTP}>
          Generate OTP
        </button>
        <div className={otp ? "otp-number" : ""}>{otp}</div>
      </div>
    </div>
  );
};

export default OTPGenerator;
