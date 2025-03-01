import { useState } from "react";

const dishes = [
  {
    id: 1,
    name: "Grill Chicken Chop®",
    ingredients: "chicken, egg, mushroom, salad",
    price: 10.99,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Grill Pork Chop®",
    ingredients: "pork, egg, mushroom, salad",
    price: 12.99,
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Capellini Tomato Sauce®",
    ingredients: "spaghetti, tomato, mushroom",
    price: 11.99,
    image: "https://via.placeholder.com/300",
  },
];

export default function RestaurantOrder() {
  const [order, setOrder] = useState([]);

  const addToOrder = (dish) => {
    setOrder((prevOrder) => [...prevOrder, dish]);
  };

  const calculateTotal = () => {
    const subtotal = order.reduce((acc, dish) => acc + dish.price, 0);
    const tax = subtotal * 0.06;
    return { subtotal, tax, total: subtotal + tax };
  };

  const { subtotal, tax, total } = calculateTotal();

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-gray-50">
      <div className="w-full lg:w-2/3 p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {dishes.map((dish) => (
          <div
            key={dish.id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <img
              src={dish.image}
              alt={dish.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {dish.name}
              </h2>
              <p className="text-sm text-gray-500 mb-4">{dish.ingredients}</p>
              <p className="text-lg font-bold text-green-600 mb-4">
                ${dish.price.toFixed(2)}
              </p>
              <button
                onClick={() => addToOrder(dish)}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                Add to Order
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full lg:w-1/3 p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Order Summary</h2>
        {order.length === 0 ? (
          <p className="text-gray-500">No order found</p>
        ) : (
          <ul className="space-y-4 mb-6">
            {order.map((item, index) => (
              <li key={index} className="flex justify-between text-gray-700">
                <span>{item.name}</span>
                <span>${item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="border-t pt-6">
          <p className="flex justify-between text-gray-800 mb-2">
            Subtotal: <span>${subtotal.toFixed(2)}</span>
          </p>
          <p className="flex justify-between text-gray-800 mb-2">
            Taxes (6%): <span>${tax.toFixed(2)}</span>
          </p>
          <p className="flex justify-between text-xl font-bold text-gray-900">
            Total: <span>${total.toFixed(2)}</span>
          </p>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition">
              Service
            </button>
            <button className="bg-gray-200 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-300 transition">
              Bill
            </button>
            <button className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition">
              Submit Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
