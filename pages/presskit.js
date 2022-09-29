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

      <main className="container mx-auto max-w-4xl mt-10 text-left subpixel-antialiased">
        <div className="mx-5">
          <h1 className="text-3xl mb-10">Press Kit</h1>
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
        </div>

      </main>
      <Footer />
    </div>
  );
}
