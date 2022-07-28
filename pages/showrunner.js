import SharedHead from "../components/sharedHead";
import Footer from "../components/footer";
import Image from "next/image";
import FeatureSection from "../components/featureSection";
import headerImage from "../public/showrunnerHeader.png";
import NavBar from "../components/navBar";
import Video from "../components/video";
import BuyButton from "../components/buyButton";

export default function Showrunner() {
  const gameInfo = {
    name: "Showrunner",
    steamStoreId: "2058200",
    videoId: "8UPMQbm8WkQ",
    colour: "showrunnerRed",
  };
  return (
    <div>
      <SharedHead />
      <NavBar />

      <main className="mx-auto mt-10 text-center subpixel-antialiased">
        <Image
          data-testid="showrunner-header-image"
          src={headerImage}
          alt="Showrunner Logo"
          width="1280"
          height="459"
          quality="100"
        ></Image>

        <FeatureSection
          title="Craft Scripts"
          text="Put scripts together scene by scene to maximise your show's ratings"
          imgSrc="/showrunnerCard.png"
        />
        <FeatureSection
          title="Create Characters and Cast Actors"
          text="Discover new actors and cast them in your shows, developing their skills as you go"
          imgSrc="/showrunnerCard.png"
          reversed
        />
        <FeatureSection
          title="Manage Staff"
          text="Find the best staff and crew who will work together and improve their abilities over time"
          imgSrc="/showrunnerCard.png"
        />
        <FeatureSection
          title="Upgrade Your Studio"
          text="Earn enough to get better equipment and boost your show's ratings"
          imgSrc="/showrunnerCard.png"
          reversed
        />

        <BuyButton
          steamStoreId={gameInfo.steamStoreId}
          gameName={gameInfo.name}
          bgColour={`bg-${gameInfo.colour}`}
        />
        <Video videoId={gameInfo.videoId} title="Showrunner Video" />
        <BuyButton
          steamStoreId={gameInfo.steamStoreId}
          gameName={gameInfo.name}
          bgColour={`bg-${gameInfo.colour}`}
        />
      </main>

      <Footer />
    </div>
  );
}
