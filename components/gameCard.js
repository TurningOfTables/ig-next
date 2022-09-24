import Link from "next/link";
import BuyButton from "./buyButton";

export default function GameCard({ gameConfig, imagePath }) {
  return (
    <div className="flex flex-col m-10">
      <Link href={gameConfig.internalPage}>
        <a
          className={`w-72 h-72 bg-cover flex flex-col-reverse ${imagePath}`}
          aria-label={`Find out more about ${gameConfig.name}`}
        >
          <div className={`shadow-${gameConfig.themeColour} shadow-lg flex items-center justify-center text-base h-6 bg-white text-black border border-black`}>
            <div className="underline">Find out more</div>
          </div>
        </a>
      </Link>

      <BuyButton
        steamStoreId={gameConfig.steamStoreId}
        name={gameConfig.name}
        themeColour={gameConfig.themeColour}
      />
    </div>
  );
}
