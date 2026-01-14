type FilterCategoryType = {
    category : string;
    onClick: (category: string) => void;
}

function FilterCategoryPage({ category, onClick }: FilterCategoryType) {
    return (
        <button onClick={() => onClick(category)} className="px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base capitalize rounded-full bg-gray-700 text-white hover:bg-[#edaf11] hover:text-black transition whitespace-nowrap" >
            {category}
        </button>
    );
}

export default FilterCategoryPage;
