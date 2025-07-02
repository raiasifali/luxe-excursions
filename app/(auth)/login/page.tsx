"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login form submitted:", formData);
    toast({
      title: "Login Successful!",
      description: "Welcome back! You have been logged in successfully.",
    });
  };

  return (
    <>
      {/* Mobile Hero Section */}
      <div className="lg:hidden relative w-full h-48 bg-cover bg-center" style={{ backgroundImage: "url('/assets/images/Login-plane-img.svg')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="font-anton text-2xl font-normal text-white uppercase text-center px-4">
            YOUR GATEWAY TO UNFORGETTABLE JOURNEYS
          </h1>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row lg:min-h-screen xl:w-full flex-wrap h-auto bg-[#101010] overflow-hidden gap-0">
        {/* Left Side - Stacked Images */}
        <div className="hidden lg:flex xl:w-1/2 flex-col justify-end items-center p-4 h-[992px] bg-transparent rounded-[24px]">
          {/* Top Image - Taller */}
          <div className="flex-1 w-full rounded-[24px] overflow-hidden mb-4">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/images/Login-plane-img.svg')"
              }}
            />
          </div>
          {/* Bottom Image - Landscape with Text Overlay */}
          <div className="w-full h-48 relative rounded-[16px] overflow-hidden">
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: "url('/assets/images/Login-img2.jpg')"
              }}
            >
              {/* Glassmorphic Text Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="rounded-[12px] w-[95%] mx-auto p-6">
                  <h3 className="font-anton text-white text-xl md:text-2xl uppercase tracking-wide text-center">
                    WHETHER YOU'RE DREAMING OF SUN-SOAKED BEACHES, BUSTLING CITYSCAPES, OR SERENE MOUNTAIN RETREATS, YOUR ADVENTURE STARTS HERE.
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="w-full xl:w-[696px] xl:my-4 flex flex-col justify-center items-start px-4 sm:px-8 lg:px-[80px] py-8 lg:py-0 gap-10 bg-white rounded-[24px] mx-0">
          <div className="w-full max-w-[536px] flex flex-col gap-10 mx-auto">
            {/* Detail Section */}
            <div className="flex flex-col items-start gap-4 w-full">
              <h1 className="mt-4 font-anton text-[2rem] sm:text-[2.5rem] lg:text-[48px] font-normal leading-tight tracking-normal text-[#101010] uppercase mb-0 w-full">
                YOUR GATEWAY TO UNFORGETTABLE JOURNEYS
              </h1>
              <p className="font-inter text-base sm:text-[16px] font-medium leading-[150%] text-[#878787] w-full">
                Ready to embark on your next adventure? Log in now and let Luxe take you there. Your dream destination is just a click away!
              </p>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
              {/* Email */}
              <div className="flex flex-col gap-3 w-full">
                <label className="block text-[16px] font-inter font-medium text-[#101010]">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full h-14 px-4 border border-[#878787] text-[#101010] font-inter bg-white rounded-[6px] shadow-sm focus:border-[#E0C469] focus:ring-1 focus:ring-[#E0C469] placeholder:text-[#878787]"
                  placeholder="Input email"
                />
              </div>
              {/* Password */}
              <div className="flex flex-col gap-3 w-full">
                <label className="block text-[16px] font-inter font-medium text-[#101010]">Password</label>
                <div className="relative w-full">
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full h-14 px-4 pr-12 border border-[#878787] text-[#101010] font-inter bg-white rounded-[6px] shadow-sm focus:border-[#E0C469] focus:ring-1 focus:ring-[#E0C469] placeholder:text-[#878787]"
                    placeholder="••••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#878787] hover:text-[#101010]"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              {/* New to Traveler */}
            <div className="w-full">
              <p className="text-[16px] font-inter font-medium text-[#878787]">
                New to Traveler?{' '}
                <Link 
                  href="/register" 
                  className="font-medium text-[#101010] hover:text-[#E0C469] underline"
                >
                  Create an Account
                </Link>
              </p>
            </div>
              {/* Checkbox & Forgot Password */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 w-full">
                <div className="flex flex-row items-center gap-3">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-5 w-5 text-[#E0C469] focus:ring-[#E0C469] border-[#D6D6D6] rounded-[2px]"
                  />
                  <label htmlFor="remember-me" className="text-[16px] font-inter font-medium text-[#101010]">Remember me</label>
                </div>
                <div className="text-[16px] font-inter font-medium">
                  <Link href="#" className="text-[#101010] hover:text-[#E0C469] underline">
                    Forgot your password?
                  </Link>
                </div>
              </div>
              {/* Login Button */}
              <Button 
                type="submit" 
                className="w-full flex justify-center items-center gap-2 bg-[#E0C469] hover:bg-[#d1b15a] text-[#2C2C2C] font-inter font-semibold text-[16px] py-4 rounded-[8px] h-14 shadow-sm"
              >
                <Link href="/">Login - Continue Exploring and Planning</Link>
              </Button>
              {/* Divider */}
              <div className="flex flex-row items-center gap-6 w-full">
                <div className="flex-1 border-t border-[#D6D6D6]"></div>
                <span className="text-[16px] font-inter font-medium text-[#101010]">Or</span>
                <div className="flex-1 border-t border-[#D6D6D6]"></div>
              </div>
              {/* Social Buttons */}
              <div className="flex flex-col gap-4 w-full">
                <button type="button" className="flex flex-row justify-center items-center gap-3 w-full h-14 px-5 bg-white border border-[#EDEDED] rounded-[6px] shadow-sm font-inter font-semibold text-[16px] text-[#383838]">
                  {/* Google Icon */}
                  <img src="/assets/images/Google-color.svg" alt="Google" className="w-6 h-6" />
                  Sign in with Google
                </button>
                <button type="button" className="flex flex-row justify-center items-center gap-3 w-full h-14 px-5 bg-[#101010] rounded-[6px] shadow-sm font-inter font-semibold text-[16px] text-white">
                  {/* Apple Icon */}
                  <img src="/assets/images/Apple.svg" alt="Apple" className="w-6 h-6" />
                  Sign in with Apple
                </button>
                <button type="button" className="flex flex-row justify-center items-center gap-3 w-full h-14 px-5 bg-[#1877F2] rounded-[6px] shadow-sm font-inter font-semibold text-[16px] text-white">
                  {/* Facebook Icon */}
                  <img src="/assets/images/Facebook-color.svg" alt="Facebook" className="w-6 h-6" />
                  Sign in with Facebook
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
