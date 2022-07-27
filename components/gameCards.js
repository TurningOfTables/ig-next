import GameCard from "./gameCard";

export default function GameCards() {
  return (
      <div className="flex flex-row flex-wrap justify-center">
        <GameCard
          gameName="Showrunner"
          link="/showrunner"
          steamStoreId="2058200"
          imagePath="bg-[url('/showrunnerCard.png')]"
        />
        <GameCard
          gameName="This Merchant Life"
          link="/this-merchant-life"
          steamStoreId="666730"
          imagePath="bg-[url('/tmlCard.png')]"
        />
      </div>
  );
}
