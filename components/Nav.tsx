import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import localFont from 'next/font/local';　　

const f1 = localFont({ src: './Helvetica.ttf' });
const f2 = localFont({ src: './Aujournuit-Regular.woff2' });

const Nav = () => {
  return (
    <div
        className={`h-full w-screen flex flex-col items-center text-center px-10 ${f1.className}`}>
            <SignedIn>
                <header className="flex justify-between items-center sticky h-20 inset-x-0 top-0 z-30 w-full backdrop-blur-md transition-all">
                    <h1 className="text-lg text-black">Menu</h1>
                    <a href='/'
                        className={`text-2xl font-bold text-black ${f2.className} translate-x-20`}
                    >
                        MindsConnect
                    </a>
                    <div className='flex items-center'>
                        <a href='/resources' className="bg-[#ebffa5] font-medium text-sm text-black px-4 py-2 rounded">
                            Browse Resources
                        </a>
                        <button className="font-medium text-sm text-black px-4 py-2 rounded">
                            <UserButton afterSignOutUrl='/' />
                        </button>
                    </div>
                </header>
            </SignedIn>
            <SignedOut>
            <header className="flex justify-between items-center sticky h-20 inset-x-0 top-0 z-30 w-full backdrop-blur-md transition-all">
                    <h1 className="text-lg text-black">Menu</h1>
                    <a href='/'
                        className={`text-2xl font-bold text-black ${f2.className} translate-x-[1vw]`}
                    >
                        MindsConnect
                    </a>
                        <a href='/sign-in' className="bg-[#ebffa5] font-medium text-sm text-black px-4 py-2 rounded">
                            Sign in
                        </a>
                </header>
            </SignedOut>
    </div>
  )
}

export default Nav