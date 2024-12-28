import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

export default function Header() {
    return (
        <header className="relative py-16 mb-8">
            <div className="absolute right-0 top-0">
                <ThemeToggle />
            </div>
            <div className="flex flex-col items-center text-center">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">dewn</h1>
                <div className="flex gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <Link 
                        href="https://twitter.com/dewn" 
                        target="_blank"
                        className="hover:text-blue-600 transition-colors"
                    >
                        Twitter
                    </Link>
                    <span>•</span>
                    <Link 
                        href="https://github.com/dewnn"
                        target="_blank"
                        className="hover:text-blue-600 transition-colors"
                    >
                        GitHub
                    </Link>
                    <span>•</span>
                    <Link 
                        href="https://linkedin.com/in/dewn"
                        target="_blank"
                        className="hover:text-blue-600 transition-colors"
                    >
                        LinkedIn
                    </Link>
                </div>
            </div>
        </header>
    );
} 