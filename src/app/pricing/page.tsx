import Navbar2 from '@/components/Navbar'
import PricingPlans from '@/components/PricingPage'
import React from 'react'
import { Hubot_Sans } from 'next/font/google';
const hubotsans = Hubot_Sans({ subsets: ['latin'] });

function page() {
  return (
    <div className={hubotsans.className}>
        <Navbar2 />
        <PricingPlans />
    </div>
  )
}

export default page