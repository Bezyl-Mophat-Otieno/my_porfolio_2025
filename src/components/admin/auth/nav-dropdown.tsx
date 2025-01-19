import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, Home, LogOut, Sun, Moon } from 'lucide-react';

interface NavDropdownProps {
    isAuthenticated: boolean;
    isDark: boolean;
    onLogout: () => void;
    onThemeToggle: () => void;
    onHomeClick: () => void;
}

export function NavDropdown({
                                isAuthenticated,
                                isDark,
                                onLogout,
                                onThemeToggle,
                                onHomeClick,
                            }: NavDropdownProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg bg-white dark:bg-gray-800 shadow-md hover:shadow-lg transition-shadow"
            >
                <Menu className="w-5 h-5 text-gray-700 dark:text-gray-300" />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            transition={{ duration: 0.15 }}
                            className="absolute right-0 mt-2 w-48 rounded-lg bg-white dark:bg-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 z-50"
                        >
                            <div className="py-1">
                                <button
                                    onClick={() => {
                                        onHomeClick();
                                        setIsOpen(false);
                                    }}
                                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    <Home className="w-4 h-4" />
                                    Home
                                </button>

                                {isAuthenticated && (
                                    <button
                                        onClick={() => {
                                            onLogout();
                                            setIsOpen(false);
                                        }}
                                        className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                    >
                                        <LogOut className="w-4 h-4" />
                                        Log out
                                    </button>
                                )}

                                <button
                                    onClick={() => {
                                        onThemeToggle();
                                        setIsOpen(false);
                                    }}
                                    className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                                >
                                    {isDark ? (
                                        <>
                                            <Sun className="w-4 h-4" />
                                            Light Mode
                                        </>
                                    ) : (
                                        <>
                                            <Moon className="w-4 h-4" />
                                            Dark Mode
                                        </>
                                    )}
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
