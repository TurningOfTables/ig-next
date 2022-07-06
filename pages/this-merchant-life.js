import SharedHead from "../components/sharedHead";
import Image from "next/image";
import headerImage from "../public/tmlHeader.jpg"

export default function ThisMerchantLife() {
  return (
    <div className="mx-auto mt-10 text-center subpixel-antialiased">
      <SharedHead />

      <main>
        <Image
          data-testid="header-image"
          src={headerImage}
          alt="This Merchant Life Header Image"
        ></Image>
      </main>

      <footer className="text-left mt-2 bottom-0" data-testid="footer">
        © Inexplicable Games
      </footer>
    </div>
  );
}
