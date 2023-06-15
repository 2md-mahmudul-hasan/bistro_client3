import OrderFoodCard from "../OrderFoodCard/OrderFoodCard";


const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-3">
      {
        items.map(item => <OrderFoodCard items={item} key={item._id}></OrderFoodCard>)
      }
    </div>
  );
};

export default OrderTab;