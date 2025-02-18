import localFont from 'next/font/local';

const f1 = localFont({ src: './Helvetica.ttf' });
const f2 = localFont({ src: './Aujournuit-Regular.woff2' });

const Landing = () => {
  return (
    <div
      className={`h-full w-screen flex flex-col items-center text-center px-12 pb-10 select-none ${f1.className}`}
    >
      <main className="flex flex-col items-center">
        <h2 className="text-5xl font-medium mb-4 whitespace-normal text-black max-w-2xl mt-36">
          Empowering{' '}
          <span className={`${f2.className}`}>personalized</span> mental health
          care through{' '}
          <span className={`${f2.className}`}>AI-driven support.</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mt-4">
          MindsConnect uses advanced AI to analyze your unique needs, providing
          tailored resources and support for your mental health journey.
        </p>
        <button className="bg-[#ebffa5] font-medium text-sm text-black px-4 py-2 rounded mt-5">
          Get Started
        </button>
      </main>

      <section className="grid md:grid-cols-4 gap-4 mt-20">
        <img
          className="rounded-lg"
          src="https://placehold.co/300x200"
          alt="AI-driven analysis"
        />
        <img
          className="rounded-lg"
          src="https://placehold.co/300x200"
          alt="Personalized resources"
        />
        <img
          className="rounded-lg"
          src="https://placehold.co/300x200"
          alt="Behavioral insights"
        />
        <img
          className="rounded-lg"
          src="https://placehold.co/300x200"
          alt="User-friendly interface"
        />
      </section>

      <div className="flex flex-col lg:flex-row gap-16 items-center pt-60 px-10 pb-20">
        <div className="lg:w-1/2 text-black flex flex-col items-start">
          <div className="text-muted text-sm mb-2">What we do</div>
          <h2 className="text-4xl text-left font-bold mb-4 whitespace-normal max-w-xl">
            AI-powered <span className={`${f2.className}`}>insights</span> for
            your mental health{' '}
            <span className={`${f2.className}`}>well-being.</span>
          </h2>
          <p className="text-left mb-6 whitespace-normal max-w-md">
            MindsConnect collects and analyzes your self-reported symptoms,
            behavioral patterns, and preferences to deliver personalized mental
            health resources. Whether you&apos;re dealing with stress, anxiety, or
            depression, our AI-driven platform ensures you get the right support
            at the right time.
          </p>
          <button className="bg-[#ebffa5] font-medium text-sm text-black px-4 py-2 rounded">
            Learn More
          </button>
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <img
            src="https://placehold.co/600x400"
            alt="AI analyzing mental health data"
            className="rounded-lg"
          />
        </div>
      </div>

      {/* footer */}
      <footer className="px-10 text-black w-full h-full pt-20">
        <div className="bg-[#E4D9CEff] rounded-lg p-8 container mx-auto flex flex-col md:flex-row justify-between">
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
                  <a href="#" className="text-black">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black">
                    How It Works
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-black">
                    Blog
                  </a>
                </li>
              </ul>
              <p className="text-xs">
                Made by <span className="font-bold">mindsconnect</span> |{' '}
                <a href="#" className="text-black">
                  Privacy Policy
                </a>{' '}
                |
                <a href="#" className="text-black">
                  Terms Of Use
                </a>
              </p>
            </nav>

            <div className="flex flex-col justify-between items-end">
              <div className="flex justify-center space-x-4">
                <a href="#" className="text-black">
                  <img src="/logo/twitter.svg" alt="Twitter" />
                </a>
                <a href="#" className="text-black">
                  <img src="/logo/yt.svg" alt="YouTube" />
                </a>
                <a href="#" className="text-black">
                  <img src="/logo/ig.svg" alt="Instagram" />
                </a>
                <a href="#" className="text-black">
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