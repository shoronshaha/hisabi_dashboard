import { useState } from "react";
import { Container } from "../../../components/layouts/Container";
import { FaTh, FaList } from "react-icons/fa";

const dishes = [
  {
    id: 1,
    name: "Grill Chicken Chop®",
    category: "Chicken",
    brand: "Brand A",
    ingredients: "chicken, egg, mushroom, salad",
    price: 10.99,
    image: "https://placehold.co/200x200.png",
  },
  {
    id: 2,
    name: "Grill Pork Chop®",
    category: "Pork",
    brand: "Brand B",
    ingredients: "pork, egg, mushroom, salad",
    price: 12.99,
    image: "https://placehold.co/200x200.png",
  },
  {
    id: 3,
    name: "Capellini Tomato Sauce®",
    category: "Pasta",
    brand: "Brand C",
    ingredients: "spaghetti, tomato, mushroom",
    price: 11.99,
    image: "https://placehold.co/200x200.png",
  },
  {
    id: 4,
    name: "Grill Chicken Chop®",
    category: "Chicken",
    brand: "Brand A",
    ingredients: "chicken, egg, mushroom, salad",
    price: 10.99,
    image: "https://placehold.co/200x200.png",
  },
  {
    id: 5,
    name: "Grill Pork Chop®",
    category: "Pork",
    brand: "Brand B",
    ingredients: "pork, egg, mushroom, salad",
    price: 12.99,
    image: "https://placehold.co/200x200.png",
  },
  {
    id: 6,
    name: "Capellini Tomato Sauce®",
    category: "Pasta",
    brand: "Brand C",
    ingredients: "spaghetti, tomato, mushroom",
    price: 11.99,
    image: "https://placehold.co/200x200.png",
  },
];

export default function PosPage() {
  const [order, setOrder] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [layout, setLayout] = useState("grid");

  const addToOrder = (dish) => {
    setOrder((prevOrder) => [...prevOrder, dish]);
  };

  const calculateTotal = () => {
    const subtotal = order.reduce((acc, dish) => acc + dish.price, 0);
    const tax = subtotal * 0.06;
    return { subtotal, tax, total: subtotal + tax };
  };

  const { subtotal, tax, total } = calculateTotal();

  // Filter dishes based on search, category, and brand
  const filteredDishes = dishes.filter(
    (dish) =>
      dish.name.toLowerCase().includes(search.toLowerCase()) &&
      (category === "" || dish.category === category) &&
      (brand === "" || dish.brand === brand)
  );

  return (
    <Container>
      <div className="min-h-[90vh] space-y-6 p-4">
        {/* Filters */}
        <div className="flex flex-col justify-between sm:flex-row sm:items-center gap-4 mb-4">
          {/* Search Input */}
          <input
            type="text"
            placeholder="Search dishes..."
            className="w-full sm:w-1/3 px-3 py-2 border bg-white border-gray-300 rounded-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />

          {/* Category Filter */}
          <select
            className="px-3 py-2 border bg-white border-gray-300 rounded-md"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Chicken">Chicken</option>
            <option value="Pork">Pork</option>
            <option value="Pasta">Pasta</option>
          </select>

          {/* Brand Filter */}
          <select
            className="px-3 py-2 bg-white border border-gray-300 rounded-md"
            value={brand}
            onChange={(e) => setBrand(e.target.value)}
          >
            <option value="">All Brands</option>
            <option value="Brand A">Brand A</option>
            <option value="Brand B">Brand B</option>
            <option value="Brand C">Brand C</option>
          </select>

          {/* Layout Toggle */}
          <button
            onClick={() => setLayout(layout === "grid" ? "list" : "grid")}
            className="px-3 py-2 border border-gray-300 rounded-md flex items-center gap-2"
          >
            {layout === "grid" ? <FaList /> : <FaTh />}
            {layout === "grid" ? "List View" : "Grid View"}
          </button>
        </div>
        <div className="flex flex-col lg:flex-row h-screen w-full lg:h-full bg-gray-50">
          {/* Left Section - Dish List */}
          <div className="flex-1 overflow-y-auto max-h-[80vh] p-4 sm:p-6">
            {/* Dish List */}
            <div
              className={
                layout === "grid"
                  ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6"
                  : "space-y-4"
              }
            >
              {filteredDishes.map((dish) => (
                <div
                  key={dish.id}
                  className="bg-white rounded-lg shadow-md p-3 flex flex-col h-full"
                >
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-24 h-24 object-cover mx-auto"
                  />
                  <div className="text-center flex-1">
                    <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                      {dish.name}
                    </h2>
                    <p className="text-xs text-gray-500">{dish.ingredients}</p>
                    <p className="text-md font-bold text-green-600">
                      ${dish.price.toFixed(2)}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <button
                      onClick={() => addToOrder(dish)}
                      className="w-full bg-blue-600 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-700 transition"
                    >
                      Add to Order
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3 max-h-[90vh] h-[80vh] lg:sticky top-24 p-4 sm:p-6 bg-white shadow-lg rounded-2xl flex flex-col">
            <h2 className="text-lg sm:text-xl font-bold text-gray-800">
              Order Summary
            </h2>
            {order.length === 0 ? (
              <p className="text-gray-500">No order found</p>
            ) : (
              <div className="flex-1 overflow-y-auto max-h-60 sm:max-h-96 mb-6">
                <ul className="space-y-2">
                  {order.map((item, index) => (
                    <li
                      key={index}
                      className="flex justify-between text-gray-700 text-sm"
                    >
                      <span>{item.name}</span>
                      <span>${item.price.toFixed(2)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="border-t pt-3">
              <p className="flex justify-between text-gray-800 text-sm mb-1">
                Subtotal: <span>${subtotal.toFixed(2)}</span>
              </p>
              <p className="flex justify-between text-gray-800 text-sm mb-1">
                Taxes (6%): <span>${tax.toFixed(2)}</span>
              </p>
              <p className="flex justify-between text-lg font-bold text-gray-900">
                Total: <span>${total.toFixed(2)}</span>
              </p>
              <button className="bg-green-600 text-white px-3 py-2 rounded-md text-sm hover:bg-green-700 transition w-full mt-2">
                Submit Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
