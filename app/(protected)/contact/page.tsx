'use client'
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import GoogleMap from "@/components/ui/google-map";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="w-full px-4 md:px-20 mt-20">
        <div
          className="relative h-[532px] rounded-[20px] bg-cover bg-center overflow-hidden"
          style={{
            backgroundImage: "url('/assets/images/Contact-Banner-Img.png')"
          }}
        >
          <div className="absolute inset-0 bg-black/40 rounded-[20px]"></div>
          <div className="relative z-10 flex flex-col items-center justify-center h-full">
            <h1 className="font-anton text-4xl md:text-5xl lg:text-[64px] font-normal leading-tight tracking-normal text-[#FEFEFE] uppercase text-center">
              CONTACT US
            </h1>
          </div>
        </div>
      </section>

      {/* Find Us On Map Section */}
      <section className="pt-16 px-4 md:px-[60px]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-anton text-3xl md:text-5xl font-normal leading-tight tracking-normal text-[#252525] uppercase mb-4">
            FIND US ON MAP
          </h2>
          <p className="font-inter text-base md:text-lg leading-normal tracking-normal text-[#5A5A5A] text-center max-w-[1320] mx-auto mb-12">
            Find us on maps to visit our office and start your journey with us today. Let our team bring your dream destinations within reach.
          </p>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="px-4 md:px-[60px] mb-16">
        <div className="max-w-7xl mx-auto">
          <GoogleMap 
            height="400px" 
            center={{ lat: 28.291565, lng: -16.629129 }} 
            zoom={13} 
          />
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="px-4 md:px-[60px]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Side - Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Input
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full h-16 px-4 border border-[#070707] rounded-md"
                      placeholder="Name"
                    />
                  </div>
                  <div>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full h-16 px-4 border border-[#070707] rounded-md"
                      placeholder="Email"
                    />
                  </div>
                </div>
                
                <div>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="w-full h-[229px] px-4 py-3 border border-[#070707] rounded-lg resize-y"
                    placeholder="Message"
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="bg-[#E0C469] hover:bg-[#d1b15a] text-black font-medium px-8 py-3 rounded-lg"
                >
                  Send
                </Button>
              </form>
            </div>

            {/* Right Side - Contact Information */}
            <div className="space-y-5">
              {/* Phone */}
              <Card className="border xl:max-h-[91px] max-h-fit border-gray-200 rounded-lg overflow-hidden">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#E0C469] rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src="/assets/images/Contact-Us-Phone.svg" alt="phone" />
                  </div>
                  <div>
                    <h3 className="font-poltawski text-xl font-semibold text-[#252525] mb-2">Phone Number</h3>
                    <p className="font-poltawski text-base text-[#5A5A5A]">+34 722 645 670</p>
                  </div>
                </CardContent>
              </Card>

              {/* Email - with special background */}
              <Card className="bg-[#E0C469] xl:max-h-[91px] max-h-fit border-0 rounded-lg overflow-hidden">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#FCFCFC] rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src="/assets/images/Contact-Us-Envelope.svg" alt="email" />
                  </div>
                  <div>
                    <h3 className="font-poltawski text-xl font-semibold text-[#2C2C2C] mb-2">Email Address</h3>
                    <p className="font-poltawski text-base text-[#2C2C2C]">info@luxeexcursionstenerife.com</p>
                  </div>
                </CardContent>
              </Card>

              {/* Company Address */}
              <Card className="border xl:max-h-[91px] max-h-fit border-gray-200 rounded-lg overflow-hidden">
                <CardContent className="p-5 flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#E0C469] rounded-lg flex items-center justify-center flex-shrink-0">
                    <img src="/assets/images/Contact-Us-Location.svg" alt="phone" />
                  </div>
                  <div>
                    <h3 className="font-poltawski text-xl font-semibold text-[#252525] mb-2">Company Address</h3>
                    <p className="font-poltawski text-base text-[#5A5A5A]">C. Hellada, 8.38678 Adeje, Santa Cruz de Tenerife, Spain</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
