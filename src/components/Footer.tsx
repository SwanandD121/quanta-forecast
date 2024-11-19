// components/Footer.tsx
"use client"
import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram } from "lucide-react"; // You can replace these with your preferred icons
import Image from "next/image";
import logoforlight from '../../public/assets/logoforlight.png'
import logofordark from '../../public/assets/logofordark.png'
import { useTheme } from 'next-themes';

function Footer() {
  const {resolvedTheme} = useTheme();
  return (
    <footer className="p-6 border-t flex flex-col items-start">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Copyright */}
        <div className="text-sm text-center md:text-left">
          <Image
            src={resolvedTheme === 'dark' ? logofordark : logoforlight}
            alt="heroimg"
            className="rounded-xl"
            height={50}
          />
        </div>

        {/* Links */}
        <div className="flex space-x-4">
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms-of-service" className="hover:underline">
            Terms of Service
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <Link href="https://facebook.com" aria-label="Facebook" target="_blank">
            <Facebook className="w-5 h-5 hover:text-blue-500 transition-colors" />
          </Link>
          <Link href="https://twitter.com" aria-label="Twitter" target="_blank">
            <Twitter className="w-5 h-5 hover:text-blue-400 transition-colors" />
          </Link>
          <Link href="https://instagram.com" aria-label="Instagram" target="_blank">
            <Instagram className="w-5 h-5 hover:text-pink-500 transition-colors" />
          </Link>
        </div>
      </div>
      <div className="mt-2 text-slate-400">
        <p className="font-extralight">
          Developed by Swanand Deshpande
        </p>
      </div>
    </footer>
  );
}

export default Footer;
