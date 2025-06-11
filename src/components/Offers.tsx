import { MdEmojiFoodBeverage } from "react-icons/md";

const Offers = () => {
  return (
    <section
      id="offers"
      className="min-h-screen bg-white dark:bg-gray-900 flex flex-col items-center justify-center px-5 py-25"
    >
      <h1 className="flex flex-wrap items-center justify-center text-3xl sm:text-4xl mb-5 text-black dark:text-green-200 font-semibold text-center">
        Delicious Offers
        <MdEmojiFoodBeverage className="ml-2 text-4xl mt-1 text-green-500 " />
      </h1>
      <div className=" max-w-7xl mx-auto  bg-amber-100 dark:bg-gray-600 p-8 rounded-2xl">
        <div className="flex items-center justify-around flex-col md:flex-row">
          <div className="flex flex-col space-y-4 w-full md:w-1/2">
            <h1 className="text-green-500 text-3xl font-semibold">Offers!</h1>
            <p className="text-4xl text-black dark:text-white font-bold">
              Enjoy exclusive deals and discounts on your favorite meals!
            </p>
            <p className="text-black dark:text-white/80">
              Hurry! Limited-time offers available now—order today and save big
              on your next meal.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="bg-green-600 text-white px-2 py-1 rounded-xl hover:bg-green-700 transition-colors duration-200 cursor-pointer">
                view more
              </button>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/assets/img/offer.png"
              alt=""
              className="md:h-100 md:w-100 h-60 w-60"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
