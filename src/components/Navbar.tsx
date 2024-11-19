"use client"
import React, { useState, useEffect } from 'react'
import { DarkModeToggle } from './DarkModeToggle';
import Image from 'next/image';
import logoforlight from '../../public/assets/logoforlight.png'
import logofordark from '../../public/assets/logofordark.png'
import { useTheme } from 'next-themes';
import { useRouter } from 'next/compat/router';
import Link from 'next/link';

function Navbar2() {
    const [expanded, setExpanded] = useState(false);
    const { resolvedTheme } = useTheme();
    const [isMounted, setIsMounted] = useState(false);
    const router = useRouter(); // Using compat router

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Handle cases where router might be null
    // const isPathActive = (path :string) => isMounted && router && router.pathname === path;
    const isPathActive = (path: string) => {
      if (!isMounted || !router) return false;
      console.log(`Current Path: ${router.pathname}, Checking Path: ${path}`);
      return router.pathname === path;
  };

    return (
        <div>
            <header className="py-4 md:py-6 tracking-tight">
                <div className="container px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <div className="flex-shrink-0">
                            <Link href={"/"} className="flex rounded outline-none">
                                <Image
                                    src={resolvedTheme === 'dark' ? logofordark : logoforlight}
                                    alt="heroimg"
                                    className="rounded-xl"
                                    height={50}
                                    />
                            </Link>
                        </div>

                        <div className="flex lg:hidden">
                            <button
                                type="button"
                                className=""
                                onClick={() => setExpanded(!expanded)}
                                aria-expanded={expanded}
                            >
                                {expanded ? (
                                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                ) : (
                                    <svg className="w-7 h-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
                                    </svg>
                                )}
                            </button>
                        </div>

                        <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
                            <Link href="/" className={`text-base font-medium transition-all duration-200 rounded font-pj ${isPathActive('/') ? 'text-purple-600' : 'hover:text-purple-600'}`}>
                                Home
                            </Link>

                            <Link href="/features" className={`text-base font-medium transition-all duration-200 rounded font-pj ${isPathActive('/features') ? 'text-purple-600' : 'hover:text-purple-600'}`}>
                                Features
                            </Link>
                            <Link href="/pricing" className={`text-base font-medium transition-all duration-200 rounded font-pj ${isPathActive('/pricing') ? 'text-purple-600 under' : 'hover:text-purple-600'}`}>
                                Pricing
                            </Link>
                            <Link href="/contact" className={`text-base font-medium transition-all duration-200 rounded font-pj ${isPathActive('/contact') ? 'text-purple-600' : 'hover:text-purple-600'}`}>
                                Contact Us
                            </Link>
                        </div>

                        <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
                            <DarkModeToggle />
                            <Link href="#" className="text-base font-medium transition-all duration-200 rounded font-pj hover:text-purple-600">Login</Link>
                            <Link href="#" className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 transition-all duration-200 border border-transparent rounded-xl hover:bg-primary font-pj focus:ring-2" role="button">Sign up</Link>
                        </div>
                    </div>

                    {expanded && (
                        <nav>
                            <div className="px-1 py-8">
                                <div className="grid gap-y-7">
                                    <Link href="/features" className="flex items-center p-3 -m-3 text-base font-medium transition-all duration-200 rounded-xl hover:bg-gray-50 font-pj">Features</Link>
                                    <Link href="/pricing" className="flex items-center p-3 -m-3 text-base font-medium transition-all duration-200 rounded-xl hover:bg-gray-50 font-pj">Pricing</Link>
                                    <Link href="#" className="flex items-center p-3 -m-3 text-base font-medium transition-all duration-200 rounded-xl hover:bg-gray-50 font-pj">Automation</Link>
                                    <Link href="#" className="flex items-center p-3 -m-3 text-base font-medium transition-all duration-200 rounded-xl hover:bg-gray-50 font-pj">Customer Login</Link>
                                    <Link href="#" className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:ring-2" role="button">Sign up</Link>
                                </div>
                            </div>
                        </nav>
                    )}
                </div>
            </header>
        </div>
    )
}

export default Navbar2
