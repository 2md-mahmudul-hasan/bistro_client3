

const MenuItem = ({ item }) => {
  const { name, recipe, image, price, category, _id } = item;
  return (
    <div className="flex space-x-2 p-4 items-center">
      <img className="w-[120px]" style={{ 'borderRadius': '0px 200px 200px 200px' }} src={image} alt="popular_image" />
      <div>
        <h3>{name}----------------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-warning">{price}</p>
    </div>
  );
};

export default MenuItem;