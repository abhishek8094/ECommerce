import React, { useContext, useEffect } from "react";
import Layout from "../layout/Layout";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";
import { removeItem } from "../../redux/wishlistSlice";
import { CgTrashEmpty } from "react-icons/cg";
import { toast } from "react-toastify";
import myContext from "../../context/data/myContext";

export default function Wishlist() {
  const context = useContext(myContext);
  const { mode } = context;

  const cartItems = useSelector((state) => state.cart);
  const wishlistItems = useSelector((state) => state.wishlist.items);

  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    const isInCart = cartItems.items.some(
      (cartItem) => cartItem.id === item.id
    );
    if (isInCart) {
      toast.success("Item already in cart");
    } else {
      dispatch(addToCart(item));
      toast.success("Added to cart");
    }
  };

  const handleRemoveFromWishlist = (id) => {
    dispatch(removeItem(id));
    toast.success("Deleted item");
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <h1
        className="text-center font-bold mt-4 text-2xl"
        style={{
          color: mode === "dark" ? "white" : "",
        }}
      >
        Your Wishlist
      </h1>
      <div className="flex flex-col items-center">
        {wishlistItems.map((item, index) => {
          const { title, price, imageUrl, description, id } = item;

          return (
            <div
              key={index}
              className="w-full md:max-w-md lg:max-w-xl border m-5 rounded-lg shadow-md flex flex-col lg:flex-row"
              style={{
                backgroundColor: mode === "dark" ? "#282c34" : "white",
                color: mode === "dark" ? "white" : "black",
              }}
            >
              <img
                src={imageUrl}
                alt="product-image"
                className="w-full md:w-48 lg:w-64 h-auto rounded-t-lg md:rounded-l-lg lg:rounded-tl-lg lg:rounded-bl-lg"
              />
              <div className="flex flex-col justify-between p-4 w-full">
                <div>
                  <h2
                    className="text-lg font-bold mb-2"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    {title}
                  </h2>
                  <p
                    className="text-gray-700 mb-2"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    {description}
                  </p>
                  <p
                    className="text-gray-700 mb-2"
                    style={{ color: mode === "dark" ? "white" : "" }}
                  >
                    ₹ {price}
                  </p>
                </div>
                <div className="flex justify-between">
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-green-500 text-white px-3 py-2 rounded-lg font-semibold hover:bg-green-600 focus:outline-none"
                  >
                    Add to Cart
                  </button>
                  <button
                    onClick={() => handleRemoveFromWishlist(id)}
                    className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 focus:outline-none"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
        {wishlistItems.length === 0 && (
          <div className="flex justify-center items-center">
            <CgTrashEmpty
              className="text-8xl my-24"
              style={{ color: mode === "dark" ? "white" : "" }}
            />
          </div>
        )}
      </div>
    </Layout>
  );
}
