import { useState } from "react";
import GameDetailsSection from "./gameDetailsSection";

export default function GameDetails() {
  const [selectedGame, setSelectedGame] = useState("showrunner");

  const activeTabStyles = "bg-gray-400";
  const inactiveTabStyles = "bg-gray-200 text-gray-500";

  const gameInfo = {
    showrunner: {
      description:
        "Create and run your own TV show! An isometric management game where you craft scripts, populate your world with characters and cast actors to play them. Hire and manage staff, develop your studio and gain a dedicated following.",
      genre: "Simulation, Strategy, Management, Singleplayer",
      platforms: "PC - Steam",
      storeId: "2058200",
    },
    thisMerchantLife: {
      description:
        "A trading strategy game set in the troubled medieval kingdom of Peregrine. Turn a rickety wooden cart, two horses and a few coins into a thriving entrepreneurial triumph!",
      genre: "Strategy, RPG, Trading, Medieval",
      platforms: "PC - Steam",
      storeId: "666730",
    },
  };

  function handleClick(game, e) {
    e.preventDefault();
    setSelectedGame(game);
  }

  return (
    <div>
      <div className="text-xl mb-5">Game Details</div>
      <div className="mb-20 border border-black">
        <ul className="flex flex-wrap mx-auto text-center place-items-center my-auto">
          <li
            onClick={(e) => handleClick("showrunner", e)}
            className={`w-1/2 text-lg cursor-pointer ${
              selectedGame === "showrunner"
                ? activeTabStyles
                : inactiveTabStyles
            }`}
          >
            <div className="inline-block">Showrunner</div>
          </li>
          <li
            onClick={(e) => handleClick("thisMerchantLife", e)}
            className={`w-1/2 text-lg cursor-pointer ${
              selectedGame === "thisMerchantLife"
                ? activeTabStyles
                : inactiveTabStyles
            }`}
          >
            <div className="inline-block">This Merchant Life</div>
          </li>
        </ul>

        <div className="m-5 my-10">
          <GameDetailsSection
            title="Description"
            content={gameInfo[selectedGame].description}
          />
          <GameDetailsSection
            title="Genre"
            content={gameInfo[selectedGame].genre}
          />
          <GameDetailsSection
            title="Platforms"
            content={gameInfo[selectedGame].platforms}
          />
          <GameDetailsSection
            title="Store"
            content={gameInfo[selectedGame].storeId}
            storeLink
          />
        </div>
      </div>
    </div>
  );
}
