import { render } from "@testing-library/react";
import GameCard from "../../components/gameCard";
import GameCardsContainer from "../../components/gameCardsContainer";
import SharedHead from "../../components/sharedHead";

it("renders <SharedHead /> component unchanged", () => {
  const { container } = render(<SharedHead />);
  expect(container).toMatchSnapshot();
});

it("renders <GameCardsContainer /> component unchanged", () => {
    const { container } = render(<GameCardsContainer/>);
    expect(container).toMatchSnapshot();
  });

it("renders <GameCard /> component unchanged", () => {
  const { container } = render(<GameCard path="/test-path" name="TestName" />);
  expect(container).toMatchSnapshot();
});
