import React from "react";
import Personaje from "../../assets/Personaje.png";
import Logo from "../../assets/logo.png";
import { slipeUp } from "../../utility/animation";

const Hero = () => {
  return (
    <section className=" w-full h-full flex items-center justify-center px-2 md:px-0">
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center h-full min-h-[70vh] md:min-h-[80vh]">
        {/* texto y descripcion */}
        <div className="flex flex-col gap-6 md:gap-8 items-center md:items-start text-center md:text-left">
          <img
            src={Logo}
            alt="Logo del juego"
            variants={slipeUp(0.2)}
            animate="animate"
            className="hidden sm:block w-32 md:w-56 mb-2 drop-shadow-lg"
          />
          <p className="text-white/90 text-base mt-10 md:text-xl leading-relaxed font-light mb-2 md:mb-4 max-w-md">
            Magic Quest es un emocionante juego de aventura en un mundo de
            fantasía donde te embarcas en una épica búsqueda mágica. Explora
            reinos misteriosos, domina poderosos hechizos y enfréntate a
            criaturas legendarias mientras desvelas secretos ocultos y te
            conviertes en el héroe supremo. ¡La magia está en tus manos!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-2 w-full justify-center md:justify-start">
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-sky-500 to-purple-600 text-white font-semibold shadow-lg hover:scale-105 hover:from-purple-600 hover:to-sky-500 transition-all duration-300"
            >
              Jugar Ahora <i className="bi bi-controller"></i>
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 px-6 py-2 rounded-full bg-white/10 text-sky-300 font-semibold border border-sky-400 hover:bg-sky-400 hover:text-white transition-all duration-300"
            >
              Ver GamePlay <i className="bi bi-youtube"></i>
            </a>
          </div>
        </div>
        {/* Imagen */}
        <div className="flex justify-center md:justify-end mt-8 md:mt-0">
          <img
            src={Personaje}
            alt="Personaje del juego"
            className="w-52 sm:w-64 md:w-96 drop-shadow-2xl animate-float"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
// Recuerda tener la animación .animate-float en tu CSS para el efecto flotante.
