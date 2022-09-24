import SharedHead from "../components/sharedHead";
import Footer from "../components/footer";
import Image from "next/image";
import FeatureSection from "../components/featureSection";
import headerImage from "../public/showrunnerHeader.png";
import NavBar from "../components/navBar";
import Video from "../components/video";
import BuyButton from "../components/buyButton";
import { GameConfig } from "../gameConfig/config";

export default function Showrunner() {
  const config = GameConfig.showrunner
  return (
    <div className="flex flex-col">
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
          text="Play scene cards to create the story outline for each episode. Balance card costs, rewards and powerful combinations to define award winning storylines for your show!"
          imgSrc="/showrunnerScriptCard.png"
          colour={config.themeColourCode}
        />
        <FeatureSection
          title="Create Characters and Cast Actors"
          text="Use your imagination to make everyone's soon-to-be favourite new characters! Pick an archetype to start, like Hero, Underdog or Joker, then cast an actor who fits the bill. Customise their appearance then develop them over time with character traits."
          imgSrc="/showrunnerCharacterCard.png"
          reversed
          colour={config.themeColourCode}
        />
        <FeatureSection
          title="Manage Staff"
          text="Keep everyone happy both in front of and behind the camera! Hire and fire actors, directors, editors, writers and crew, all with varying abilities, personalities and specialisms. Rotate and rest staff to manage their energy and keep everyone working at their best."
          imgSrc="/showrunnerStaffCard.png"
          colour={config.themeColourCode}
        />
        <FeatureSection
          title="Upgrade Your Studio"
          text="Buy new items and furniture to improve your studio and help your staff do an even better job. Over time increase your studio's reputation, expand with new rooms and equipment options and eventually move into larger and more prestigious facilities."
          imgSrc="/showrunnerStudioCard.png"
          reversed
          colour={config.themeColourCode}
        />

        <Video videoId={config.videoId} title="Showrunner Video" colour={config.themeColourCode} />
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
