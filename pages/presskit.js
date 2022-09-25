import NavBar from "../components/navBar";
import SharedHead from "../components/sharedHead";
import PresskitSection from "../components/presskitSection";
import Footer from "../components/footer";
import GameDetails from "../components/gameDetails";
import EmailSection from "../components/emailSection";
import { CompanyConfig } from "../siteConfig/companyConfig";

export default function Presskit() {
  return (
    <div>
      <SharedHead />
      <NavBar />

      <main className="container max-w-4xl mx-auto mt-10 text-left subpixel-antialiased">
        <h1 className="text-3xl mt-32 mb-10">Press Kit</h1>



        <PresskitSection
          title="About the Developer"
          content={CompanyConfig.longDescription}
        />



        <EmailSection content={CompanyConfig.email} />

        <PresskitSection
          title="Twitter"
          content={CompanyConfig.twitter}
        />

        <PresskitSection
          title="Website"
          content={CompanyConfig.website}
        />

        <GameDetails />
      </main>

      <Footer />
    </div>
  );
}
