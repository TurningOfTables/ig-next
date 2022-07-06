import { render } from "@testing-library/react";
import GameCards from "../../components/gameCards";
import SharedHead from "../../components/sharedHead";
import Footer from "../../components/footer";

it("renders <SharedHead /> component unchanged", () => {
  const { container } = render(<SharedHead />);
  expect(container).toMatchSnapshot();
});

it("renders <GameCardsContainer /> component unchanged", () => {
  const { container } = render(<GameCards />);
  expect(container).toMatchSnapshot();
});

it("renders <Footer /> component unchanged", () => {
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
});
