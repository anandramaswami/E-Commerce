import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

function ImageSlider({ slides }: { slides: { url: string }[] }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [showSlider, setShowSlider] = useState(false);

    // Delay slider appearance by 1 second
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowSlider(true);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    return (
        <div className="w-full h-[220px] sm:h-[300px] md:h-[380px] overflow-hidden relative rounded-xl">
            
            {/* Container slides with animation */}
            <div
                className={`
                    flex transition-transform duration-700 ease-in-out
                    ${showSlider ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
                `}
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide.url}
                        className="w-full h-full flex-shrink-0 object-cover"
                    />
                ))}
            </div>

            {/* Navigation Arrows */}
            <div className="absolute inset-0 flex justify-between items-center px-3">
                <button onClick={prevSlide}>
                    <ArrowLeft className="w-8 h-8 text-white bg-gray-700 rounded-full" />
                </button>
                <button onClick={nextSlide}>
                    <ArrowRight className="w-8 h-8 text-white bg-gray-700 rounded-full" />
                </button>
            </div>
        </div>
    );
}

export default ImageSlider;
