import { useState } from "react";

const ProductCard = ({ id, image1, image2, name }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      key={id}
      className="group relative bg-black rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:scale-105 w-full max-w-xs mx-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={isHovered ? image2 : image1}
        alt={name}
        className="aspect-square w-full py-2 object-contain rounded-t-xl"
      />

      <div className="p-4 flex flex-col items-center text-center">
        <h3 className="text-lg font-family text-white mb-2">{name}</h3>
        <a
          href="https://www.instagram.com/style.jgc"
          target="_blank"
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
