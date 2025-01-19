import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeToggle } from './components/theme-toggle';
import { Tabs } from './components/ui/tabs';
import { ProfileSection } from './components/profile/profile-section';
import { CVSection } from './components/cv/cv-section';
import { ProjectsSection } from './components/projects/projects-section';
import { BlogsSection } from './components/blogs/blogs-section';
import { AdminSection } from './components/admin/admin-section';
import { AuthForm } from './components/admin/auth/auth-form';
import { NavDropdown } from './components/admin/auth/nav-dropdown';

export function App() {
  const [activeTab, setActiveTab] = React.useState('CV');
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [isDark, setIsDark] = React.useState(false);
  const tabs = ['CV', 'Projects', 'Blogs', 'Admin'];

  React.useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  const handleAuthSuccess = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    setActiveTab('CV');
  };

  const handleExitAdmin = () => {
    setIsAdmin(false);
    setActiveTab('CV');
  };

  return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white">
        {isAdmin && !isAuthenticated ? (
            <AuthForm
                onAuthSuccess={handleAuthSuccess}
                onExitAdmin={handleExitAdmin}
                isDark={isDark}
                onThemeToggle={() => setIsDark(!isDark)}
            />
        ) : (
            <div className="container mx-auto px-4 py-8">
              <div className="absolute top-4 right-4">
                {isAuthenticated ? (
                    <NavDropdown
                        isAuthenticated={true}
                        isDark={isDark}
                        onLogout={handleLogout}
                        onThemeToggle={() => setIsDark(!isDark)}
                        onHomeClick={handleExitAdmin}
                    />
                ) : (
                    <ThemeToggle />
                )}
              </div>

              <div className="grid md:grid-cols-[300px_1fr] gap-8 items-start">
                <div className="md:sticky top-8">
                  <ProfileSection />
                </div>

                <div className="space-y-6">
                  <Tabs
                      tabs={tabs}
                      activeTab={activeTab}
                      onTabChange={(tab) => {
                        if (tab === 'Admin') {
                          setIsAdmin(true);
                        } else {
                          setActiveTab(tab);
                          setIsAdmin(false);
                        }
                      }}
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
                      {isAdmin && isAuthenticated ? (
                          <AdminSection />
                      ) : (
                          <>
                            {activeTab === 'CV' && <CVSection />}
                            {activeTab === 'Projects' && <ProjectsSection />}
                            {activeTab === 'Blogs' && <BlogsSection />}
                          </>
                      )}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
        )}
      </div>
  );
}
