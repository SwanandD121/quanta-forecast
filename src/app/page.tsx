import Landing from '@/components/Landing';

import { Hubot_Sans } from 'next/font/google';
const hubotsans = Hubot_Sans({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className={hubotsans.className}>
      <Landing />
    </div>
  );
}
