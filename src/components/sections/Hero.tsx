'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/Button';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl text-shadow">
              Building the Future of{' '}
              <span className="text-green-400">Sustainable Technology</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300 text-shadow">
              Neocarbon is revolutionizing how businesses approach environmental responsibility. 
              Our innovative solutions help companies reduce their carbon footprint while 
              improving their bottom line.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button asChild size="lg" className="glass-effect hover:bg-green-600/20">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button variant="outline" asChild size="lg" className="border-gray-600 text-gray-300 hover:bg-white/5 hover:text-white">
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
