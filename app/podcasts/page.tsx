import React from 'react'
import VideoCard from './VideoCard'
import Link from 'next/link'
import { Home } from 'lucide-react'

const Page = () => {
  return (
    <div className='flex flex-col items-center justify-center px-10  LandingImg'>
        <div className='text-5xl font-bold w-screen border-b-2  text-center p-8 glassmorphism2'>Podcasts</div>
        <Link href='/'>
        <div className="border-2 border-black p-2 rounded-full absolute top-8 right-8">
            <Home className="size-6" />
        </div></Link>

        <div className='flex justify-center mt-10 mb-10'>
            <div className='grid grid-cols-3 gap-6'>
                <VideoCard videoId="X5799GypnBs" title="The Future of AI" duration="45 min" />
                <VideoCard videoId="nDscMFj-XuQ" title="Understanding React" duration="30 min" />
                <VideoCard videoId="2juKkLxdQo0" title="Intro to Next.js" duration="50 min" /> 
                <VideoCard videoId="X5799GypnBs" title="The Future of AI" duration="45 min" />
                <VideoCard videoId="nDscMFj-XuQ" title="Understanding React" duration="30 min" />
                <VideoCard videoId="2juKkLxdQo0" title="Intro to Next.js" duration="50 min" /> 
            </div>
        </div>
    </div>
  )
}

export default Page