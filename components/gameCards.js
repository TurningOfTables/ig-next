import GameCard from "./gameCard";
import { GameConfig } from "../siteConfig/gameConfig";

export default function GameCards() {
  return (
      <div className="flex flex-row flex-wrap justify-center">
        <GameCard
          gameConfig={GameConfig.showrunner}
          imagePath="bg-[url('/showrunnerCard.png')]"
        />
        <GameCard
          gameConfig={GameConfig.thisMerchantLife}
          imagePath="bg-[url('/tmlCard.png')]"
        />
      </div>
  );
}
