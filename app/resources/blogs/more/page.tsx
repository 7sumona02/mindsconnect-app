'use client'
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import localFont from 'next/font/local';
import { useState } from 'react';
import { ChangeEvent } from 'react';

const f1 = localFont({ src: './Helvetica.ttf' });
const f2 = localFont({ src: './Aujournuit-Regular.woff2' });

interface Therapy {
  name: string;
  description: string;
  imageSrc: string;
  altText: string;
}

const therapies: Therapy[] = [
  {
    name: 'Acceptance and commitment therapy (ACT)',
    description:
      'A therapy that aims to help individuals accept difficult thoughts and feelings while also committing to actions that align with their values and goals.',
    imageSrc: 'https://openui.fly.dev/openui/300x200.svg',
    altText: 'Acceptance and commitment therapy',
  },
  {
    name: 'Interpersonal therapy (IPT)',
    description:
      'A form of therapy that focuses on improving interpersonal relationships and communication skills to alleviate symptoms of depression, anxiety, and other emotional problems.',
    imageSrc: 'https://openui.fly.dev/openui/300x200.svg',
    altText: 'Interpersonal therapy',
  },
  {
    name: 'Mindfulness-cognitive therapy (MBCT)',
    description:
      'Form of therapy that combines elements of CBT with mindfulness meditation, which helps individuals learn to be more present and non-judgmental of their thoughts and feelings.',
    imageSrc: 'https://openui.fly.dev/openui/300x200.svg',
    altText: 'Mindfulness-cognitive therapy',
  },
  {
    name: 'Acceptance and commitment therapy (ACT)',
    description:
      'A therapy that aims to help individuals accept difficult thoughts and feelings while also committing to actions that align with their values and goals.',
    imageSrc: 'https://openui.fly.dev/openui/300x200.svg',
    altText: 'Acceptance and commitment therapy',
  },
  {
    name: 'Interpersonal therapy (IPT)',
    description:
      'A form of therapy that focuses on improving interpersonal relationships and communication skills to alleviate symptoms of depression, anxiety, and other emotional problems.',
    imageSrc: 'https://openui.fly.dev/openui/300x200.svg',
    altText: 'Interpersonal therapy',
  },
  {
    name: 'Mindfulness-cognitive therapy (MBCT)',
    description:
      'Form of therapy that combines elements of CBT with mindfulness meditation, which helps individuals learn to be more present and non-judgmental of their thoughts and feelings.',
    imageSrc: 'https://openui.fly.dev/openui/300x200.svg',
    altText: 'Mindfulness-cognitive therapy',
  },
  {
    name: 'Acceptance and commitment therapy (ACT)',
    description:
      'A therapy that aims to help individuals accept difficult thoughts and feelings while also committing to actions that align with their values and goals.',
    imageSrc: 'https://openui.fly.dev/openui/300x200.svg',
    altText: 'Acceptance and commitment therapy',
  },
  {
    name: 'Interpersonal therapy (IPT)',
    description:
      'A form of therapy that focuses on improving interpersonal relationships and communication skills to alleviate symptoms of depression, anxiety, and other emotional problems.',
    imageSrc: 'https://openui.fly.dev/openui/300x200.svg',
    altText: 'Interpersonal therapy',
  },
  {
    name: 'Mindfulness-cognitive therapy (MBCT)',
    description:
      'A therapy that combines elements of CBT with mindfulness meditation, which helps individuals learn to be more present and non-judgmental of their thoughts and feelings.',
    imageSrc: 'https://openui.fly.dev/openui/300x200.svg',
    altText: 'Mindfulness-cognitive therapy',
  },
  {
    name: 'Acceptance and commitment therapy (ACT)',
    description:
      'A therapy that aims to help individuals accept difficult thoughts and feelings while also committing to actions that align with their values and goals.',
    imageSrc: 'https://openui.fly.dev/openui/300x200.svg',
    altText: 'Acceptance and commitment therapy',
  },
  {
    name: 'Interpersonal therapy (IPT)',
    description:
      'A form of therapy that focuses on improving interpersonal relationships and communication skills to alleviate symptoms of depression, anxiety, and other emotional problems.',
    imageSrc: 'https://openui.fly.dev/openui/300x200.svg',
    altText: 'Interpersonal therapy',
  },
  {
    name: 'Mindfulness-cognitive therapy (MBCT)',
    description:
      'A therapy that combines elements of CBT with mindfulness meditation, which helps individuals learn to be more present and non-judgmental of their thoughts and feelings.',
    imageSrc: 'https://openui.fly.dev/openui/300x200.svg',
    altText: 'Mindfulness-cognitive therapy',
  },
];

const Page = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredTherapies = therapies.filter(therapy =>
    therapy.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div
        className={`h-full flex flex-col items-center text-center px-10  pb-20 ${f1.className}`}
      >
        <div className="pb-20 pt-20 px-10 text-black relative">
          <h2 className="text-3xl font-semibold mb-6">
            Types of <span className={`${f2.className}`}>therapy</span>
          </h2>
          <div className="w-full max-w-xl mx-auto">
      <div className="relative flex flex-col justify-start items-center min-h-[90px]">
        <div className="w-full max-w-sm sticky top-0 z-10 pt-4 pb-1">
          <Input
            type="text"
            placeholder="Search in Blogs"
            className="pl-3 pr-9 py-1.5 h-9 text-sm rounded-md bg-[#ebffa5] border-none shadow-none focus-visible:ring-offset-0"            value={searchTerm}
            onChange={handleSearch}
          />
          <div className="absolute right-3 top-1/2 -translate-y-0.5 h-4 w-4">
            <Search className="w-4 h-4 text-black" />
          </div>
          </div>
        </div>
      </div>
          <div className="grid grid-cols-1 text-left md:grid-cols-3 gap-8 mt-14">
            {filteredTherapies.length > 0 ? (
              filteredTherapies.map((therapy, index) => (
                <div className="overflow-hidden" key={index}>
                  <img
                    src={therapy.imageSrc}
                    alt={therapy.altText}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-bold">
                      {therapy.name}
                    </h3>
                    <p className="mt-2">{therapy.description}</p>
                    <div className='mt-2'>
                      <a href="#">
                        Read more →
                      </a>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className='flex w-[90vw] justify-center overflow-hidden'>
                <p className='flex justify-center items-center text-neutral-700'>No blogs found.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
