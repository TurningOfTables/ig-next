import Image from "next/image";
import Footer from "../components/footer";
import SharedHead from "../components/sharedHead";
import GameCards from "../components/gameCards";
import NavBar from "../components/navBar";
import headerImage from "../public/header.png";
import { CompanyConfig } from "../siteConfig/companyConfig";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <SharedHead />
      <NavBar />

      <main className="m-10 text-center subpixel-antialiased">
        <Image
          data-testid="header-image"
          src={headerImage}
          alt={`${CompanyConfig.name} Logo`}
        ></Image>
        <p className="my-10 text-2xl" data-testid="intro-text-primary">
          {CompanyConfig.subheading}
        </p>
        <p
          className="max-w-md mx-auto text-xl italic"
          data-testid="intro-text-secondary"
        >
          <q>
            {CompanyConfig.quote}
          </q>
          {CompanyConfig.quoteAttribution}
        </p>
        <GameCards />
      </main>
      <Footer />
    </div>
  );
}
