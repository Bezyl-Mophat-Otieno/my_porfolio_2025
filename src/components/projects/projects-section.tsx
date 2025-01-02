import { motion } from 'framer-motion';
import { ProjectCard } from './project-card';

const projects = [
  {
    title: 'E-commerce Platform',
    description: 'A full-stack e-commerce platform built with React, Node.js, and PostgreSQL. Features include real-time inventory management, secure payments, and an admin dashboard.',
    videoUrl: 'https://example.com/ecommerce-demo.mp4', // Replace with actual video URL
    thumbnailUrl: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/yourusername/ecommerce',
    liveUrl: 'https://demo-ecommerce.com',
    tags: ['React', 'Node.js', 'PostgreSQL', 'Redux', 'Stripe'],
  },
  {
    title: 'AI-Powered Chat Application',
    description: 'Real-time chat application with AI-powered features like message translation, sentiment analysis, and smart replies.',
    videoUrl: 'https://example.com/chat-demo.mp4', // Replace with actual video URL
    thumbnailUrl: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?auto=format&fit=crop&w=800&q=80',
    githubUrl: 'https://github.com/yourusername/ai-chat',
    liveUrl: 'https://demo-chat.com',
    tags: ['React', 'WebSocket', 'OpenAI', 'MongoDB', 'Express'],
  },
];

export function ProjectsSection() {
  return (
    <div className="space-y-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-2xl font-bold text-gray-900 dark:text-white"
      >
        Featured Projects
      </motion.h2>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </div>
  );
}