import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import localFont from 'next/font/local';　　
import Link from 'next/link';

const f1 = localFont({ src: './Helvetica.ttf' });
const f2 = localFont({ src: './Aujournuit-Regular.woff2' });

const Nav = () => {
  return (
    <div
        className={`h-full w-screen flex flex-col items-center text-center px-10 ${f1.className}`}>
            <SignedIn>
                <header className="flex justify-between items-center sticky h-20 inset-x-0 top-0 z-30 w-full backdrop-blur-md transition-all">
                    <h1 className="text-lg text-black">Menu</h1>
                    <Link href='/'
                        className={`text-2xl font-bold text-black ${f2.className} translate-x-20`}
                    >
                        MindsConnect
                    </Link>
                    <div className='flex items-center'>
                        <Link href='/resources' className="bg-[#ebffa5] font-medium text-sm text-black px-4 py-2 rounded">
                            Browse Resources
                        </Link>
                        <button className="font-medium text-sm text-black px-4 py-2 rounded">
                            <UserButton afterSignOutUrl='/' />
                        </button>
                    </div>
                </header>
            </SignedIn>
            <SignedOut>
            <header className="flex justify-between items-center sticky h-20 inset-x-0 top-0 z-30 w-full backdrop-blur-md transition-all">
                    <h1 className="text-lg text-black">Menu</h1>
                    <Link href='/'
                        className={`text-2xl font-bold text-black ${f2.className} translate-x-[1vw]`}
                    >
                        MindsConnect
                    </Link>
                        <Link href='/sign-in' className="bg-[#ebffa5] font-medium text-sm text-black px-4 py-2 rounded">
                            Sign in
                        </Link>
                </header>
            </SignedOut>
    </div>
  )
}

export default Nav