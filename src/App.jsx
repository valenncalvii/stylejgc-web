import "./App.css";
import remeras from "./data/remeras.json";
import ProductCard from "./components/ProductCard";
import ImagenesFondo from "./components/ImagenesFondo";
import RemeraSlider from "./components/RemeraSlider";
import Footer from "./components/Footer";

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
      <section
        id="cards-remeras"
        className="w-full h-screen bg-primary flex items-center justify-center"
      >
        <div className="w-full px-4">
          <RemeraSlider />
        </div>
      </section>
      <Footer></Footer>
    </main>
  );
}

export default App;
