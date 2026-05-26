import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

// optional: test connection
transporter.verify((error, success) => {
  if (error) {
    console.log("SMTP Error:", error);
  } else {
    console.log("Mail server is ready");
  }
});

export const sendOtpMail = async (email, otp) => {
  try {
    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: email,
      subject: "OTP Verification",
      html: `
        <div>
          <h2>Your OTP Code</h2>
          <h1>${otp}</h1>
          <p>This OTP will expire soon.</p>
        </div>
      `,
    });

    console.log("Email sent successfully");
  } catch (error) {
    console.log("Mail Error:", error);
  }
};
