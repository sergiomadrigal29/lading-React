import React, { useState } from "react";
import Logo from "../../assets/logo.png";

const Navbarlinks = [
  {
    id: 1,
    title: "Inicio",
    link: "/",
  },
  {
    id: 2,
    title: "Nosostros",
    link: "#",
  },
  {
    id: 3,
    title: "Contactanos",
    link: "#",
  },
  {
    id: 4,
    title: "Soporte",
    link: "#",
  },
];

const SocialLinks = [
  {
    id: 1,
    title: "Facebook",
    link: "https://www.facebook.com",
    icon: "bi bi-facebook",
  },
  {
    id: 2,
    title: "TikTok",
    link: "https://www.tiktok.com",
    icon: "bi bi-tiktok",
  },
  {
    id: 3,
    title: "Instagram",
    link: "https://www.instagram.com",
    icon: "bi bi-instagram",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-50 ">
      {/* Navbar principal */}
      <div
        className={`flex justify-between items-center px-4 py-3 md:px-8 md:py-4 transition-all duration-500
        bg-purple/10 backdrop-blur-2xl shadow-none
        ${isOpen ? "opacity-0 pointer-events-none" : "opacity-100"}
        `}
      >
        {/* Logo minimal */}
        <a href="/">
          <img src={Logo} alt="Logo del sitio" className="w-24 h-auto" />
        </a>

        {/* Botón hamburguesa minimal */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white focus:outline-none transition-transform duration-300 hover:scale-110"
          aria-label="Abrir menú"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Enlaces desktop minimal */}
        <ul className="hidden md:flex space-x-6">
          {Navbarlinks.map((link) => (
            <li key={link.id}>
              <a
                className="text-white text-base px-2 py-1 rounded transition-all duration-300 hover:text-sky-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-300"
                href={link.link}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>

        {/* SocialLinks desktop minimal */}
        <div className="hidden md:flex space-x-4 ml-6">
          {SocialLinks.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl rounded-full p-2 transition-all duration-300 hover:text-sky-300 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-sky-300"
              aria-label={social.title}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>

      {/* Menú mobile minimal con transición suave y más transparencia */}
      <div
        className={`md:hidden fixed inset-0 z-50 flex flex-col items-center justify-center bg-white/30 backdrop-blur-2xl transition-all duration-500 ease-in-out
        ${
          isOpen
            ? "opacity-100 pointer-events-auto scale-100"
            : "opacity-0 pointer-events-none scale-95"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-6 text-black transition-transform duration-300 hover:scale-110"
          aria-label="Cerrar menú"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <ul className="space-y-8 transition-all duration-500">
          {Navbarlinks.map((link) => (
            <li key={link.id}>
              <a
                className="text-black text-2xl px-4 py-2 rounded transition-all duration-300 hover:text-sky-500 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-sky-300"
                href={link.link}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex space-x-6 mt-10 transition-all duration-500">
          {SocialLinks.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black text-2xl rounded-full p-3 transition-all duration-300 hover:text-sky-500 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-sky-300"
              aria-label={social.title}
            >
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
