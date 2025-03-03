import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import localFont from 'next/font/local';
import Link from 'next/link';
import { SidebarProvider, SidebarTrigger } from './ui/sidebar';
import { AppSidebar } from './ui/app-sidebar';
import { useState, useEffect } from 'react';

const f1 = localFont({ src: './Helvetica.ttf' });
const f2 = localFont({ src: './Aujournuit-Regular.woff2' });

const Nav = () => {
  const [selected, setSelected] = useState('light');

  // Sync with the system preference or saved user preference
  useEffect(() => {
    const isDarkMode =
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setSelected(isDarkMode ? 'dark' : 'light');
  }, []);

  // Update the dark mode class on the HTML element
  useEffect(() => {
    if (selected === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
    }
  }, [selected]);

  return (
    <SidebarProvider>
      <AppSidebar />
      <div
        className={`flex items-center sticky h-20 inset-x-0 top-0 z-30 backdrop-blur-md transition-all w-screen flex-col text-center px-10 ${f1.className} bg-white dark:bg-zinc-800`}
      >
        <header className="flex items-center sticky h-20 inset-x-0 top-0 z-30 w-full backdrop-blur-md transition-all">
          <h1 className="text-lg text-black dark:text-white mr-auto">
            <SidebarTrigger />
          </h1>
          <div className="fixed right-[45%]">
            <Link
              href="/"
              className={`text-2xl font-bold text-black dark:text-white ${f2.className}`}
            >
              MindsConnect
            </Link>
          </div>
          <SignedIn>
            <div className="flex items-center gap-4 ml-auto">
              <Link
                href="/resources/blogs"
                className="bg-[#ebffa5] font-medium text-sm text-black px-4 py-2 rounded dark:bg-zinc-100 dark:text-black"
              >
                Browse Resources
              </Link>
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
          <SignedOut>
            <div className="ml-auto">
              <Link
                href="/sign-in"
                className="bg-[#ebffa5] font-medium text-sm text-black px-4 py-2 rounded dark:bg-[#2d3748] dark:text-white"
              >
                Sign in
              </Link>
            </div>
          </SignedOut>
          {/* Light/Dark Mode Toggle */}
          {/* <div className="ml-4">
            <div className="relative flex w-fit items-center rounded-full bg-gray-200 dark:bg-gray-800">
              <button
                className={`${TOGGLE_CLASSES} ${
                  selected === 'light' ? 'text-white' : 'text-slate-800 dark:text-gray-200'
                }`}
                onClick={() => setSelected('light')}
                aria-label="Switch to light mode"
              >
                <Sun className="relative z-10 text-lg md:text-sm" />
                <span className="relative z-10">Light</span>
              </button>
              <button
                className={`${TOGGLE_CLASSES} ${
                  selected === 'dark' ? 'text-white' : 'text-slate-800 dark:text-gray-200'
                }`}
                onClick={() => setSelected('dark')}
                aria-label="Switch to dark mode"
              >
                <Moon className="relative z-10 text-lg md:text-sm" />
                <span className="relative z-10">Dark</span>
              </button>
              <div
                className={`absolute inset-0 z-0 flex ${
                  selected === 'dark' ? 'justify-end' : 'justify-start'
                }`}
              >
                <motion.span
                  layout
                  transition={{ type: 'spring', damping: 15, stiffness: 250 }}
                  className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600"
                />
              </div>
            </div>
          </div> */}
        </header>
      </div>
    </SidebarProvider>
  );
};

export default Nav;