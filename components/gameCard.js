import BuyButton from "./buyButton";

export default function GameCard({ gameConfig, imagePath }) {
  return (
    <div className="flex flex-col m-10">
      <a href={gameConfig.internalPage}
        className={`w-72 h-72 bg-cover flex flex-col-reverse ${imagePath}`}
        aria-label={`Find out more about ${gameConfig.name}`}
      >
        <div
          className={`flex items-center justify-center text-base h-7 bg-white text-black border border-black`}
          style={{ boxShadow: `0 10px 10px -10px ${gameConfig.themeColourCode}` }}
        >
          <div className="underline">Find out more</div>
        </div>
      </a>

      <BuyButton
        steamStoreId={gameConfig.steamStoreId}
        name={gameConfig.name}
        themeColourCode={gameConfig.themeColourCode}
      />
    </div>
  );
}
