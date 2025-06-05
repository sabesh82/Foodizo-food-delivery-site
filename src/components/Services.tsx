const Services = () => {
  const processSteps = {
    first: [
      { title: "Easy To Order" },
      { desc: "You only need a few steps in ordering food." },
    ],
    second: [
      { title: "Fastest Delivery" },
      { desc: "Delivery that is always on time even faster." },
    ],
    third: [
      { title: "Best Quality" },
      { desc: "Not only fast for us, quality is also number one." },
    ],
  };

  return (
    <section
      id="services"
      className="min-h-screen w-full flex items-center justify-center bg-white dark:bg-gray-900"
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-20 md:py-15">
        <h2 className="text-center text-green-500 dark:text-green-200 font-semibold text-xl">
          OUR SERVICES
        </h2>
        <h1 className="text-4xl text-center font-extrabold mt-2 text-black dark:text-white">
          How Does It Work?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 mt-8">
          <div className="flex flex-col p-2 bg-gray-200 dark:bg-gray-600 items-center justify-center rounded-lg hover:-translate-y-1">
            <img src="src/assets/img/1.png" alt="" className="h-60 w-60" />
            {processSteps.first.map((item, key) => (
              <p
                key={key}
                className="text-2xl font-semibold text-black dark:text-white"
              >
                {item.title}
                <span className="text-sm font-medium">{item.desc}</span>
              </p>
            ))}
          </div>

          <div className="flex flex-col p-2 bg-gray-200 dark:bg-gray-600 items-center justify-center rounded-lg hover:-translate-y-1">
            <img src="src/assets/img/2.png" alt="" className="h-60 w-60" />
            {processSteps.second.map((item, key) => (
              <p
                key={key}
                className="text-2xl font-semibold text-black dark:text-white"
              >
                {item.title}
                <span className="text-sm font-medium">{item.desc}</span>
              </p>
            ))}
          </div>

          <div className="flex flex-col p-2 bg-gray-200 dark:bg-gray-600 items-center justify-center rounded-lg hover:-translate-y-1">
            <img
              src="src/assets/img/process3.png"
              alt=""
              className="h-60 w-60"
            />
            {processSteps.third.map((item, key) => (
              <p
                key={key}
                className="text-2xl font-semibold text-black dark:text-white"
              >
                {item.title}
                <span className="text-sm font-medium">{item.desc}</span>
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
