"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [selectedOption, setSelectedOption] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    // Effectuer une action de recherche ici
    console.log("Recherche pour :", searchQuery);
  };

  return (
    <header className="bg-gray-100 text-purple-900 text-xl font-bold py-8 px-8">
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo Exchoresis"
            priority
            width={250}
            height={350}
          />
        </div>

        {/* Barre de recherche */}
        <form onSubmit={handleSearchSubmit} className="flex items-center">
          <div className="relative">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Rechercher..."
              className="rounded-md px-4 py-2 pr-10" // Ajustez le padding pour laisser de l'espace pour l'icône
            />
            <button
              type="submit"
              className="absolute right-0 top-0 h-full w-10 flex items-center justify-center bg-purple-600 text-white rounded-r-md"
            >
              <FontAwesomeIcon icon={faSearch} />
            </button>
          </div>
        </form>

        {/* Menus */}
        <nav className="flex space-x-4 items-center divide-x divide-white">
          <Link href="/" className="hover:bg-white rounded-md py-4 px-4">
            Accueil
          </Link>
          <div className="relative">
            <label
              htmlFor="publications"
              className="hover:bg-white cursor-pointer rounded-md py-4 px-4"
            >
              Publications
            </label>
            <select
              id="publications"
              className="absolute hidden"
              onChange={handleSelectChange}
              value={selectedOption}
            >
              <option value="">-- Choisissez une option --</option>
              <option value="newPublications">Numéros en cours</option>
              <option value="oldPublications">Numéros anciens</option>
            </select>
          </div>
          {selectedOption && (
            <Link
              href={`/publications/${selectedOption}`}
              className="hover:bg-white rounded-md py-4 px-4"
            >
              {selectedOption === "newPublications"
                ? "newPublication"
                : "oldPublications"}
            </Link>
          )}
          <Link href="/auteurs" className="hover:bg-white rounded-md py-4 px-4">
            Auteurs
          </Link>
          <Link
            href="/actualite"
            className="hover:bg-white rounded-md py-4 px-4"
          >
            Actualité
          </Link>
          {/* Ajoutez ici d'autres liens de menu si nécessaire */}
        </nav>
      </div>
    </header>
  );
};

export default Header;
