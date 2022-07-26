import SharedHead from "../components/sharedHead";
import Footer from "../components/footer";
import Image from "next/image";
import FeatureSection from "../components/featureSection";
import headerImage from "../public/showrunnerHeader.png";
import NavBar from "../components/navBar";
import Video from "../components/video";
import BuyButton from "../components/buyButton";
import GameScreenshots from "../components/gameScreenshots";

export default function Showrunner() {
  const gameInfo = {
    name: "Showrunner",
    steamStoreId: "2058200",
    videoId: "8UPMQbm8WkQ",
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
        ></Image>

        <FeatureSection
          title="Ut tincidunt pulvinar"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta dui diam, eget luctus arcu vehicula id. Integer sed purus nisl. Nulla convallis diam blandit nunc imperdiet, vel pretium turpis hendrerit."
          imgSrc="/showrunnerCard.png"
        />
        <FeatureSection
          title="Proin non libero"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tincidunt diam. Vestibulum scelerisque porttitor felis, et eleifend quam cursus quis. In sed facilisis ante, eu dignissim tellus."
          imgSrc="/showrunnerCard.png"
          reversed
        />
        <FeatureSection
          title="Pellentesque eu dolor"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id sagittis eros, in efficitur ligula. Nulla quis finibus lacus, sit amet lacinia ex. Etiam risus diam, varius eget ipsum egestas, pharetra ultricies urna."
          imgSrc="/showrunnerCard.png"
        />
        <FeatureSection
          title="Phasellus ultricies mauris"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis placerat erat ut posuere. Curabitur eu mi sit amet lectus tempor pretium in elementum dui. Phasellus congue dui felis, a tincidunt nisl viverra nec."
          imgSrc="/showrunnerCard.png"
          reversed
        />

        <BuyButton
          steamStoreId={gameInfo.steamStoreId}
          gameName={gameInfo.name}
        />
        <Video videoId={gameInfo.videoId} title="Showrunner Video" />

        <BuyButton
          steamStoreId={gameInfo.steamStoreId}
          gameName={gameInfo.name}
        />
        <GameScreenshots
          screenshots={[
            { imgSrc: "/showrunnerCard.png", title: "Screenshot" },
            { imgSrc: "/showrunnerCard.png", title: "Screenshot" },
            { imgSrc: "/showrunnerCard.png", title: "Screenshot" },
            { imgSrc: "/showrunnerCard.png", title: "Screenshot" },
            { imgSrc: "/showrunnerCard.png", title: "Screenshot" },
            { imgSrc: "/showrunnerCard.png", title: "Screenshot" },
          ]}
        />
        <BuyButton
          steamStoreId={gameInfo.steamStoreId}
          gameName={gameInfo.name}
        />
      </main>

      <Footer />
    </div>
  );
}
