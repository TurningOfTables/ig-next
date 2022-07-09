import SharedHead from "../components/sharedHead";
import Footer from "../components/footer";
import Image from "next/image";
import FeatureSection from "../components/featureSection";
import FeatureSectionReversed from "../components/featureSectionReversed";
import headerImage from "../public/showrunnerHeader.png";

export default function Showrunner() {
  return (
    <div className="mx-auto mt-10 text-center subpixel-antialiased">
      <SharedHead />

      <main>
        <Image
          data-testid="showrunner-header-image"
          src={headerImage}
          alt="Showrunner Logo"
        ></Image>

        <FeatureSection
          title="Travel and Trade"
          text="Traverse the medieval kingdom of Peregrine, making a profit wherever you go! Buy grain in the argricultural hub of Lancer then sell it for a profit in the mountainous settlement of Burnish."
          imgSrc="/tmlCard-1.png"
        />
        <FeatureSectionReversed
          title="Pay for Protection"
          text="The roads are dangerous to travel, especially when you've got a cart full of valuable goods. Hire fighters to accompany your caravan as it makes its way through the kingdom, fight off attacks from bandits and wildlife"
          imgSrc="/tmlCard-2.png"
        />
        <FeatureSection
          title="Upgrade Your Cart"
          text="Beginning with a ramshackle old trade cart, you will be able to slowly outfit it into a state of the art vessel of commerce through upgrading the wheels, structure and horses"
          imgSrc="/tmlCard-3.png"
        />
        <FeatureSectionReversed
          title="Make Decisions"
          text="As you explore the towns of Peregrine and the lands in between you will regularly be confronted with choices and will have to deal with their consequences"
          imgSrc="/tmlCard-4.png"
        />
      </main>

      <Footer />
    </div>
  );
}
