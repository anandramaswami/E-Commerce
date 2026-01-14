import React from "react";
import { useState, createContext, useContext } from "react";
import type { ProductType } from "../data/Product";

type CartItems = {
    quantity: number;
}

type CartType = CartItems & ProductType

export type CartContextType = {
    cartItems: CartType[],
    addToCart: (product: ProductType) => void,
    removeFromCart: (productId: number) => void,
    clearCart: () => void,
    totalCount: number,
    totalPrice: number,
    changeQuantity: (productId: number, quantity: number) => void,
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children } : { children: React.ReactNode }) => {

    const [cartItems, setCartItems] = useState<CartType[]>([]);

    const addToCart = (product: ProductType) => {
        setCartItems(prevItems => {
            const existingItem = prevItems.find(item => item.productId === product.productId);
            if (existingItem) {
                return prevItems.map(item => item.productId === product.productId ? { ...item, quantity: item.quantity + 1 } : item);
            }
            return [...prevItems, { ...product, quantity: 1 }];
        });
    }

    const removeFromCart = (productId: number) => {
        setCartItems(prevItems => prevItems.filter(item => item.productId !== productId));
    }

    const clearCart = () => {
        setCartItems([]);
    }
    
    const totalCount = cartItems.reduce((total, item) => total + item.quantity, 0);

    const changeQuantity = (productId: number, quantity: number) => {
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.productId === productId ? { ...item, quantity } : item
            )
        );
    }
    
    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, totalCount, totalPrice, changeQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export const useCart = () => {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};

