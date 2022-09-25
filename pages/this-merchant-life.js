import SharedHead from "../components/sharedHead";
import Footer from "../components/footer";
import Image from "next/image";
import FeatureSection from "../components/featureSection";
import NavBar from "../components/navBar";
import Video from "../components/video";
import BuyButton from "../components/buyButton";
import { GameConfig } from "../siteConfig/gameConfig";
import headerImage from "../public/tmlHeader.png";

export default function ThisMerchantLife() {
  const config = GameConfig.thisMerchantLife;
  return (
    <div className="flex flex-col">
      <SharedHead />
      <NavBar />

      <main className="mx-auto mt-10 text-center subpixel-antialiased">
        <Image
          data-testid={`${config.abbreviation}-header-image`}
          src={headerImage}
          alt={`${config.name} Header Image`}
          width="1280"
          height="576"
          quality="100"
        ></Image>

        {config.features.map((f, i) => {
          const reversed = i % 2 == 1
          return (
            <FeatureSection key={i} title={f.title} text={f.text} imgSrc={f.image} colour={config.themeColourCode} reversed={reversed} />
          )
        })}

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
