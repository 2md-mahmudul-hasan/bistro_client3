

const OrderFoodCard = ({ items }) => {
  const { name, recipe, image, price, category } = items;

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <p className="absolute top-0 right-3 text-yellow-600">{price}</p>
        <div className="card-body">
          <b>{category}</b>
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>

          <div className="card-actions justify-end">
            <button className="btn btn-primary">Order Now </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderFoodCard;