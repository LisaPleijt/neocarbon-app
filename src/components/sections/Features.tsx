'use client';

import { motion } from 'framer-motion';
import { 
  ChartBarIcon, 
  GlobeAltIcon, 
  LightBulbIcon,
  CogIcon 
} from '@heroicons/react/24/outline';

const features = [
  {
    name: 'Carbon Analytics',
    description: 'Advanced tracking and reporting of your carbon footprint with actionable insights.',
    icon: ChartBarIcon,
  },
  {
    name: 'Global Impact',
    description: 'Join a worldwide network of companies committed to environmental sustainability.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Smart Solutions',
    description: 'AI-powered recommendations to optimize your sustainability strategy.',
    icon: LightBulbIcon,
  },
  {
    name: 'Seamless Integration',
    description: 'Easy integration with your existing business processes and systems.',
    icon: CogIcon,
  },
];

export default function Features() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-green-400 text-shadow">Sustainable Technology</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl text-shadow">
            Everything you need to go green
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300 text-shadow">
            Our comprehensive platform provides all the tools and insights your business needs 
            to make meaningful progress toward sustainability goals.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col p-6 rounded-lg glass-effect hover:bg-white/5 transition-colors"
              >
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-white">
                  <feature.icon className="h-5 w-5 flex-none text-green-400" aria-hidden="true" />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-300">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
