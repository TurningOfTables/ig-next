import { render } from "@testing-library/react";
import { GameConfig } from "../../siteConfig/gameConfig";
import BuyButton from "../../components/buyButton";
import EmailSection from "../../components/emailSection";
import GameCards from "../../components/gameCards";
import SharedHead from "../../components/sharedHead";
import Footer from "../../components/footer";
import FeatureSection from "../../components/featureSection";
import GameCard from "../../components/gameCard";
import GameDetails from "../../components/gameDetails";
import GameDetailsSection from "../../components/gameDetailsSection";
import PresskitSection from "../../components/presskitSection";
import NavBar from "../../components/navBar";
import Video from "../../components/video";
import AssetLinks from "../../components/assetLinks";

it("renders <AssetLinks /> component unchanged", () => {
  const { container } = render(
    <AssetLinks title="Assets" game="showrunner" />
  )
  expect(container).toMatchSnapshot();
})

it("renders <BuyButton /> component unchanged", () => {
  const { container } = render(
    <BuyButton steamStoreId="1234" name="blah" themeColourCode="#22959" />
  )
  expect(container).toMatchSnapshot();
})

it("renders <EmailSection /> component unchanged", () => {
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY = "foo"
  const { container } = render(
    <EmailSection />
  )
  expect(container).toMatchSnapshot();
})

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
      gameConfig={GameConfig.thisMerchantLife}
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

it("renders <NavBar /> component unchanged", () => {
  const { container } = render(
    <NavBar />
  )
  expect(container).toMatchSnapshot();
})

it("renders <PresskitSection /> component unchanged", () => {
  const { container } = render(<PresskitSection title="Test" content="Test" />);
  expect(container).toMatchSnapshot();
});

it("renders <SharedHead /> component unchanged", () => {
  const { container } = render(<SharedHead />);
  expect(container).toMatchSnapshot();
});

it("renders <Video /> component unchanged", () => {
  const { container } = render(<Video videoId="8UPMQbm8WkQ" title="Test" />);
  expect(container).toMatchSnapshot();
});
