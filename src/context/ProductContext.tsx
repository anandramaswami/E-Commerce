import { createContext, useContext, useState } from "react";
import { products } from "../data/Product";
import type { ProductType } from "../data/Product";

type ProductContextType = {
    products: ProductType[];
    searchTerm: string;
    setSearchTerm: (value: string) => void;
    filteredProducts: ProductType[];
};

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider = ({ children }: { children: React.ReactNode }) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <ProductContext.Provider value={{ products: products, searchTerm, setSearchTerm, filteredProducts }} >
            {children}
        </ProductContext.Provider>
    );
};

export const useProducts = () => {
    const context = useContext(ProductContext);
    if (!context) {
        throw new Error("useProducts must be used within ProductProvider");
    }
    return context;
};
