'use client'
import localFont from 'next/font/local';

const f1 = localFont({ src: './Helvetica.ttf' });
const f2 = localFont({ src: './Aujournuit-Regular.woff2' });

const Page: React.FC = () => {
  const handleQuizSelection = (quizType: 'short' | 'long') => { // Added type annotation
    let googleFormUrl = '';
    if (quizType === 'short') {
      googleFormUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSeDJgMQgojv_zq0w1J3IAN0XnVBJS_7ut4FiIcOclvWAhYisA/viewform?usp=dialog'; // Replace with your Google Form link
    } else if (quizType === 'long') {
      googleFormUrl = 'https://forms.gle/YOUR_LONG_QUIZ_FORM_LINK'; // Replace with your Google Form link
    }
    window.location.href = googleFormUrl;
  };

  return (
    <div
      className={`h-full w-screen flex flex-col items-center text-center px-12 pb-10 ${f1.className}`}
    >
      <main className="flex flex-col items-center mt-20">
        <h2 className="text-5xl font-medium mb-4 whitespace-normal text-black max-w-2xl">
          Assess Your Mental Health with{' '}
          <span className={`${f2.className}`}>MindsConnect</span>
        </h2>
        {/* <p className="text-lg text-gray-600 max-w-2xl mt-4">
          Take a step towards understanding your mental state. Choose the quiz
          that best suits your needs.
        </p> */}

        <div className="grid md:grid-cols-1 gap-8 mt-20 max-w-2xl">
          {/* Short Quiz Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Quick Assessment</h3>
            <p className="text-gray-600 mb-6">
              A shorter 20-question quiz designed for a quick snapshot of your
              mental well-being. Perfect for regular check-ins or if you&apos;re short
              on time.
            </p>
            <button
              onClick={() => handleQuizSelection('short')}
              className="bg-[#ebffa5] font-medium text-sm text-black px-6 py-3 rounded"
            >
              Start 20-Question Quiz
            </button>
          </div>

          {/* Long Quiz Card */}
          <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold mb-4">Comprehensive Assessment</h3>
            <p className="text-gray-600 mb-6">
              A detailed 50-question quiz recommended for first-time users. It
              provides a deeper understanding of your mental health and offers
              more accurate, personalized insights.
            </p>
            <button
              onClick={() => handleQuizSelection('long')}
              className="bg-[#ebffa5] font-medium text-sm text-black px-6 py-3 rounded"
            >
              Start 50-Question Quiz
            </button>
          </div>
        </div>

        <p className="text-sm text-gray-500 pt-24 max-w-2xl">
          Note: Your responses are confidential and will be used solely to
          provide personalized mental health recommendations. By starting the
          quiz, you agree to our{' '}
          <a href="#" className="text-black underline">
            Privacy Policy
          </a>
          .
        </p>
      </main>
    </div>
  );
};

export default Page;