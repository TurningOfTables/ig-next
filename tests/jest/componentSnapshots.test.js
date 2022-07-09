import { render } from "@testing-library/react";
import GameCards from "../../components/gameCards";
import SharedHead from "../../components/sharedHead";
import Footer from "../../components/footer";
import FeatureSection from "../../components/featureSection";

it("renders <SharedHead /> component unchanged", () => {
  const { container } = render(<SharedHead />);
  expect(container).toMatchSnapshot();
});

it("renders <GameCards /> component unchanged", () => {
  const { container } = render(<GameCards />);
  expect(container).toMatchSnapshot();
});

it("renders <FeatureSection /> component unchanged", () => {
  const { container } = render(
    <FeatureSection
      title="Test Title"
      text="Test Text"
      imgSrc="/tmlCard-1.png"
    />
  );
  expect(container).toMatchSnapshot();
});

it("renders <Footer /> component unchanged", () => {
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
});
