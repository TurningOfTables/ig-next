import SharedHead from "../components/sharedHead";
import Footer from "../components/footer";
import Image from "next/image";
import FeatureSection from "../components/featureSection";
import headerImage from "../public/tmlHeader.png";
import NavBar from "../components/navBar";
import Video from "../components/video";
import BuyButton from "../components/buyButton";
import { GameConfig } from "../gameConfig/config";

export default function ThisMerchantLife() {
  const config = GameConfig.thisMerchantLife;
  return (
    <div className="flex flex-col">
      <SharedHead />
      <NavBar />

      <main className="mx-auto mt-10 text-center subpixel-antialiased">
        <Image
          data-testid="tml-header-image"
          src={headerImage}
          alt={`${config.name} Title Screen`}
          width="1280"
          height="576"
          quality="100"
        ></Image>

        <FeatureSection
          title="Travel and Trade"
          text="Traverse the medieval kingdom of Peregrine, making a profit wherever you go! Buy grain in the argricultural hub of Lancer then sell it for a profit in the mountainous settlement of Burnish."
          imgSrc="/tmlCard-1.png"
          colour={config.themeColourCode}
        />
        <FeatureSection
          title="Pay for Protection"
          text="The roads are dangerous to travel, especially when you've got a cart full of valuable goods. Hire fighters to accompany your caravan as it makes its way through the kingdom, fight off attacks from bandits and wildlife"
          imgSrc="/tmlCard-2.png"
          colour={config.themeColourCode}
          reversed
        />
        <FeatureSection
          title="Upgrade Your Cart"
          text="Beginning with a ramshackle old trade cart, you will be able to slowly outfit it into a state of the art vessel of commerce through upgrading the wheels, structure and horses"
          imgSrc="/tmlCard-3.png"
          colour={config.themeColourCode}
        />
        <FeatureSection
          title="Make Decisions"
          text="As you explore the towns of Peregrine and the lands in between you will regularly be confronted with choices and will have to deal with their consequences"
          imgSrc="/tmlCard-4.png"
          colour={config.themeColourCode}
          reversed
        />

        <Video
          videoId={config.videoId}
          title={`${config.name} Video`}
          colour={config.themeColourCode}
        />
        <BuyButton
          steamStoreId={config.steamStoreId}
          name={config.name}
          themeColourCode={config.themeColourCode}
        />
      </main>
      <Footer />
    </div>
  );
}
