import { create } from "zustand";
import { persist } from "zustand/middleware";

type cartTypes = {
  id: number;
  title: string;
  price: number;
  quantity: number;
  discountPercentage: number;
  thumbnail: string;
};

type CartState = {
  cart: cartTypes[];
  addToCart: (item: cartTypes) => void;
  increaseQty: (id: number) => void;
  decreaseQty: (id: number) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cart: [],
      addToCart: (newItem) =>
        set((state) => {
          const existing = state.cart.find((item) => item.id === newItem.id);

          if (existing) {
            return {
              cart: state.cart.map((item) =>
                item.id === newItem.id
                  ? {
                      ...item,
                      quantity:
                        newItem.quantity > 0
                          ? newItem.quantity
                          : item.quantity + 1,
                    }
                  : item
              ),
            };
          }

          return {
            cart: [
              ...state.cart,
              {
                ...newItem,
                quantity: newItem.quantity > 0 ? newItem.quantity : 1,
              },
            ],
          };
        }),
      increaseQty: (id: number) =>
        set((state) => {
          return {
            cart: state.cart.map((item) =>
              item.id === id
                ? {
                    ...item,
                    quantity: item.quantity + 1,
                  }
                : item
            ),
          };
        }),
      decreaseQty: (id: number) =>
        set((state) => {
          return {
            cart: state.cart
              .map((item) =>
                item.id === id
                  ? {
                      ...item,
                      quantity: item.quantity - 1,
                    }
                  : item
              )
              .filter((filteredItem) => filteredItem.quantity > 0),
          };
        }),
      removeItem: (id: number) =>
        set((state) => {
          return {
            cart: state.cart.filter((item) => item.id !== id),
          };
        }),
      clearCart: () =>
        set(() => {
          return {
            cart: [],
          };
        }),
    }),
    {
      name: "cart-storage",
    }
  )
);
