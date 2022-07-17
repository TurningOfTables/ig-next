import SharedHead from "../components/sharedHead";
import Footer from "../components/footer";
import FeatureSection from "../components/featureSection";
import Image from "next/image";
import headerImage from "../public/tmlHeader.png";
import NavBar from "../components/navBar";
import SteamBanner from "../components/steamBanner";
import GameScreenshot from "../components/gameScreenshot";

export default function ThisMerchantLife() {
  return (
    <div>
      <SharedHead />
      <NavBar />

      <main>
        <Image
          data-testid="tml-header-image"
          src={headerImage}
          alt="This Merchant Life Title Screen"
        ></Image>
        <FeatureSection
          title="Travel and Trade"
          text="Traverse the medieval kingdom of Peregrine, making a profit wherever you go! Buy grain in the argricultural hub of Lancer then sell it for a profit in the mountainous settlement of Burnish."
          imgSrc="/tmlCard-1.png"
        />
        <FeatureSection
          title="Pay for Protection"
          text="The roads are dangerous to travel, especially when you've got a cart full of valuable goods. Hire fighters to accompany your caravan as it makes its way through the kingdom, fight off attacks from bandits and wildlife"
          imgSrc="/tmlCard-2.png"
          reversed
        />
        <FeatureSection
          title="Upgrade Your Cart"
          text="Beginning with a ramshackle old trade cart, you will be able to slowly outfit it into a state of the art vessel of commerce through upgrading the wheels, structure and horses"
          imgSrc="/tmlCard-3.png"
        />
        <FeatureSection
          title="Make Decisions"
          text="As you explore the towns of Peregrine and the lands in between you will regularly be confronted with choices and will have to deal with their consequences"
          imgSrc="/tmlCard-4.png"
          reversed
        />
        <SteamBanner
          name="This Merchant Life"
          status="out now"
          steamStoreId="666730"
        />

        <div className="flex flex-wrap mx-auto max-w-5xl justify-center">
          <GameScreenshot imgSrc="/tmlCard.png" title="Screenshot" />
          <GameScreenshot imgSrc="/tmlCard.png" title="Screenshot" />
          <GameScreenshot imgSrc="/tmlCard.png" title="Screenshot" />
          <GameScreenshot imgSrc="/tmlCard.png" title="Screenshot" />
          <GameScreenshot imgSrc="/tmlCard.png" title="Screenshot" />
          <GameScreenshot imgSrc="/tmlCard.png" title="Screenshot" />
        </div>
        <SteamBanner
          name="This Merchant Life"
          status="out now"
          steamStoreId="666730"
        />
      </main>
      <Footer />
    </div>
  );
}
