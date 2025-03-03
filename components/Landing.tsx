import localFont from 'next/font/local';
import Notification from '@/components/Notification';

const f1 = localFont({ src: './Helvetica.ttf' });
const f2 = localFont({ src: './Aujournuit-Regular.woff2' });

const Landing = () => {
  return (
    <div
      className={`h-full w-screen flex flex-col items-center text-center px-12 pb-10 select-none ${f1.className} bg-white dark:bg-zinc-800`}
    >
      <main className="flex flex-col items-center">
        <h2 className="text-5xl font-medium mb-4 whitespace-normal text-black dark:text-white max-w-2xl mt-36">
          Empowering{' '}
          <span className={`${f2.className}`}>personalized</span> mental health
          care through{' '}
          <span className={`${f2.className}`}>AI-driven support.</span>
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mt-4">
          MindsConnect uses advanced AI to analyze your unique needs, providing
          tailored resources and support for your mental health journey.
        </p>
        <button className="bg-[#ebffa5] font-medium text-sm text-black px-4 py-2 rounded mt-5 dark:bg-zinc-100 dark:text-black">
          Get Started
        </button>
        {/* <Notification /> */}
      </main>

      {/* Image Grid Section */}
      <section className="grid md:grid-cols-4 gap-4 mt-20 w-full max-w-7xl px-4">
        <div className="w-full h-64 overflow-hidden rounded-lg">
          <img
            src="/l1.jpg"
            alt="AI-driven analysis"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-64 overflow-hidden rounded-lg">
          <img
            src="/l2.jpg"
            alt="Personalized resources"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-64 overflow-hidden rounded-lg">
          <img
            src="/l3.jpg"
            alt="Behavioral insights"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-64 overflow-hidden rounded-lg">
          <img
            src="/l4.jpg"
            alt="User-friendly interface"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      <div className="flex flex-col lg:flex-row gap-16 items-center pt-60 px-10 pb-20">
        <div className="lg:w-1/2 text-black dark:text-white flex flex-col items-start">
          <div className="text-muted text-sm mb-2">What we do</div>
          <h2 className="text-4xl text-left font-bold mb-4 whitespace-normal max-w-xl">
            AI-powered <span className={`${f2.className}`}>insights</span> for
            your mental health{' '}
            <span className={`${f2.className}`}>well-being.</span>
          </h2>
          <p className="text-left mb-6 whitespace-normal max-w-md text-gray-600 dark:text-gray-400">
            MindsConnect collects and analyzes your self-reported symptoms,
            behavioral patterns, and preferences to deliver personalized mental
            health resources. Whether you&apos;re dealing with stress, anxiety, or
            depression, our AI-driven platform ensures you get the right support
            at the right time.
          </p>
          <button className="bg-[#ebffa5] font-medium text-sm text-black px-4 py-2 rounded dark:bg-zinc-100 dark:text-black">
            Learn More
          </button>
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <img
            src="/l5.jpg"
            alt="AI analyzing mental health data"
            className="rounded-lg w-full h-96 object-cover"
          />
        </div>
      </div>

      {/* footer */}
      <footer className="px-10 text-black dark:text-white w-full h-full pt-20">
        <div className="bg-[#E4D9CEff] dark:bg-zinc-600 rounded-lg p-8 container mx-auto flex flex-col md:flex-row justify-between">
          <div className="flex flex-col gap-32">
            <div className="text-center md:text-left">
              <h1 className="text-4xl font-bold">MindsConnect</h1>
              <p className="text-lg">
                Your AI-powered mental health companion.
              </p>
            </div>
            <div className="mt-4 md:mt-0 text-left">
              <p className="text-sm">enquiries@mindsconnect.com</p>
              <p className="text-sm">De Angeli 58, 20149 Lombardy, Milan</p>
            </div>
          </div>

          <div className="flex gap-40">
            <nav className="mt-4 md:mt-0 flex flex-col justify-between">
              <ul className="flex flex-col items-start space-y-2">
                <li>
                  <a href="#" className="text-black dark:text-white">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black dark:text-white">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black dark:text-white">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black dark:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black dark:text-white">
                    Blog
                  </a>
                </li>
              </ul>
              <p className="text-xs">
                Made by <span className="font-bold">mindsconnect</span> |{' '}
                <a href="#" className="text-black dark:text-white">
                  Privacy Policy
                </a>{' '}
                |
                <a href="#" className="text-black dark:text-white">
                  Terms Of Use
                </a>
              </p>
            </nav>

            <div className="flex flex-col justify-between items-end">
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-black dark:text-white">
                  <img src="/logo/twitter.svg" alt="Twitter" />
                </a>
                <a href="#" className="text-black dark:text-white">
                  <img src="/logo/yt.svg" alt="YouTube" />
                </a>
                <a href="#" className="text-black dark:text-white">
                  <img src="/logo/ig.svg" alt="Instagram" />
                </a>
                <a href="#" className="text-black dark:text-white">
                  <img src="/logo/spotify.svg" alt="Spotify" />
                </a>
              </div>
              <p className="text-xs">©2023 MindsConnect</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;