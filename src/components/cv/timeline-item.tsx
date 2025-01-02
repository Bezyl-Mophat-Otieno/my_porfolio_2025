import { motion } from 'framer-motion';
import { type ReactNode } from 'react';

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  description: ReactNode;
}

export function TimelineItem({ year, title, company, description }: TimelineItemProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative pl-8 pb-12 last:pb-0"
    >
      <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-blue-500 to-purple-500" />
      <div className="absolute left-[-4px] top-2 h-2 w-2 rounded-full bg-blue-500" />
      
      <div className="space-y-2">
        <span className="inline-block px-2 py-1 text-sm text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded">
          {year}
        </span>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{company}</p>
        <div className="text-gray-600 dark:text-gray-300 text-sm space-y-2">
          {description}
        </div>
      </div>
    </motion.div>
  );
}