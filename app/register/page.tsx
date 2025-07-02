'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
    console.log("Register form submitted:", formData);
  };

  return (
    <>
      {/* Mobile Hero Section */}
      <div className="lg:hidden relative w-full h-48 bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop')" }}>
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-2xl font-normal text-white uppercase text-center px-4">
            JOIN TRAVELER
          </h1>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row lg:min-h-screen h-auto bg-[#101010] overflow-hidden">
        {/* Left Side - Hero Image with Glassmorphic Overlay */}
        <div className="hidden lg:flex flex-col justify-end items-center p-[40px] m-4 xl:w-[696px] h-[992px] bg-cover bg-center rounded-[24px] flex-none order-0 self-stretch flex-grow" style={{ backgroundImage: "linear-gradient(180deg,rgba(0,0,0,0.048) 44.05%,rgba(0,0,0,0.2) 100%), url('https://images.pexels.com/photos/1591373/pexels-photo-1591373.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop')" }}>
          {/* Glassmorphic Overlay at Bottom */}
          <div className="flex flex-col items-start p-[24px] gap-[24px] xl:w-[616px] h-[372px] backdrop-blur-[9px] rounded-[12px] flex-none order-0 self-stretch flex-grow-0" style={{ background: "rgba(255,255,255,0.16)" }}>
            {/* EXCLUSIVE OFFERS */}
            <div className="flex flex-col items-start p-0 gap-[4px] w-[568px] h-[57px] flex-none order-0 self-stretch flex-grow-0">
              <h3 className="text-2xl leading-[120%] uppercase text-white font-normal w-[568px] h-[29px]">EXCLUSIVE OFFERS:</h3>
              <p className="font-medium text-base leading-[150%] text-white w-[568px] h-[24px]">Be the first to know about our latest deals and promotions.</p>
            </div>
            {/* PERSONALIZED RECOMMENDATIONS */}
            <div className="flex flex-col items-start p-0 gap-[4px] w-[568px] h-[81px] flex-none order-1 self-stretch flex-grow-0">
              <h3 className="text-2xl leading-[120%] uppercase text-white font-normal w-[568px] h-[29px]">PERSONALIZED RECOMMENDATIONS:</h3>
              <p className="font-medium text-base leading-[150%] text-white w-[568px] h-[48px]">Be the first to know Get travel suggestions tailored to your preferences. About our latest deals and promotions.</p>
            </div>
            {/* SEAMLESS EXPERIENCE */}
            <div className="flex flex-col items-start p-0 gap-[4px] w-[568px] h-[57px] flex-none order-2 self-stretch flex-grow-0">
              <h3 className="text-2xl leading-[120%] uppercase text-white font-normal w-[568px] h-[29px]">SEAMLESS EXPERIENCE:</h3>
              <p className="font-medium text-base leading-[150%] text-white w-[568px] h-[24px]">Save your details for faster, more convenient bookings.</p>
            </div>
            {/* 24/7 CUSTOMER SUPPORT */}
            <div className="flex flex-col items-start p-0 gap-[4px] w-[568px] h-[57px] flex-none order-3 self-stretch flex-grow-0">
              <h3 className="text-2xl leading-[120%] uppercase text-white font-normal w-[568px] h-[29px]">24/7 CUSTOMER SUPPORT:</h3>
              <p className="font-medium text-base leading-[150%] text-white w-[568px] h-[24px]">Enjoy peace of mind with our dedicated support team.</p>
            </div>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="w-full xl:w-1/2 flex my-4 pb-4 md:pb-0 px-4 sm:px-8 lg:px-[80px] mr-4 lg:p-12 bg-white rounded-[24px]">
          <div className="w-full md:max-w-[536px] flex flex-col gap-12 mx-auto">
            <div className="max-w-[536px] mt-5">
              <h1 className="text-2xl md:text-5xl font-normal leading-tight tracking-normal text-[#101010] uppercase mb-4">
                JOIN TRAVELER AND YOUR ADVENTURE AWAITS
              </h1>
              <p className="text-base font-medium leading-normal tracking-normal text-[#878787]">
                Ready to turn your travel dreams into reality? Join the Luxe community today and unlock a world of unforgettable experiences.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-[536px] p-0">
              {/* Username */}
              <div className="flex flex-col gap-3 w-full">
                <label className="block text-[16px] font-medium text-[#101010]">Username</label>
                <Input
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full h-14 px-4 border border-[#878787] text-[#101010] bg-white rounded-[6px] shadow-sm focus:border-[#E0C469] focus:ring-1 focus:ring-[#E0C469] placeholder:text-[#878787]"
                  placeholder="Input username"
                />
              </div>
              {/* Email */}
              <div className="flex flex-col gap-3 w-full">
                <label className="block text-[16px] font-medium text-[#101010]">Email</label>
                <Input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full h-14 px-4 border border-[#878787] text-[#101010] bg-white rounded-[6px] shadow-sm focus:border-[#E0C469] focus:ring-1 focus:ring-[#E0C469] placeholder:text-[#878787]"
                  placeholder="Input email"
                />
              </div>
              {/* Password */}
              <div className="flex flex-col gap-3 w-full">
                <label className="block text-[16px] font-medium text-[#101010]">Password</label>
                <div className="relative w-full">
                  <Input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={handleInputChange}
                    required
                    className="w-full h-14 px-4 pr-12 border border-[#878787] text-[#101010] bg-white rounded-[6px] shadow-sm focus:border-[#E0C469] focus:ring-1 focus:ring-[#E0C469] placeholder:text-[#878787]"
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
              {/* Confirm Password */}
              <div className="flex flex-col gap-3 w-full">
                <label className="block text-[16px] font-medium text-[#101010]">Confirm Password</label>
                <div className="relative w-full">
                  <Input
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                    className="w-full h-14 px-4 pr-12 border border-[#878787] text-[#101010] bg-white rounded-[6px] shadow-sm focus:border-[#E0C469] focus:ring-1 focus:ring-[#E0C469] placeholder:text-[#878787]"
                    placeholder="••••••••••"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#878787] hover:text-[#101010]"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>
              {/* Policy Text */}
              <div className="text-[16px] font-medium text-[#878787]">
                By creating an account, you agree to our{' '}
                <Link href="#" className="text-[#0A1805] hover:text-[#E0C469] underline">
                  Terms of Service
                </Link>{' '}
                and{' '}
                <Link href="#" className="text-[#0A1805] hover:text-[#E0C469] underline">
                  Privacy Policy
                </Link>
                .
              </div>
              {/* Register Button */}
              <Button 
                type="submit" 
                className="w-full flex justify-center items-center gap-2 bg-[#E0C469] hover:bg-[#d1b15a] text-[#2C2C2C] font-semibold text-[16px] py-4 rounded-[8px] h-14 shadow-sm"
              >
                Register - Start your Journey
              </Button>
            </form>
            {/* Already have an account */}
            <div className="w-full">
              <p className="text-[16px] font-medium text-[#878787]">
                Already have an account?{' '}
                <Link 
                  href="/login" 
                  className="font-medium text-[#101010] hover:text-[#E0C469] underline"
                >
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}