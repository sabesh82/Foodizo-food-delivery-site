const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row px-4 py-15 space-x-15">
        {/*left section*/}
        <div className="flex flex-col w-full md:w-1/2 mt-15">
          <h2 className="text-green-500 dark:text-green-200  mb-5 text-xl font-bold">
            Trusted by thousands
          </h2>

          <h1 className="text-5xl md:text-7xl font-bold mb-7 text-black dark:text-white">
            Your <span className="text-green-500">Fast Lane</span> to{" "}
            <span className="text-green-500">Fresh Food</span>
          </h1>
          <p className="text-gray-600 text-xl mb-10 dark:text-white/80">
            Tell us your location to discover nearby restaurants and have
            delicious food delivered to your door. Enjoy every bite!
          </p>
          <div className="flex space-x-10 items-center">
            <p className="text-gray-500 text-lg dark:text-white/80">
              Chilaw, SriLanka
            </p>
            <a
              href="#foods"
              className="bg-green-600 text-white px-4 py-2 text-base sm:text-xl rounded-4xl hover:bg-green-700 transition-colors duration-200 "
            >
              Find Foods
            </a>
          </div>
        </div>
        {/*image section*/}
        <div className="flex items-center md:w-1/2 mt-5 justify-center ">
          <img
            src="src/assets/img/hero.jpg"
            alt=""
            className="w-65 h-65 md:w-125 md:h-125 object-cover rounded-full mt-10 md:mt-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
