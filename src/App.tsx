import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './components/theme-toggle';
import { Tabs } from './components/ui/tabs';
import { ProfileSection } from './components/profile/profile-section';
import { CVSection } from './components/cv/cv-section';
import { ProjectsSection } from './components/projects/projects-section';
import { BlogsSection } from './components/blogs/blogs-section';

export function App() {
  const [activeTab, setActiveTab] = React.useState('CV');
  const tabs = ['CV', 'Projects', 'Blogs'];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="absolute top-4 right-4">
          <ThemeToggle />
        </div>
        
        <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
          <div className="md:sticky top-8">
            <ProfileSection />
          </div>
          
          <div className="space-y-6">
            <Tabs
              tabs={tabs}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6"
              >
                {activeTab === 'CV' && <CVSection />}
                {activeTab === 'Projects' && <ProjectsSection />}
                {activeTab === 'Blogs' && <BlogsSection />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}