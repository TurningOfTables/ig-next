import SharedHead from "../components/sharedHead";
import Footer from "../components/footer";
import Image from "next/image";
import FeatureSection from "../components/featureSection";
import headerImage from "../public/showrunnerHeader.png";
import NavBar from "../components/navBar";
import SteamBanner from "../components/steamBanner";
import GameScreenshot from "../components/gameScreenshot";

export default function Showrunner() {
  return (
    <div>
      <SharedHead />
      <NavBar />

      <main className="mx-auto mt-10 text-center subpixel-antialiased">
        <Image
          data-testid="showrunner-header-image"
          src={headerImage}
          alt="Showrunner Logo"
        ></Image>

        <FeatureSection
          title="Ut tincidunt pulvinar"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam porta dui diam, eget luctus arcu vehicula id. Integer sed purus nisl. Nulla convallis diam blandit nunc imperdiet, vel pretium turpis hendrerit."
          imgSrc="/showRunnerCard.png"
        />
        <FeatureSection
          title="Proin non libero"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sed tincidunt diam. Vestibulum scelerisque porttitor felis, et eleifend quam cursus quis. In sed facilisis ante, eu dignissim tellus."
          imgSrc="/showRunnerCard.png"
          reversed
        />
        <FeatureSection
          title="Pellentesque eu dolor"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. In id sagittis eros, in efficitur ligula. Nulla quis finibus lacus, sit amet lacinia ex. Etiam risus diam, varius eget ipsum egestas, pharetra ultricies urna."
          imgSrc="/showRunnerCard.png"
        />
        <FeatureSection
          title="Phasellus ultricies mauris"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis placerat erat ut posuere. Curabitur eu mi sit amet lectus tempor pretium in elementum dui. Phasellus congue dui felis, a tincidunt nisl viverra nec."
          imgSrc="/showRunnerCard.png"
          reversed
        />

        <SteamBanner
          name="Showrunner"
          status="out soon"
          steamStoreId="2058200"
        />

        <div className="flex flex-wrap mx-auto max-w-5xl justify-center">
          <GameScreenshot imgSrc="/showRunnerCard.png" title="Screenshot" />
          <GameScreenshot imgSrc="/showRunnerCard.png" title="Screenshot" />
          <GameScreenshot imgSrc="/showRunnerCard.png" title="Screenshot" />
          <GameScreenshot imgSrc="/showRunnerCard.png" title="Screenshot" />
          <GameScreenshot imgSrc="/showRunnerCard.png" title="Screenshot" />
          <GameScreenshot imgSrc="/showRunnerCard.png" title="Screenshot" />
          <GameScreenshot imgSrc="/showRunnerCard.png" title="Screenshot" />
          <GameScreenshot imgSrc="/showRunnerCard.png" title="Screenshot" />
          <GameScreenshot imgSrc="/showRunnerCard.png" title="Screenshot" />
        </div>
      </main>

      <Footer />
    </div>
  );
}
