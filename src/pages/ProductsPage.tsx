import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useCart } from "../context/CartContext";
import Footer from "../components/Footer";
import FilterCategoryPage from "./FilterCategoryPage";
import { products as localProducts } from "../data/Product";
import type { ProductType } from "../data/Product";

type UnifiedProduct = ProductType;

function ProductsPage() {
    const [products, setProducts] = useState<UnifiedProduct[]>([]);
    const [viewProducts, setViewProducts] = useState<UnifiedProduct[]>([]);
    const [viewCategories, setViewCategories] = useState<string[]>([]);
    const [showProducts, setShowProducts] = useState(false);
    const [isLoading, setisLoading] = useState(false);

    const { addToCart } = useCart();

    const handleCategoryFilter = (category: string) => {
        setShowProducts(false);
        if (category === "all") {
            setisLoading(true)
            console.log("isLoading", isLoading);
            setViewProducts(products);
            setisLoading(false)
        } else {
            setisLoading(true)
            setViewProducts(products.filter(p => p.category === category));
            setisLoading(false)
        }
        setTimeout(() => setShowProducts(true), 100);
    };

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                const response = await fetch("https://dummyjson.com/products");
                const data = await response.json();
                const apiProducts: ProductType[] = data.products.map((p: any) => ({
                    productId: `api-${p.id}`,
                    title: p.title,
                    description: p.description,
                    price: p.price,
                    category: p.category,
                    image: p.thumbnail,
                }));
                const localProductsWithIds: ProductType[] = localProducts.map(
                    (p: any) => ({
                        ...p,
                        productId: `local-${p.productId}`,
                    })
                );
                const combinedProducts = [
                    ...localProductsWithIds,
                    ...apiProducts,
                ];
                setProducts(combinedProducts);
                setViewProducts(combinedProducts);
                const uniqueCategories = [
                    "all",
                    ...Array.from(new Set(combinedProducts.map(p => p.category))),
                ];
                setViewCategories(uniqueCategories);
                setTimeout(() => setShowProducts(true), 400);
            } catch (error) {
                console.error("Error fetching products:", error);
            }
        };

        fetchAllProducts();
    }, []);

    return (
        <div className="bg-yellow-50 min-h-screen">
            <Navbar />
            <div>
                {isLoading ? (<p>Loading products....</p>) : null}
            </div>
            <div className=" bg-gray-800 text-white pt-28 pb-5 px-4 flex flex-wrap gap-4 sm:gap-6 justify-center">
                {viewCategories.map(category => (
                    <FilterCategoryPage key={category} category={category} onClick={handleCategoryFilter} />
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 sm:p-6 md:p-10">
                {viewProducts.map((product, index) => (
                    <div key={product.productId} className={`border border-[#edaf11] rounded-xl p-4 bg-white text-center space-y-4
                            transition-all
                            duration-700
                            ease-out
                            hover:shadow-lg
                            hover:-translate-y-1
                            ${showProducts ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`} style={{ transitionDelay: `${index * 100}ms`, }} >
                        <h2 className="text-lg md:text-xl font-bold line-clamp-2">{product.title}</h2>
                        <p className="text-lg font-semibold">$ {product.price}</p>
                        <p className="text-gray-600 capitalize text-sm">{product.category}</p>
                        <img src={product.image} alt={product.title} className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 object-cover mx-auto" />
                        <button onClick={() => addToCart(product)} className="bg-[#edaf11] w-full p-3 rounded-2xl font-semibold hover:scale-105 transition">Add to Cart</button>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default ProductsPage;
