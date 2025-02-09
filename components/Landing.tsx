import localFont from 'next/font/local';　　

const f1 = localFont({ src: './Helvetica.ttf' });
const f2 = localFont({ src: './Aujournuit-Regular.woff2' });

const Landing = () => {
  return (
    <div
        className={`h-full w-screen flex flex-col items-center text-center px-10 pb-20 ${f1.className}`}>

            <main className="flex flex-col items-center">
          <h2 className="text-5xl font-medium mb-4 whitespace-normal text-black max-w-2xl mt-36">
            Providing{' '}
            <span className={`${f2.className}`}>guidance</span> to individuals
            and organisations for better{' '}
            <span className={`${f2.className}`}>mental health.</span>
          </h2>
          <button className="bg-[#ebffa5] font-medium text-sm text-black px-4 py-2 rounded mt-5">
            Browse Resources
          </button>
        </main>

        <section className="grid md:grid-cols-4 gap-4 mt-20">
          <img
            className="rounded-lg"
            src="https://placehold.co/300x200"
            alt="Image 1"
          />
          <img
            className="rounded-lg"
            src="https://placehold.co/300x200"
            alt="Image 2"
          />
          <img
            className="rounded-lg"
            src="https://placehold.co/300x200"
            alt="Image 3"
          />
          <img
            className="rounded-lg"
            src="https://placehold.co/300x200"
            alt="Image 4"
          />
        </section>

        <div className="flex flex-col lg:flex-row gap-16 items-center pt-60 px-10 pb-20">
          <div className="lg:w-1/2 text-black flex flex-col items-start">
            <div className="text-muted text-sm mb-2">What we do</div>
            {/* <div className="flex space-x-4 mb-6">
                  <span>Forbes</span>
                  <span>Wallpaper*</span>
                  <span>BARRON'S</span>
                </div> */}
            <h2 className="text-4xl text-left font-bold mb-4 whitespace-normal max-w-xl">
              Personalized <span className={`${f2.className}`}>counseling</span>{' '}
              and support for mental health{' '}
              <span className={`${f2.className}`}>challenges.</span>
            </h2>
            <p className="text-left mb-6 whitespace-normal max-w-md">
              Sensa offers an array of support and counseling services to both
              individuals and organizations. Our accredited therapists and
              counselors are ready to assist with a variety of mental health
              challenges such as stress, anxiety, depression, and trauma.
            </p>
            <button className="bg-[#ebffa5] font-medium text-sm text-black px-4 py-2 rounded">
              Learn More
            </button>
          </div>
          <div className="lg:w-1/2 mt-6 lg:mt-0">
            <img
              src="https://placehold.co/600x400"
              alt="Hands holding flowers"
              className="rounded-lg"
            />
          </div>
        </div>

    </div>
  )
}

export default Landing