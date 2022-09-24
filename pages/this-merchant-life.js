import SharedHead from "../components/sharedHead";
import Footer from "../components/footer";
import Image from "next/image";
import FeatureSection from "../components/featureSection";
import headerImage from "../public/tmlHeader.png";
import NavBar from "../components/navBar";
import Video from "../components/video";
import BuyButton from "../components/buyButton";

export default function ThisMerchantLife() {
  const gameInfo = {
    name: "This Merchant Life",
    steamStoreId: "666730",
    videoId: "DEqhV7cZfP0",
    colour: "tmlGreen",
  };
  return (
    <div className="flex flex-col">
      <SharedHead />
      <NavBar />

      <main className="mx-auto mt-10 text-center subpixel-antialiased">
        <Image
          data-testid="tml-header-image"
          src={headerImage}
          alt="This Merchant Life Title Screen"
          width="1280"
          height="576"
          quality="100"
        ></Image>

        <FeatureSection
          title="Travel and Trade"
          text="Traverse the medieval kingdom of Peregrine, making a profit wherever you go! Buy grain in the argricultural hub of Lancer then sell it for a profit in the mountainous settlement of Burnish."
          imgSrc="/tmlCard-1.png"
          colour={gameInfo.colour}
        />
        <FeatureSection
          title="Pay for Protection"
          text="The roads are dangerous to travel, especially when you've got a cart full of valuable goods. Hire fighters to accompany your caravan as it makes its way through the kingdom, fight off attacks from bandits and wildlife"
          imgSrc="/tmlCard-2.png"
          colour={gameInfo.colour}
          reversed
        />
        <FeatureSection
          title="Upgrade Your Cart"
          text="Beginning with a ramshackle old trade cart, you will be able to slowly outfit it into a state of the art vessel of commerce through upgrading the wheels, structure and horses"
          imgSrc="/tmlCard-3.png"
          colour={gameInfo.colour}
        />
        <FeatureSection
          title="Make Decisions"
          text="As you explore the towns of Peregrine and the lands in between you will regularly be confronted with choices and will have to deal with their consequences"
          imgSrc="/tmlCard-4.png"
          colour={gameInfo.colour}
          reversed
        />

        <Video videoId={gameInfo.videoId} title="This Merchant Life Video" colour={gameInfo.colour}/>
        <BuyButton
          steamStoreId={gameInfo.steamStoreId}
          gameName={gameInfo.name}
          bgColour={gameInfo.colour}
        />
      </main>
      <Footer />
    </div>
  );
}
