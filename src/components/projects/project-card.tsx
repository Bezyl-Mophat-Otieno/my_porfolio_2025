import { motion } from 'framer-motion';
import { Github, ExternalLink, Play, Pause } from 'lucide-react';
import { useState, useRef } from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  videoUrl: string;
  thumbnailUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  tags: string[];
}

export function ProjectCard({
  title,
  description,
  videoUrl,
  thumbnailUrl,
  githubUrl,
  liveUrl,
  tags,
}: ProjectCardProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
    >
      <div className="relative group">
        <video
          ref={videoRef}
          className="w-full aspect-video object-cover"
          poster={thumbnailUrl}
          src={videoUrl}
          loop
          muted
          playsInline
        />
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="bg-white dark:bg-gray-800 p-3 rounded-full"
          >
            {isPlaying ? (
              <Pause className="w-6 h-6 text-gray-900 dark:text-white" />
            ) : (
              <Play className="w-6 h-6 text-gray-900 dark:text-white" />
            )}
          </motion.div>
        </button>
      </div>

      <div className="p-6 space-y-4">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
        
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {githubUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <Github className="w-5 h-5" />
              <span>View Code</span>
            </motion.a>
          )}
          {liveUrl && (
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ExternalLink className="w-5 h-5" />
              <span>Live Demo</span>
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
}