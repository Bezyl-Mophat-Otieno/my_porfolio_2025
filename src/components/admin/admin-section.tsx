import { useState } from 'react';
import { motion } from 'framer-motion';
import { ProjectUpload } from './project-upload';
import { BlogCreation } from './blog-creation';

type AdminTab = 'projects' | 'blogs';

export function AdminSection() {
    const [activeTab, setActiveTab] = useState<AdminTab>('projects');

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="container mx-auto px-4">
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
                        Admin Dashboard
                    </h1>
                    <p className="text-gray-600 dark:text-gray-300 mt-2">
                        Manage your portfolio content
                    </p>
                </div>

                <div className="flex gap-4 mb-8">
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveTab('projects')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                            activeTab === 'projects'
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                        }`}
                    >
                        Projects
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setActiveTab('blogs')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                            activeTab === 'blogs'
                                ? 'bg-blue-500 text-white'
                                : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                        }`}
                    >
                        Blogs
                    </motion.button>
                </div>

                {activeTab === 'projects' ? <ProjectUpload /> : <BlogCreation />}
            </div>
        </div>
    );
}
