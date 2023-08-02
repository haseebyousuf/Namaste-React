import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, clearCart, removeItem } from "../utils/cartSlice";
const Cart = () => {
  const cart = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleRemoveItem = (item) => {
    dispatch(removeItem(item));
  };
  return (
    <div className='w-4/5 flex justify-center m-auto'>
      {cart.length === 0 ? (
        <h1 className='text-3xl font-bold'>Your cart is empty</h1>
      ) : (
        <div className=''>
          {cart.map((item) => (
            <div
              key={item.id}
              className='p-2 flex justify-between items-center w-full'
            >
              <h4 className='font-bold  mx-4 w-2/4'>{item.name}</h4>
              <div className=' border-green-500 border-solid border-2 flex px-4 mx-2 justify-between items-center'>
                <button className='px-1' onClick={() => handleRemoveItem(item)}>
                  {" "}
                  -{" "}
                </button>
                <p className='mx-2'>{item.quantity}</p>
                <button
                  className='px-1'
                  onClick={() => {
                    dispatch(addItem(item));
                  }}
                >
                  {" "}
                  +{" "}
                </button>
              </div>
              <p className='text-sm mx-2'>₹{item.price / 100}</p>
            </div>
          ))}
          <button
            className='px-4 py-2 bg-red-300 mt-4 font-bold  rounded hover:bg-red-600 hover:text-white'
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            {" "}
            Clear Cart
          </button>
        </div>
      )}
    </div>
  );
};
export default Cart;
