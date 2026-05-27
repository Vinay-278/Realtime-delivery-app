import bcrypt from "bcryptjs";
import User from "../models/userSchema.js";
import { sendOtpMail } from "../utils/sendMail.js";

const otpStore = new Map();

export const registerUser = async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;

    if (!name || !email || !password || !phone) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const existingUser = await User.findOne({ phone });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const hashed = await bcrypt.hash(password, 10);
    const otp = Math.floor(1000 + Math.random() * 9000);

    otpStore.set(phone, {
      name,
      email,
      password: hashed,
      phone,
      otp,
      expiresAt: Date.now() + 5 * 60 * 1000,
    });

    await sendOtpMail(email, otp);

    return res.status(201).json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyOtp = async (req, res) => {
  try {
    const { phone, otp } = req.body;

    const storedData = otpStore.get(phone);

    if (!storedData) {
      return res.status(400).json({
        success: false,
        message: "OTP expired or invalid",
      });
    }

    if (Date.now() > storedData.expiresAt) {
      otpStore.delete(phone);
      return res.status(400).json({
        success: false,
        message: "OTP expired",
      });
    }

    if (storedData.otp != otp) {
      return res.status(400).json({
        success: false,
        message: "Incorrect OTP",
      });
    }

    const user = await User.create({
      name: storedData.name,
      email: storedData.email,
      password: storedData.password,
      phone: storedData.phone,
    });

    otpStore.delete(phone);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
      user,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const changePassword = async (req, res) => {
  try {
    const { phone, email } = req.body;

    if (!phone || !email) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ phone, email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const otp = Math.floor(1000 + Math.random() * 9000);

    otpStore.set(phone, {
      otp,
      expiresAt: Date.now() + 5 * 60 * 1000,
      type: "RESET_PASSWORD",
    });

    await sendOtpMail(email, otp);

    return res.status(200).json({
      message: "OTP sent for password reset",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const verifyChangePassword = async (req, res) => {
  try {
    const { phone, otp, newPassword } = req.body;

    const stored = otpStore.get(phone);

    if (!stored) {
      return res.status(400).json({
        success: false,
        message: "OTP invalid or expired",
      });
    }

    if (Date.now() > stored.expiresAt) {
      otpStore.delete(phone);
      return res.status(400).json({
        success: false,
        message: "OTP expired",
      });
    }

    if (stored.otp != otp) {
      return res.status(400).json({
        success: false,
        message: "Incorrect OTP",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await User.findOneAndUpdate({ phone }, { password: hashedPassword });

    otpStore.delete(phone);

    return res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    return res.status(200).json({
      success: true,
      message: "User logged in successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};