import { useState } from "react";
import { Container, Menu, X } from "lucide-react";

function Navbar() {
  // État pour ouvrir/fermer le menu mobile
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="relative flex items-center justify-between border-b-4 border-accent rounded-3xl bg-base-100 p-2 mx-20 my-5">
      {/* Logo */}
      <a href="#" className="flex items-center font-bold md:text-2xl text-3xl">
        <Container className="mr-2 text-accent" />
        Ybvlad- <span className="text-accent">Coder</span>
      </a>

      {/* Navigation (Desktop + Mobile) */}
      <nav
        className={`
          /* Style Mobile */
          ${isOpen ? "flex" : "hidden"}
          flex-col absolute right-0 top-16 w-48 bg-base-200 p-4 rounded-2xl shadow-xl z-50 border border-accent/20
          
          /* Reset Style Desktop (md:) */
          md:flex md:flex-row md:static md:w-auto md:bg-transparent md:p-0 md:shadow-none md:border-none md:space-x-4
        `}
      >
        <a href="#" className="btn btn-ghost btn-sm md:btn-accent">Accueil</a>
        <a href="#" className="btn btn-ghost btn-sm md:btn-accent">À propos</a>
        <a href="#" className="btn btn-ghost btn-sm md:btn-accent">Mes expériences</a>
        <a href="#" className="btn btn-ghost btn-sm md:btn-accent">Mes projets</a>
      </nav>

      {/* Bouton Burger (Visible uniquement sur mobile) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden btn btn-soft btn-accent btn-square"
        aria-label="Toggle menu"
      >
        {isOpen ? <X /> : <Menu />}
      </button>
    </header>
  );
}

export default Navbar;