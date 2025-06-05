const Feedback = () => {
  return (
    <section
      id="feedback"
      className="w-full min-h-9 px-4 py-25 md:py-30 bg-white dark:bg-gray-900"
    >
      <div className="max-w-4xl mx-auto bg-amber-50 dark:bg-gray-700 rounded-xl border border-gray-900 p-6 sm:p-10 flex flex-col space-y-6 shadow-md border-none">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black dark:text-white text-center">
          Contact Us
        </h1>

        <p className="text-black dark:text-white text-center text-sm sm:text-base px-4">
          We'd love to hear from you! Enter your email below and we'll get in
          touch.
        </p>

        <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0 w-full max-w-xl mx-auto">
          <input
            type="email"
            className="bg-white px-4 py-2 w-full rounded-md text-black outline-none border border-gray-300 focus:ring-2 focus:ring-green-500"
            placeholder="give your feedback"
          />
          <button className="h-10 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 hover:-translate-y-0.5 transition-all cursor-pointer">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
