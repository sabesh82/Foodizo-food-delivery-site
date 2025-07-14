import FoodCard from "../layouts/FoodCard";

const Foods = () => {
  const dishes = [
    {
      id: 1,
      name: "Chicken Biriyani",
      price: "1500 Rs",
      image:
        "https://res.cloudinary.com/dlseuftkj/image/upload/v1752482917/food1_xyccfj.png",
    },
    {
      id: 2,
      name: "Medium italian Pizza",
      price: "2500 Rs",
      image:
        "https://res.cloudinary.com/dlseuftkj/image/upload/v1752483261/food2_zoc5qy.png",
    },
    {
      id: 3,
      name: "Noodles",
      price: "900 Rs",
      image:
        "https://res.cloudinary.com/dlseuftkj/image/upload/v1752483272/food3_gbqvr9.png",
    },
    {
      id: 4,
      name: "Donets",
      price: "499 Rs",
      image:
        "https://res.cloudinary.com/dlseuftkj/image/upload/v1752483307/food4_krtfhu.png",
    },
    {
      id: 5,
      name: "French Fries",
      price: "999 Rs",
      image:
        "https://res.cloudinary.com/dlseuftkj/image/upload/v1752483312/food5_uiojvm.png",
    },
    {
      id: 6,
      name: "Sausage bun",
      price: "400 Rs",
      image:
        "https://res.cloudinary.com/dlseuftkj/image/upload/v1752483326/food6_gl6fgc.png",
    },
    {
      id: 7,
      name: "Onion rings",
      price: "299 Rs",
      image:
        "https://res.cloudinary.com/dlseuftkj/image/upload/v1752483355/food7_rli7zo.png",
    },
    {
      id: 8,
      name: "Lemon Mojito",
      price: "500 Rs",
      image:
        "https://res.cloudinary.com/dlseuftkj/image/upload/v1752483361/food8_yapslo.png",
    },
  ];

  return (
    <section
      id="foods"
      className="bg-white dark:bg-gray-900 text-black dark:text-white py-26 px-5 lg:px-14 transition-colors duration-300"
    >
      <div className="text-center mb-12">
        <p className="text-green-500 dark:text-green-200 font-medium uppercase tracking-wider mb-2">
          Our Menu
        </p>
        <h2 className="text-3xl md:text-4xl font-bold">Top Picks For You</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center">
        {dishes.map((dish, key) => (
          <FoodCard key={key} {...dish} />
        ))}
      </div>
    </section>
  );
};

export default Foods;
