import GameCard from "./gameCard";

export default function GameCards() {
  return (
    <div className="flex flex-col text-4xl mt-20">
      <h1>Projects</h1>
      <div className="flex flex-row flex-wrap max-w-3xl mx-auto my-5 justify-center">
        <GameCard
          link="/showrunner"
          steamStoreId="2058200"
          imagePath="bg-[url('/showrunnerCard.png')]"
        />
        <GameCard
          link="/this-merchant-life"
          steamStoreId="666730"
          imagePath="bg-[url('/tmlCard.jpg')]"
        />
      </div>
    </div>
  );
}
