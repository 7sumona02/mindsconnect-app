import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import localFont from 'next/font/local';
import Link from 'next/link';

const f1 = localFont({ src: './Helvetica.ttf' });
const f2 = localFont({ src: './Aujournuit-Regular.woff2' });

const Nav = () => {
  return (
    <div
        className={`flex items-center sticky h-20 inset-x-0 top-0 z-30 backdrop-blur-md transition-all w-screen flex-col text-center px-10 ${f1.className}`}>
        <header className="flex items-center sticky h-20 inset-x-0 top-0 z-30 w-full backdrop-blur-md transition-all">
        <h1 className="text-lg text-black mr-auto">Menu</h1> 
        <div className="fixed right-[45%]">
          <Link href='/'
            className={`text-2xl font-bold text-black ${f2.className}`}
          >
            MindsConnect
          </Link>
        </div>
        <SignedIn>
          <div className='flex items-center gap-4 ml-auto'> 
            <Link href='/resources/blogs' className="bg-[#ebffa5] font-medium text-sm text-black px-4 py-2 rounded">
              Browse Resources
            </Link>
            <UserButton afterSignOutUrl='/' />
          </div>
        </SignedIn>
        <SignedOut>
          <div className="ml-auto"> 
            <Link href='/sign-in' className="bg-[#ebffa5] font-medium text-sm text-black px-4 py-2 rounded">
              Sign in
            </Link>
          </div>
        </SignedOut>
      </header>
    </div>
  )
}

export default Nav;
