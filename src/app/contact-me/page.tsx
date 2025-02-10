import ContactForm from "@/components/ContactForm";
import React from "react";
import { Mail, Phone } from "lucide-react"; // Importing icons for a modern UI

const Page = () => {
  return (
    <div className="w-screen h-screen bg-cover  bg-center flex items-center justify-center px-4 sm:px-10 relative" style={{ backgroundImage: "url(bg-3.png)" }}>
      {/* Dark Overlay for better contrast */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Contact Card with Responsive Design */}
      <div className="w-full max-w-4xl relative bg-transparent border border-white/30 shadow-lg backdrop-blur-md p-6 z-10 rounded-xl transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6 w-full">
          {/* Contact Form Section */}
          <div className="w-full md:w-1/2 bg-white/10 backdrop-blur-lg p-6 rounded-lg shadow-md border border-white/20">
            <ContactForm />
          </div>

          {/* Contact Details */}
          <div className="w-full md:w-1/2 lg:mt-28 text-white space-y-4 flex flex-col items-center md:items-start">
            <div className="flex items-center space-x-3 transition-opacity duration-300 hover:opacity-80">
              <Phone className="w-6 h-6 text-yellow-400" />
              <span className="text-lg font-medium">0348-8293701</span>
            </div>
            <div className="flex items-center space-x-3 transition-opacity duration-300 hover:opacity-80">
              <Mail className="w-6 h-6 text-yellow-400" />
              <span className="text-lg font-medium">almirashah35@gmail.com</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
