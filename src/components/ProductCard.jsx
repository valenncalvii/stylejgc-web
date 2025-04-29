import { useState, useEffect, useRef } from "react";

const ProductCard = ({ id, image1, image2, name }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showAltImage, setShowAltImage] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    }; // Detectar mobile al cargar y al redimensionar
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const currentImage = isMobile
    ? showAltImage
      ? image2
      : image1
    : isHovered
    ? image2
    : image1;

  return (
    <div
      key={id}
      className="group relative bg-black rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:scale-105 w-full max-w-xs mx-auto"
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
    >
      <img
        src={currentImage}
        alt={name}
        className="aspect-square w-full py-2 object-contain rounded-t-xl"
      />

      {isMobile && (
        <button
          onClick={() => setShowAltImage((prev) => !prev)}
          className="absolute top-2 right-2 bg-white text-black px-3 py-1 text-sm rounded-md shadow-md z-10"
        >
          Ver {showAltImage ? "anterior" : "otra"}
        </button>
      )}

      <div className="p-4 flex flex-col items-center text-center">
        <h2 className="text-lg font-family text-white mb-2">{name}</h2>
        <a
          href="https://www.instagram.com/style.jgc"
          target="_blank"
          aria-label="Comprar ahora"
          rel="noopener noreferrer"
          className="w-full bg-font-special text-font-primary py-2 rounded-md hover:bg-font-special/50 transition text-center block"
        >
          Comprar ahora
        </a>
      </div>
    </div>
  );
};

export default ProductCard;
