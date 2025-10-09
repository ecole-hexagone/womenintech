import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import ContactForm from "./ContactForm";

declare module "react" {
  interface ButtonHTMLAttributes<T> {
    popovertarget?: string;
    popoveraction?: string;
  }
  interface HTMLAttributes<T> {
    popover?: string;
  }
}

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleSpeakersClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate("/");
    setTimeout(() => {
      const speakersSection = document.getElementById("speakers");
      if (speakersSection) {
        speakersSection.scrollIntoView({ behavior: "smooth" });
      }
    }, 100);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-primary text-white shadow-md z-50">
      <div className="bg-tertiary text-white text-white text-center py-1 font-bold tracking-widest text-sm">
        <p className="text-white">SAVE THE DATE! Le 27 et 28 Novembre !</p>
      </div>
      <div className="container flex flex-col md:flex-row w-full max-w-[100rem] mx-auto p-4 flex justify-between items-center md:h-28 ">
        <div className="flex items-center flex-col w-1/4 min-w-[14rem] max-w-[20rem]">
          <Link
            to="/#hero"
            onClick={(e) => {
              e.preventDefault();
              if (window.location.pathname !== "/") {
                navigate("/");
                setTimeout(() => {
                  document
                    .getElementById("hero")
                    ?.scrollIntoView({ behavior: "smooth" });
                }, 100);
              } else {
                document
                  .getElementById("hero")
                  ?.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            <img
              src="logos/logo-hexa.svg"
              className="h-20"
              alt="Logo de École Hexagone"
            />
          </Link>
        </div>
        <nav className="flex items-center space-x-8 my-5 md:my-0 md:mr-11">
          <button data-tally-open="mV2xZv" data-tally-emoji-text="👋" data-tally-emoji-animation="wave" className=" bg-tertiary text-white hover:border-solid hover:border-2 border-tertiary text-white py-2 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer whitespace-nowrap flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z"
                clipRule="evenodd"
              />
            </svg>
            Je m'inscris
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
