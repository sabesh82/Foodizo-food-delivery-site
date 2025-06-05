const FoodCard = ({
  name,
  price,
  image,
}: {
  name: string;
  price: string;
  image: string;
}) => {
  return (
    <div className="group bg-gray-100 dark:bg-gray-600 p-6 rounded-2xl hover:bg-gray-500 dark:hover:bg-gray-500 transition-all duration-300">
      <div className="relative mb-4">
        <img src={image} alt={name} className="mx-auto h-45 w-45" />
      </div>
      <h3 className="text-xl font-semibold mb-2 group-hover:text-white transition-colors duration-300">
        {name}
      </h3>
      <p className="text-lg font-bold text-green-600 group-hover:text-white transition-colors duration-300">
        {price}
      </p>
    </div>
  );
};

export default FoodCard;
