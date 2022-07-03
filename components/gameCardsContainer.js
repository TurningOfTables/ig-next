import GameCard from "./gameCard";

export default function GameCardsContainer() {
  return (
    <div className="flex flex-row flex-wrap max-w-3xl mx-auto my-10 justify-center">
      <GameCard name="This Merchant Life" path="/this-merchant-life"/>
      <GameCard name="Showrunner" path="/showrunner" />
    </div>
  );
}
