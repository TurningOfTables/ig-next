import { render } from "@testing-library/react";
import GameCards from "../../components/gameCards";
import SharedHead from "../../components/sharedHead";
import Footer from "../../components/footer";
import FeatureSection from "../../components/featureSection";
import GameCard from "../../components/gameCard";
import SteamWidget from "../../components/steamWidget";
import SteamBanner from "../../components/steamBanner";

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

it("renders <FeatureSection /> reversed component unchanged", () => {
  const { container } = render(
    <FeatureSection
      title="Test Title"
      text="Test Text"
      imgSrc="/tmlCard-1.png"
      reversed
    />
  );
  expect(container).toMatchSnapshot();
});

it("renders <GameCard /> component unchanged", () => {
  const { container } = render(
    <GameCard
      link="/test"
      steamStoreId="0"
      imagePath="bg-[url('/tmlCard.jpg')]"
    />
  );
  expect(container).toMatchSnapshot();
});

it("renders <SteamWidget /> component unchanged", () => {
  const { container } = render(<SteamWidget />);
  expect(container).toMatchSnapshot();
});

it("renders <SteamBanner /> component unchanged", () => {
  const { container } = render(<SteamBanner />);
  expect(container).toMatchSnapshot();
});

it("renders <Footer /> component unchanged", () => {
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
});
