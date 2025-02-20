"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFilter,
  faHeadset,
  faHouse,
  faList,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const Othercard = () => {
  const games = [
    {
      name: "VPS",
      href: "/others/vps-hosting",
      image: "/assets/images/others/vps.png",
      price: "1.99€",
    },
    {
      name: "Offres Pterodactyl",
      href: "/others/pterodactyl-hosting",
      image: "/assets/images/others/pterodactyl.png",
      price: "2.99€",
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [filteredGames, setFilteredGames] = useState(games);
  const [sortOrder, setSortOrder] = useState("");

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value.toLowerCase();
    setSearchTerm(value);
    filterAndSortGames(value, sortOrder);
  };

  const handleSort = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setSortOrder(value);
    filterAndSortGames(searchTerm, value);
  };

  const handleViewAll = () => {
    setSearchTerm("");
    setSortOrder("");
    setFilteredGames(games);
  };

  const filterAndSortGames = (searchTerm: string, sortOrder: string) => {
    let filtered = games.filter((game) =>
      game.name.toLowerCase().includes(searchTerm),
    );

    if (sortOrder === "asc") {
      filtered = filtered.sort(
        (a, b) => parseFloat(a.price.slice(1)) - parseFloat(b.price.slice(1)),
      );
    } else if (sortOrder === "desc") {
      filtered = filtered.sort(
        (a, b) => parseFloat(b.price.slice(1)) - parseFloat(a.price.slice(1)),
      );
    }

    setFilteredGames(filtered);
  };

  return (
    <>
      <section className="relative w-full bg-secondary px-6 pb-16">
        <div className="container mx-auto flex max-w-7xl flex-col gap-10">
          <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
            <div className="hidden flex-row flex-wrap gap-2.5 lg:flex">
              <button
                className="btn-primary rounded-xl bg-primary px-4 py-2 hover:bg-teritiary"
                onClick={handleViewAll}
              >
                <FontAwesomeIcon icon={faHouse} className="mr-2" />
                Voir Tout
              </button>
              <div className="flex items-center gap-2">
                <FontAwesomeIcon icon={faFilter} />
                <label htmlFor="sortOrder" className="font-bold">
                  Trier par:
                </label>
                <select
                  id="sortOrder"
                  className="dropdown rounded-xl bg-primary px-4 py-2 focus:outline-none"
                  value={sortOrder}
                  onChange={handleSort}
                >
                  <option disabled value="">
                    Prix
                  </option>
                  <option value="asc">Prix le plus bas</option>
                  <option value="desc">Prix le plus haut</option>
                </select>
              </div>
            </div>
            <div className="relative flex-grow lg:flex lg:justify-end">
              <div className="relative w-full lg:w-auto">
                <input
                  type="text"
                  placeholder="Chercher pour un jeu..."
                  className="input-search w-full rounded-xl bg-primary px-4 py-2 pl-10 focus:outline-none lg:w-auto"
                  value={searchTerm}
                  onChange={handleSearch}
                />
                <FontAwesomeIcon
                  icon={faMagnifyingGlass}
                  className="absolute left-3 top-1/2 -translate-y-1/2 transform"
                />
              </div>
            </div>
          </div>
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
            {filteredGames.map((game) => (
              <li key={game.name} className="list-none">
                <Link
                  href={game.href}
                  className="group relative flex flex-col gap-3"
                >
                  <div className="duration-300 group-hover:-translate-y-1">
                    <Image
                      src={game.image}
                      alt={game.name}
                      width={208}
                      height={256}
                      className="rounded-xl border-2 border-teritiary duration-300 group-hover:border-blue-500"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="font-bold">{game.name}</div>
                    <div>
                      <p>
                        À partir de <b>{game.price}</b>
                      </p>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-5 flex flex-col items-center justify-between rounded-xl bg-primary p-3 md:flex-row">
            <div className="mb-4 flex md:mb-0">
              <FontAwesomeIcon
                size="3x"
                icon={faHeadset}
                className="mr-4 h-12 text-blue-500"
              />
              <div className="flex flex-col">
                <h2 className="font-bold">Vous ne trouvez pas un service en particulier ?</h2>
                <p>
                  Contactez notre équipe pour pouvoir trouver un service qui vous convient !
                </p>
              </div>
            </div>
            <Link href="/contact">
              <button className="w-40 rounded-xl bg-teritiary py-4 hover:bg-opacity-0 hover:outline hover:outline-teritiary active:bg-teritiary">
                Nous contacter
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Othercard;
