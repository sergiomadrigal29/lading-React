import Hero from "./componets/Hero/Hero";
import Navbar from "./componets/Navbar/Navbar";
import Fondo from "./assets/Fondo.png";

function App() {
  const bgImagen = {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
    position: "relative",
  };

  return (
    <div
      style={bgImagen}
      className="min-h-screen w-full overflow-x-hidden flex flex-col"
    >
      <Navbar />
      <main className="flex-1 flex flex-col mt-22">
        <Hero />
      </main>
    </div>
  );
}

export default App;
