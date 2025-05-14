import { useRef } from "react";
import ProductCard from "./ProductCard"; // tu componente actual
import remeras from "../data/remeras.json"; // tu archivo JSON

const RemeraSlider = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full py-10">
      <div className="relative">
        {/* Botón izquierdo */}
        <button
          onClick={() => scroll("left")}
          className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
        >
          ←
        </button>

        {/* Contenedor scrollable */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto h-120 no-scrollbar space-x-4 p-4 scroll-smooth"
        >
          {remeras.map((remera) => (
            <div className="flex-shrink-0 w-64" key={remera.id}>
              <ProductCard
                id={remera.id}
                image1={remera.src[0].src}
                image2={remera.src[1].src}
                name={remera.name}
              />
            </div>
          ))}
        </div>

        {/* Botón derecho */}
        <button
          onClick={() => scroll("right")}
          className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-md hover:scale-110 transition"
        >
          →
        </button>
      </div>
    </div>
  );
};

export default RemeraSlider;
