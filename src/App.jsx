import "./App.css";
import remeras from "./data/remeras.json";
import ProductCard from "./components/ProductCard";
import ImagenesFondo from "./components/ImagenesFondo";

function App() {
  return (
    <main className="bg-primary">
      <section className="flex min-h-screen flex-col items-center justify-between">
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-40 flex justify-center">
          <img
            src="/logo.png"
            alt="Logo tienda"
            className="w-20 h-20 rounded-full shadow-lg"
          />
        </div>
        <div className="relative w-screen h-screen overflow-hidden">
          <ImagenesFondo />
          {/* Capa oscura para mejorar visibilidad del texto */}
          <div className="absolute inset-0 bg-black opacity-75 z-10"></div>

          {/* Texto en el centro */}
          <div className="relative z-30 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h1 className="text-4xl font-family md:text-6xl font-bold mb-2">
              ¡Bienvenido a style JGC!
            </h1>
            <p className="text-lg font-family md:text-xl">
              Descubrí lo mejor en ropa urbana y streetwear.
            </p>
            <button
              onClick={() => {
                document
                  .getElementById("cards-remeras")
                  .scrollIntoView({ behavior: "smooth" });
              }}
              className="font-family mt-3.5 rounded-xl cursor-pointer text-md bg-primary p-2.5 px-4 text-white font-bold hover:scale-105 transition duration-300 ease-in-out"
            >
              Tienda
            </button>
          </div>
        </div>
      </section>
      <section id="cards-remeras">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <div className="mt-6 grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-7">
            {remeras.map((remera) =>
              /*<div
              key={remera.id}
              className="bg-white shadow-lg rounded-lg p-4 m-4 max-w-sm overflow-hidden"
            >
              <img
                src={remera.src}
                alt={remera.name}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-bold mt-2">{remera.name}</h2>
              <p className="text-gray-700">{remera.description}</p>
              <p className="text-lg font-bold mt-2">${remera.price}</p>
            </div>*/
              ProductCard({
                id: remera.id,
                image1: remera.src[0].src,
                image2: remera.src[1].src,
                name: remera.name,
              })
            )}
          </div>
        </div>
      </section>
      <footer>
        <div className="bg-primary flex flex-col justify-center items-center text-white text-center py-4">
          <p className="font-family">
            © 2023 style JGC. Todos los derechos reservados.
          </p>

          <a
            href="https://www.instagram.com/style.jgc"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-400 transition duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              className="w-12 h-12 p-2 text-font-primary stroke-1 hover:text-font-special transition-colors duration-300"
              fill="currentColor"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </a>
        </div>
      </footer>
    </main>
  );
}

export default App;
