import { useEffect, useState } from "react";

const ImagenesFondo = () => {
  const imagenes = [
    "/blackmambaatraslow.jpg",
    "/brooklynatraslow.jpg",
    "/savageatraslow.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndex((prev) => (prev + 1) % imagenes.length);
    }, 2000); // cada 3 segundos

    return () => clearInterval(intervalo); // limpia el intervalo al desmontar
  }, []);

  return (
    <>
      {/* Mobile: solo una imagen, que cambia */}
      <div className="absolute inset-0 flex md:hidden z-0">
        <img
          src={imagenes[index]}
          alt={`fondo ${index}`}
          className="w-full h-full object-cover transition-opacity duration-500"
        />
      </div>

      {/* Desktop: tres imágenes en fila */}
      <div className="absolute inset-0 hidden md:flex z-0">
        {imagenes.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`fondo ${i}`}
            className="w-1/3 h-full object-cover"
          />
        ))}
      </div>
    </>
  );
};

export default ImagenesFondo;
