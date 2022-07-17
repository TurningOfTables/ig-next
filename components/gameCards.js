import GameCard from "./gameCard";

export default function GameCards() {
  return (
    <div className="flex flex-col text-4xl mt-5">
      <div className="flex flex-row flex-wrap max-w-3xl mx-auto justify-center">
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
    </div>
  );
}
