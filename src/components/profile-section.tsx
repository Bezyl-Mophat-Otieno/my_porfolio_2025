import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';

export function ProfileSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center space-y-4"
    >
      <div className="relative w-48 h-48">
        <img
          src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=800&q=80"
          alt="Profile"
          className="rounded-full w-full h-full object-cover border-4 border-white dark:border-gray-800 shadow-lg"
        />
      </div>
      
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">John Doe</h1>
        <p className="text-gray-600 dark:text-gray-300 flex items-center justify-center gap-1">
          <MapPin className="w-4 h-4" /> San Francisco, CA
        </p>
        <p className="text-gray-600 dark:text-gray-300">Software Developer with 4 years of experience</p>
        <a
          href="mailto:john@example.com"
          className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 hover:underline"
        >
          <Mail className="w-4 h-4" />
          john@example.com
        </a>
      </div>
    </motion.div>
  );
}