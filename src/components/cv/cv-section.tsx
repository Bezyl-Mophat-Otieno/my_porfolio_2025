import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { TimelineItem } from './timeline-item';
import { SkillsSection } from './skills-section';

const experience = [
  {
    year: '2020 - Present',
    title: 'Senior Software Developer',
    company: 'Tech Innovators Inc.',
    description: (
      <>
        <p>Led the development of a high-traffic e-commerce platform serving over 1M users monthly:</p>
        <ul className="list-disc pl-4 mt-2">
          <li>Architected and implemented a microservices-based backend using Node.js and TypeScript</li>
          <li>Improved application performance by 40% through optimization and caching strategies</li>
          <li>Mentored junior developers and conducted code reviews</li>
        </ul>
      </>
    ),
  },
  {
    year: '2018 - 2020',
    title: 'Full Stack Developer',
    company: 'Digital Solutions Ltd.',
    description: (
      <>
        <p>Developed and maintained multiple client projects:</p>
        <ul className="list-disc pl-4 mt-2">
          <li>Built responsive web applications using React and Redux</li>
          <li>Implemented RESTful APIs using Node.js and Express</li>
          <li>Integrated third-party services and payment gateways</li>
        </ul>
      </>
    ),
  },
];

export function CVSection() {
  return (
    <div className="space-y-12">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Professional Experience</h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-md hover:opacity-90 transition-opacity"
        >
          <Download className="w-4 h-4" />
          Download CV
        </motion.button>
      </div>

      <div className="space-y-8">
        {experience.map((item) => (
          <TimelineItem key={item.title} {...item} />
        ))}
      </div>

      <SkillsSection />
    </div>
  );
}