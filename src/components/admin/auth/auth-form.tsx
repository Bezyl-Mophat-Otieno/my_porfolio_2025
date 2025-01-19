import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LoginForm } from './login-form';
import { RegisterForm } from './register-form';
import { NavDropdown } from './nav-dropdown';

interface AuthFormProps {
    onAuthSuccess: () => void;
    onExitAdmin: () => void;
    isDark: boolean;
    onThemeToggle: () => void;
}

export function AuthForm({ onAuthSuccess, onExitAdmin, isDark, onThemeToggle }: AuthFormProps) {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 p-4">
            <div className="absolute top-4 right-4">
                <NavDropdown
                    isAuthenticated={false}
                    isDark={isDark}
                    onLogout={() => {}}
                    onThemeToggle={onThemeToggle}
                    onHomeClick={onExitAdmin}
                />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md"
            >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                    <div className="px-8 pt-8">
                        <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white mb-2">
                            {isLogin ? 'Welcome Back' : 'Create Account'}
                        </h2>
                        <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                            {isLogin
                                ? 'Enter your credentials to access the admin dashboard'
                                : 'Register to manage your portfolio content'}
                        </p>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isLogin ? 'login' : 'register'}
                            initial={{ opacity: 0, x: isLogin ? -20 : 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: isLogin ? 20 : -20 }}
                            transition={{ duration: 0.2 }}
                            className="px-8 pb-8"
                        >
                            {isLogin ? (
                                <LoginForm onSuccess={onAuthSuccess} />
                            ) : (
                                <RegisterForm onSuccess={onAuthSuccess} />
                            )}
                        </motion.div>
                    </AnimatePresence>

                    <div className="px-8 py-4 bg-gray-50 dark:bg-gray-700/50 border-t dark:border-gray-700">
                        <p className="text-sm text-center">
              <span className="text-gray-600 dark:text-gray-300">
                {isLogin ? "Don't have an account?" : 'Already have an account?'}
              </span>{' '}
                            <button
                                onClick={() => setIsLogin(!isLogin)}
                                className="text-blue-600 dark:text-blue-400 font-medium hover:underline"
                            >
                                {isLogin ? 'Register' : 'Login'}
                            </button>
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
