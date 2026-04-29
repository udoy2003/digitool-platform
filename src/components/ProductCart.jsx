import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const ProductCart = ({ setCartCount }) => {
  const [products, setProducts] = useState([]);
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error(err));
  }, []);


  useEffect(() => {
    setCartCount(cart.length);
  }, [cart, setCartCount]);

  
  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    toast.success(`${product.name} added to cart 🛒`);
  };


  const handleRemove = (index) => {
    const removedItem = cart[index];
    setCart((prev) => prev.filter((_, i) => i !== index));
    toast.error(`${removedItem.name} removed ❌`);
  };

  
  const handleCheckout = () => {
    setCart([]);
    toast.info("Checkout successful 🎉");
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-3">
        Premium Digital Tools
      </h1>

      <p className="text-center text-gray-500 mb-6">
        Choose from our curated collection of premium digital products.
      </p>

      <div className="flex justify-center gap-4 mb-10">
        <button
          onClick={() => setActiveTab("products")}
          className={`px-6 py-2 rounded-full ${
            activeTab === "products"
              ? "bg-purple-500 text-white"
              : "bg-gray-100"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setActiveTab("cart")}
          className={`px-6 py-2 rounded-full ${
            activeTab === "cart"
              ? "bg-purple-500 text-white"
              : "bg-gray-100"
          }`}
        >
          Cart ({cart.length})
        </button>
      </div>

  
      {activeTab === "products" && (
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="border p-4 rounded-xl shadow flex flex-col justify-between h-[300px]"
            >
              <div>
                <span className="text-xs px-2 py-1 bg-blue-100 text-blue-600 rounded">
                  {product.tag}
                </span>

                <h2 className="text-xl font-bold mt-2">
                  {product.name}
                </h2>

                <p className="text-sm text-gray-500 h-[40px] overflow-hidden">
                  {product.description}
                </p>

                <p className="mt-2 font-semibold">
                  ${product.price} / {product.period}
                </p>
              </div>

              <button
                onClick={() => handleAddToCart(product)}
                className="btn btn-primary w-full"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}

      
      {activeTab === "cart" && (
        <div className="max-w-xl mx-auto">
          {cart.length === 0 ? (
            <p className="text-center text-gray-500">
              Your cart is empty
            </p>
          ) : (
            <>
              <div className="space-y-4">
                {cart.map((item, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border p-4 rounded"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full" />

                      <div>
                        <h3 className="font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-500">
                          ${item.price}
                        </p>
                      </div>
                    </div>

                    <button
                      onClick={() => handleRemove(index)}
                      className="text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>

              <button
                onClick={handleCheckout}
                className="mt-6 w-full bg-purple-500 text-white py-3 rounded"
              >
                Proceed to Checkout
              </button>
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default ProductCart;