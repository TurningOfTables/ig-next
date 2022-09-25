import { useState } from "react";
import GameDetailsSection from "./gameDetailsSection";
import { GameConfig } from "../siteConfig/gameConfig";

export default function GameDetails() {
  const [selectedGame, setSelectedGame] = useState("showrunner");

  const activeTabStyles = "text-white bg-black";
  const inactiveTabStyles = "text-black bg-white";

  function handleClick(game, e) {
    e.preventDefault();
    setSelectedGame(game);
  }

  return (
    <div>
      <div className="text-2xl mb-5">Game Details</div>
      <div className="mb-20 border border-black">
        <ul className="flex flex-wrap text-center place-items-center h-full border-b">
          <li
            onClick={(e) => handleClick("showrunner", e)}
            className={`w-1/2 text-xl cursor-pointer h-full ${selectedGame === "showrunner"
                ? activeTabStyles
                : inactiveTabStyles
              }`}
          >
            <div>{GameConfig.showrunner.name}</div>
          </li>
          <li
            onClick={(e) => handleClick("thisMerchantLife", e)}
            className={`w-1/2 text-xl cursor-pointer h-full ${selectedGame === "thisMerchantLife"
                ? activeTabStyles
                : inactiveTabStyles
              }`}
          >
            <div>{GameConfig.thisMerchantLife.name}</div>
          </li>
        </ul>

        <div>
          <GameDetailsSection
            title="Description"
            content={GameConfig[selectedGame].description}
          />
          <GameDetailsSection
            title="Genre"
            content={GameConfig[selectedGame].genre}
          />
          <GameDetailsSection
            title="Platforms"
            content={GameConfig[selectedGame].platforms}
          />
          <GameDetailsSection
            title="Store"
            content={GameConfig[selectedGame].steamStoreId}
            storeLink
          />
        </div>
      </div>
    </div>
  );
}
