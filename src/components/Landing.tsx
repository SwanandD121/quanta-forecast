"use client"
import Image from "next/image"
import Navbar from "./Navbar"
import landingimgforlight from "../../public/assets/landingimgforlight copy.jpg"
import landingimgfordark from "../../public/assets/landingimgfordark.jpeg"
import { useTheme } from "next-themes"
import Footer from "./Footer"
import Link from "next/link"

const Landing: React.FC = () => {
  const { resolvedTheme } = useTheme()
  return (
    <div className="overflow-x-hidden">
      <Navbar />

      <section className="pt-12 sm:pt-16 tracking-tight">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="px-6 text-lg font-inter">
              Future-proof your investments with intelligent forecasting
            </h1>
            <p className="mt-5 text-4xl font-bold leading-tight  sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj bg-gradient-to-b from-slate-800 to-black dark:from-slate-50 dark:to-purple-900 bg-clip-text text-transparent">
              <span className="relative inline-flex sm:inline">
                <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                <span className="relative bg-gradient-to-b from-black to-black dark:from-white dark:to-purple-100 bg-clip-text text-transparent">
                  Forecast{" "}
                </span>
              </span>
              with confidence, invest with clarity
            </p>
            <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
              <Link
                href={"/prediction"}
                className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold hover:text-white transition-all duration-200 bg-secondary border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-primary focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary"
                role="button"
              >
                Get Started
              </Link>

              <Link
                href="/features"
                className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold  transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary hover:bg-secondary focus:bg-secondary  focus:text-white hover:border-secondary focus:border-secondary"
                role="button"
              >
                Features
              </Link>
            </div>
            <p className="mt-8 text-base text-gray-500 font-inter">
              60 Days free trial · No credit card required
            </p>
          </div>
        </div>

        <div className="pb-12">
          <div className="relative">
            <div className="absolute inset-0 h-2/3"></div>
            <div className="relative mx-auto">
              <div className="lg:max-w-6xl lg:mx-auto p-4 mt-8">
                <Image
                  src={
                    resolvedTheme === "dark"
                      ? landingimgfordark
                      : landingimgforlight
                  }
                  alt="heroimg"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Landing
