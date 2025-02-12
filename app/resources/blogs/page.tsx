import localFont from 'next/font/local';
import Image from 'next/image';

const f1 = localFont({ src: './Helvetica.ttf' });
const f2 = localFont({ src: './Aujournuit-Regular.woff2' });

const therapies = [
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
];

const Page = () => {
  return (
    <>
      <div
        className={`h-full flex flex-col items-center text-center px-10  pb-20 ${f1.className}`}
      >

        <div className="pb-20 pt-20 px-10 text-black relative">
          <h2 className="text-3xl font-semibold mb-6">
            Types of <span className={`${f2.className}`}>therapy</span>
          </h2>
          <div className="grid grid-cols-1 text-left md:grid-cols-3 gap-8 mt-14">
            {therapies.map((therapy, index) => (
              <div className="overflow-hidden" key={index}>
                <Image
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
            ))}
          </div>
          <div className="mt-20 text-center absolute bottom-2 right-10">
            <a href="/resources/blogs/more" className="px-4 py-2 rounded-lg hover:underline hover:underline-offset-4">
              More Blogs →
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
