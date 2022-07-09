import SharedHead from "../components/sharedHead";
import Footer from "../components/footer"
import Image from "next/image";
import headerImage from "../public/showrunnerHeader.png"

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
      </main>

      <Footer />
    </div>
  );
}
