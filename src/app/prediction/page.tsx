import Footer from '@/components/Footer'
import Navbar2 from '@/components/Navbar'
import BentoPrediction from '@/components/BentoPrediction'
import React from 'react'
import { Hubot_Sans } from 'next/font/google';
// import Prediction from '@/components/Prediction'
import MetricsPage from '@/components/MetricsPage';

const hubotsans = Hubot_Sans({ subsets: ['latin'] });
function page() {
  return (
    <div className={`flex flex-col justify-between h-full ${hubotsans.className}`}>
        <Navbar2 />
        <BentoPrediction />
        {/* <Prediction /> */}
        <MetricsPage />
        <Footer />
    </div>
  )
}

export default page