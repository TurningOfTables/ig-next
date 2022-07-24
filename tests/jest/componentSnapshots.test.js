import { render } from "@testing-library/react";
import GameCards from "../../components/gameCards";
import SharedHead from "../../components/sharedHead";
import Footer from "../../components/footer";
import FeatureSection from "../../components/featureSection";
import GameCard from "../../components/gameCard";
import SteamWidget from "../../components/steamWidget";
import SteamBanner from "../../components/steamBanner";
import GameScreenshot from "../../components/gameScreenshot";
import NavBar from "../../components/navBar";
import ContactUs from "../../components/contactUs";
import GameDetails from "../../components/gameDetails";
import GameDetailsSection from "../../components/gameDetailsSection";
import PresskitSection from "../../components/presskitSection";
import Video from "../../components/video";

it("renders <ContactUs /> component unchanged", () => {
  const { container } = render(<ContactUs />);
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

it("renders <Footer /> component unchanged", () => {
  const { container } = render(<Footer />);
  expect(container).toMatchSnapshot();
});

it("renders <GameCard /> component unchanged", () => {
  const { container } = render(
    <GameCard
      link="/test"
      steamStoreId="0"
      imagePath="bg-[url('/tmlCard.png')]"
    />
  );
  expect(container).toMatchSnapshot();
});

it("renders <GameCards /> component unchanged", () => {
  const { container } = render(<GameCards />);
  expect(container).toMatchSnapshot();
});

it("renders <GameDetails /> component unchanged", () => {
  const { container } = render(<GameDetails />);
  expect(container).toMatchSnapshot();
});

it("renders <GameDetailsSection /> component unchanged", () => {
  const { container } = render(
    <GameDetailsSection title="Test" content="Test" />
  );
  expect(container).toMatchSnapshot();
});

it("renders <GameDetailsSection /> store link component unchanged", () => {
  const { container } = render(
    <GameDetailsSection title="Test" content="Test" storeLink />
  );
  expect(container).toMatchSnapshot();
});

it("renders <GameScreenshot /> component unchanged", () => {
  const { container } = render(
    <GameScreenshot title="Test" imgSrc="/test.png" />
  );
  expect(container).toMatchSnapshot();
});

it("renders <PresskitSection /> component unchanged", () => {
  const { container } = render(<PresskitSection title="Test" content="Test" />);
  expect(container).toMatchSnapshot();
});

it("renders <SharedHead /> component unchanged", () => {
  const { container } = render(<SharedHead />);
  expect(container).toMatchSnapshot();
});

it("renders <SteamBanner /> component unchanged", () => {
  const { container } = render(<SteamBanner />);
  expect(container).toMatchSnapshot();
});

it("renders <SteamWidget /> component unchanged", () => {
  const { container } = render(<SteamWidget />);
  expect(container).toMatchSnapshot();
});

it("renders <Video /> component unchanged", () => {
  const { container } = render(<Video videoId="8UPMQbm8WkQ" title="Test" />);
  expect(container).toMatchSnapshot();
});
