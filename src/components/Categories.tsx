import { useEffect, useState } from "react";
import { products } from "../data/Product";


function Categories() {
    const [dummyProducts, setDummyProducts] = useState<any[]>([]);
    const [dummyCategories, setDummyCategories] = useState<string[]>([]);

    const localCategories = [...new Set(products.map(p => p.category))];

    useEffect(() => {
        const loadData = async () => {
            try {
                const res = await fetch("https://dummyjson.com/products");
                const dummy = await res.json();

                setDummyProducts(dummy.products);

                const dummyCats = [
                    ...new Set(dummy.products.map((p: any) => p.category))
                ] as string[];
                setDummyCategories(dummyCats);

            } catch (err) {
                console.log("Error:", err);
            }
        };

        loadData();
    }, []);

    return (
        <div
            className="
                mb-7
                flex
                gap-4 sm:gap-6
                items-center
                overflow-x-auto
                md:overflow-x-visible
                md:flex-wrap
                md:justify-center
                scrollbar-hide
                px-2
            "
        >
            {localCategories.map((category, index) => {
                const product = products.find(p => p.category === category);
                return (
                    <div
                        key={index}
                        className="
                            flex flex-col items-center cursor-pointer group
                            min-w-[90px] sm:min-w-[110px]
                        "
                    >
                        <div
                            className="
                                p-3 sm:p-4
                                bg-gray-100 rounded-full shadow-sm
                                group-hover:bg-gray-200
                                group-hover:scale-105
                                transition-all duration-300
                            "
                        >
                            <img
                                src={product?.image}
                                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                            />
                        </div>
                        <p className="text-xs sm:text-sm mt-2 whitespace-nowrap text-center">
                            {category}
                        </p>
                    </div>
                );
            })}

            {dummyCategories.map((category, index) => {
                const product = dummyProducts.find(p => p.category === category);
                return (
                    <div
                        key={index}
                        className="
                            flex flex-col items-center cursor-pointer group
                            min-w-[90px] sm:min-w-[110px]
                        "
                    >
                        <div
                            className="
                                p-3 sm:p-4
                                bg-gray-100 rounded-full shadow-sm
                                group-hover:bg-gray-200
                                group-hover:scale-105
                                transition-all duration-300
                            "
                        >
                            <img
                                src={product?.images?.[0]}
                                className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 object-contain"
                            />
                        </div>
                        <p className="text-xs sm:text-sm mt-2 whitespace-nowrap text-center">
                            {category}
                        </p>
                    </div>
                );
            })}
        </div>
    );
}

export default Categories;
